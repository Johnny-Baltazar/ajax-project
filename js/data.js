/* exported data */
var data = {
  view: 'home-page',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var previousDataJSON = localStorage.getItem('engineData');

window.addEventListener('beforeunload', function (event) {

  var dataJSON = JSON.stringify(data);

  this.localStorage.setItem('data', dataJSON);
});

if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}
