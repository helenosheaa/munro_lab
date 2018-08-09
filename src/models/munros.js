const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Munros = function () {
  this.munros = [];
};

Munros.prototype.getData = function () {
  const requestHelper = new RequestHelper('https://munroapi.herokuapp.com/api/munros');
  requestHelper.get((data) => {
    this.handleDataReady(data);
    PubSub.publish('Monros:munros-data-ready', this.munros);
  });
};

Munros.prototype.handleDataReady = function (munros) {
  const munroNames = this.getMunroNames(munros);
  this.modelMunros(munros, munroNames);
};

Munros.prototype.getMunroNames = function (munros) {
  return munros
    .map(munro => munro.name);
    // .filter((name, index, names) => names.indexOf(name) === index;
};

Munros.prototype.modelMunros = function (munros, munroNames) {
  this.munros = munroNames.map((munroName) => {
    return {
      name: munroName,
      meaning: this.munrosByMeaning(munros, munroName)
      height: this.munrosByHeight(munros, munroName)
    };
  });
};

Munros.prototype.munrosByMeaning = function (munros, meaning) {
  return munros.filter(munro => munro.meaning === meaning);
};

Munros.prototype.munrosByHeight = function (munros, height) {
  return munros.filter(munro => munro.height === height);
};

module.exports = Munros;
