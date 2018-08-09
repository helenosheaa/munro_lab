const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Munros = function () {
  this.munros = [];
};

Munros.prototype.getData = function () {
  const requestHelper = new RequestHelper('https://munroapi.herokuapp.com/api/munros');
  requestHelper.get((data) => {
    this.handleDataReady(data);
    PubSub.publish('Munros:munros-data-ready', this.munros);
  });
};

Munros.prototype.handleDataReady = function (munros) {
  this.munros = munros;
};

module.exports = Munros;
