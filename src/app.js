const MunroView = require('./views/munro_view.js');
const MunroListView = require('./views/munro_list_view.js');
const Munros = require('./models/munros.js');

document.addEventListener('DOMContentLoaded', () => {
  const munrosListContainer = document.querySelector('#munros');
  const munrosListView = new MunroListView(munrosListContainer);
  munrosListView.bindEvents();

  const munros = new Munros();
  munros.getData();
});
