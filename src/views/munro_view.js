const PubSub = require('../helpers/pub_sub.js');

const MunroView = function (container, munro) {
  this.munrosContainer = container;
  this.munro = munro;
};

MunroView.prototype.render = function () {
  const munroContainer = document.createElement('div');
  munroContainer.classList.add('munro');

  const munroName = this.createMunroHeading();
  munroContainer.appendChild(munroName);

  const munrosList = this.createMunrosList();
  munroContainer.appendChild(munrosList);

  this.munrosContainer.appendChild(munroContainer);
};

MunroView.prototype.createMunroHeading = function () {
  const munroName = document.createElement('h2');
  munroName.classList.add('munro-name');
  munroName.textContent = this.munro.name;
  return munroName;
};

MunroView.prototype.createMunrosList = function () {
  const munrosList = document.createElement('ul');
  munrosList.classList.add('munros');
  this.populateList(munrosList);
  return munrosList;
};

MunroView.prototype.populateList = function (list) {
  console.log(this.munro);
    const munroListMeaning = document.createElement('li');
    munroListMeaning.textContent = this.munro.meaning;
    list.appendChild(munroListMeaning);

    const munroListHeight = document.createElement('li');
    munroListHeight.textContent = this.munro.height;
    list.appendChild(munroListHeight);
};

module.exports = MunroView;
