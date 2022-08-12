const $enginesLink = document.querySelector('.engines-link');
const $subaruSti = document.querySelector('.subaru-sti');
const $integraGsr = document.querySelector('.integra-gsr');
const $civicSi = document.querySelector('.civic-si');
const $chevy = document.querySelector('.chevy');
const $subaruPage = document.querySelector('.subaru-page');
const $homePage = document.querySelector('.home-page');
const $gsrPage = document.querySelector('.gsr-page');
const $ls3Page = document.querySelector('.ls3-page');
const $siPage = document.querySelector('.si-page');
const $vinOne = document.querySelector('.vin-one');
const $searchOne = document.querySelector('.search-one');
const $notSeventeen = document.querySelector('.not-seventeen');
const $closeSeventeen = document.querySelector('.close-seventeen');
const $notAplhanum = document.querySelector('.not-alphanum');
const $closeAlphanum = document.querySelector('.close-alphanum');

$enginesLink.addEventListener('click', function (event) {

  if (data.view === 'sti') {
    $subaruPage.classList.add('hidden');
    $homePage.classList.remove('hidden');
  } else if (data.view === 'gsr') {
    $homePage.classList.remove('hidden');
    $gsrPage.classList.add('hidden');
  } else if (data.view === 'ls3') {
    $homePage.classList.remove('hidden');
    $ls3Page.classList.add('hidden');
  } else if (data.view === 'civic-si') {
    $homePage.classList.remove('hidden');
    $siPage.classList.add('hidden');
  } else if (data.view === 'entry-form') {
    $homePage.classList.remove('hidden');
    $entryDiv.classList.add('hidden');
  } else if (data.view === 'vin-decode') {
    $homePage.classList.remove('hidden');
    $vinDecode.classList.add('hidden');
  }

  data.view = 'home-page';
});

$subaruSti.addEventListener('click', function (event) {
  // event.preventDefault();

  $subaruPage.classList.remove('hidden');
  $homePage.classList.add('hidden');
  data.view = 'sti';
});

$integraGsr.addEventListener('click', function (event) {
  event.preventDefault();

  $gsrPage.classList.remove('hidden');
  $homePage.classList.add('hidden');
  data.view = 'gsr';
});

$civicSi.addEventListener('click', function (event) {
  event.preventDefault();

  $siPage.classList.remove('hidden');
  $homePage.classList.add('hidden');
  data.view = 'civic-si';
});

$chevy.addEventListener('click', function (event) {
  event.preventDefault();

  $ls3Page.classList.remove('hidden');
  $homePage.classList.add('hidden');
  data.view = 'ls3';
});

var $vehicleMake = document.querySelector('.vehicle-make');
var $modelYear = document.querySelector('.model-year');
var $model = document.querySelector('.model');
var $series = document.querySelector('.series');
var $trim = document.querySelector('.trim');
var $manufacturer = document.querySelector('.manufacturer');
var $vehicleType = document.querySelector('.vehicle-type');
var $bodyClass = document.querySelector('.body-class');
var $doors = document.querySelector('.doors');
var $transmissionType = document.querySelector('.transmission-type');
var $transmissionSpeed = document.querySelector('.transmission-speed');
var $driveType = document.querySelector('.drive-type');
var $numberCylinders = document.querySelector('.number-cylinders');
var $cubicInch = document.querySelector('.cubic-inch');
var $liters = document.querySelector('.liters');
var $engineModel = document.querySelector('.engine-model');

const returnedVinDecode = vin => {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/' + vin + '?format=json');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {

    var results = xhr.response.Results;

    if (results[9].Value !== null) {
      $modelYear.textContent = results[9].Value;
    } else {
      $modelYear.textContent = 'Not Available';
    }

    if (results[6].Value !== null) {
      $vehicleMake.textContent = results[6].Value;
    } else {
      $vehicleMake.textContent = 'Not Available';
    }

    if (results[8].Value !== null) {
      $model.textContent = results[8].Value;
    } else {
      $model.textContent = 'Not Available';
    }

    if (results[7].Value !== null) {
      $manufacturer.textContent = results[7].Value;
    } else {
      $manufacturer.textContent = 'Not Available';
    }

    if (results[11].Value !== null) {
      $series.textContent = results[11].Value;
    } else {
      $series.textContent = 'Not Available';
    }

    if (results[12].Value !== null) {
      $trim.textContent = results[12].Value;
    } else {
      $trim.textContent = 'Not Available';
    }

    if (results[13].Value !== null) {
      $vehicleType.textContent = results[13].Value;
    } else {
      $vehicleType.textContent = 'Not Available';
    }

    if (results[22].Value !== null) {
      $bodyClass.textContent = results[22].Value;
    } else {
      $bodyClass.textContent = 'Not Available';
    }

    if (results[23].Value !== null) {
      $doors.textContent = results[23].Value;
    } else {
      $doors.textContent = results[23].Value;
    }

    if (results[48].Value !== null) {
      $transmissionType.textContent = results[48].Value;
    } else {
      $transmissionType.textContent = 'Not Available';
    }

    if (results[49].Value !== null) {
      $transmissionSpeed.textContent = results[49].Value;
    } else {
      $transmissionSpeed.textContent = 'Not Available';
    }

    if (results[50].Value !== null) {
      $driveType.textContent = results[50].Value;
    } else {
      $driveType.textContent = 'Not Available';
    }

    if (results[69].Value !== null) {
      $numberCylinders.textContent = results[69].Value;
    } else {
      $numberCylinders.textContent = 'Not Available';
    }

    if (results[71].Value !== null) {
      $cubicInch.textContent = 'Cubic Inch: ' + Math.round(results[71].Value);
    } else {
      $cubicInch.textContent = 'Not Available';
    }

    if (results[72].Value !== null) {
      $liters.textContent = 'Liters: ' + Math.round(results[72].Value * 10) / 10;
    } else {
      $liters.textContent = 'Not Available';
    }

    if (results[74].Value !== null) {
      $engineModel.textContent = results[74].Value;
    } else {
      $engineModel.textContent = 'Not Available';
    }
  });
  xhr.send();

};

const $vinDecode = document.querySelector('.vin-decode');
const $decodeHeading = document.querySelector('.decode-heading');
const letterNumber = /^[0-9a-zA-Z]+$/;

$searchOne.addEventListener('click', event => { // Subaru sample VIN: JF1GD70644L519076 GSR sample VIN: JH4DC2390XS004187
  event.preventDefault();

  var vinInput = $vinOne.value;
  for (var i = 0; i < vinInput.length; i++) {
    if (vinInput.length !== 17) {
      $notSeventeen.classList.remove('hidden');
    } else if (!/^[0-9a-zA-Z]+$/.test(vinInput)) {
      $notAplhanum.classList.remove('hidden');
    } else {
      returnedVinDecode(vinInput);
      $subaruPage.classList.add('hidden');
      $vinDecode.classList.remove('hidden');
      $decodeHeading.textContent = `Vehicle Identification Number: ${vinInput}`;
    }

  }
});

const $vinTwo = document.querySelector('.vin-two');
const $searchTwo = document.querySelector('.search-two');

$searchTwo.addEventListener('click', event => {
  event.preventDefault();
  const vinInput = $vinTwo.value;
  for (var i = 0; i < vinInput.length; i++) {
    if (vinInput.length !== 17) {
      $notSeventeen.classList.remove('hidden');
    } else if (!/^[0-9a-zA-Z]+$/.test(vinInput)) {
      $notAplhanum.classList.remove('hidden');
    } else {
      returnedVinDecode(vinInput);
      $gsrPage.classList.add('hidden');
      $vinDecode.classList.remove('hidden');
      $decodeHeading.textContent = `Vehicle Identification Number: ${vinInput}`;
    }
  }
});

const $vinThree = document.querySelector('.vin-three');
const $searchThree = document.querySelector('.search-three');

function lsDecode() { // 2011 Camaro SS VIN example: 2G1FS1EW1B9102917

  for (var i = 0; i < $vinThree.value.length; i++) {
    if ($vinThree.value.length !== 17) {
      $notSeventeen.classList.remove('hidden');
    } else if (!letterNumber.test($vinThree.value)) {
      $notAplhanum.classList.remove('hidden');
    } else {
      returnedVinDecode($vinThree.value);
      $ls3Page.classList.add('hidden');
      $vinDecode.classList.remove('hidden');
      $decodeHeading.textContent = `Vehicle Identification Number: ${$vinThree.value}`;
      data.decode = 'ls3';
      data.view = 'vin-decode';

    }
  }
}

$searchThree.addEventListener('click', lsDecode);

const $vinFour = document.querySelector('.vin-four');
const $searchFour = document.querySelector('.search-four');

function siDecode(event) { // GSR sample VIN: JH4DC2390XS004187
  const vinInput = $vinFour.value; // Civic SI VIN sample 1HGEM115XYL119227
  for (var i = 0; i < vinInput.length; i++) {
    if (vinInput.length !== 17) {
      $notSeventeen.classList.remove('hidden');
    } else if (!/^[0-9a-zA-Z]+$/.test(vinInput)) {
      $notAplhanum.classList.remove('hidden');
    } else {
      returnedVinDecode(vinInput);
      $siPage.classList.add('hidden');
      $vinDecode.classList.remove('hidden');
      $decodeHeading.textContent = `Vehicle Identification Number: ${vinInput}`;
    }
  }
}

$searchFour.addEventListener('click', siDecode);

var $exitButton = document.querySelector('.exit-button');

var dataViewsExit = () => {
  if (data.view === 'sti') {
    $vinDecode.classList.add('hidden');
    $subaruPage.classList.remove('hidden');
  } else if (data.view === 'gsr') {
    $vinDecode.classList.add('hidden');
    $gsrPage.classList.remove('hidden');
  } else if (data.view === 'ls3') {
    $vinDecode.classList.add('hidden');
    $ls3Page.classList.remove('hidden');
  } else if (data.view === 'civic-si') {
    $vinDecode.classList.add('hidden');
    $siPage.classList.remove('hidden');
  }
};

$exitButton.addEventListener('click', event => {
  dataViewsExit();
});

$closeSeventeen.addEventListener('click', event => {
  $notSeventeen.classList.add('hidden');
});

$closeAlphanum.addEventListener('click', event => {
  $notAplhanum.classList.add('hidden');
});

const $stiPlus = document.querySelector('.sti-plus');
var $entryForm = document.querySelector('#entry-form');
var $entryDiv = document.querySelector('.entry-div');

const openEntryForm = () => {
  if (data.view === 'sti') {
    $subaruPage.classList.add('hidden');
    $entryDiv.classList.remove('hidden');
  } else if (data.view === 'gsr') {
    $gsrPage.classList.add('hidden');
    $entryDiv.classList.remove('hidden');
  } else if (data.view === 'ls3') {
    $ls3Page.classList.add('hidden');
    $entryDiv.classList.remove('hidden');
  } else if (data.view === 'civic-si') {
    $siPage.classList.add('hidden');
    $entryDiv.classList.remove('hidden');
  }
};

$stiPlus.addEventListener('click', () => {
  openEntryForm();
  data.view = 'entry-form';
}
);

const $gsrPlus = document.querySelector('.gsr-plus');

$gsrPlus.addEventListener('click', () => {
  openEntryForm();
  data.view = 'entry-form';
});

const $ls3Plus = document.querySelector('.ls3-plus');

$ls3Plus.addEventListener('click', () => {
  openEntryForm();
  data.view = 'entry-form';
});

const $siPlus = document.querySelector('.si-plus');

$siPlus.addEventListener('click', () => {
  openEntryForm();
  data.view = 'entry-form';
});

var $urlInput = document.querySelector('.url-input');
var $imagePlaceholder = document.querySelector('.image-placeholder');

$urlInput.addEventListener('input', function (event) {
  $imagePlaceholder.setAttribute('src', $urlInput.value);
});

const $wrxEntry = document.querySelector('.wrx-entry');
const $gsrEntry = document.querySelector('.gsr-entry');
const $ls3Entry = document.querySelector('.ls3-entry');
const $siEntry = document.querySelector('.si-entry');

var $engineSelection = document.getElementById('engine-selection');

$entryForm.addEventListener('submit', function (event) {
  event.preventDefault();

  var title = $entryForm.elements.title.value;
  var url = $entryForm.elements.url.value;
  var comments = $entryForm.elements.comments.value;
  var value = $engineSelection.value;

  var entries = {
    title: title,
    url: url,
    comments: comments,
    application: value
  };

  function onChange() {
    data.entries.unshift(entries);
    if (value === 'sti') {
      $wrxEntry.prepend(renderPost(entries));
      $entryDiv.classList.add('hidden');
      $subaruPage.classList.remove('hidden');
    } else if (value === 'gsr') {
      $gsrEntry.prepend(renderPost(entries));
      $entryDiv.classList.add('hidden');
      $gsrPage.classList.remove('hidden');
    } else if (value === 'ls3') {
      $ls3Entry.prepend(renderPost(entries));
      $entryDiv.classList.add('hidden');
      $ls3Page.classList.remove('hidden');
    } else if (value === 'si') {
      $siEntry.prepend(renderPost(entries));
      $entryDiv.classList.add('hidden');
      $siPage.classList.remove('hidden');
    }
  }
  onChange();

  entries.dataEntryId = data.nextEntryId++;

});

function noRefresh() {
  if (data.view === 'entry-form') {
    $homePage.classList.add('hidden');
    $entryDiv.classList.remove('hidden');
  } else if (data.view === 'sti') {
    $homePage.classList.add('hidden');
    $subaruPage.classList.remove('hidden');
  } else if (data.view === 'gsr') {
    $homePage.classList.add('hidden');
    $gsrPage.classList.remove('hidden');
  } else if (data.view === 'ls3') {
    $homePage.classList.add('hidden');
    $ls3Page.classList.remove('hidden');
  } else if (data.view === 'civic-si') {
    $homePage.classList.add('hidden');
    $siPage.classList.remove('hidden');
  }
}

window.addEventListener('beforeunload', function (event) {
  if (data.view === 'vin-decode') {
    event.preventDefault();
    event.returnValue = '';
  }
});

document.addEventListener('DOMContentLoaded', function (event) {
  for (var i = 0; i < data.entries.length; i++) {
    if (data.view === 'sti' && data.entries[i].application === 'sti') {
      $wrxEntry.appendChild(renderPost(data.entries[i]));
    } else if (data.view === 'gsr' && data.entries[i].application === 'gsr') {
      $gsrEntry.appendChild(renderPost(data.entries[i]));
    } else if (data.view === 'ls3' && data.entries[i].application === 'ls3') {
      $ls3Entry.appendChild(renderPost(data.entries[i]));
    } else if (data.view === 'civic-si' && data.entries[i].application === 'si') {
      $siEntry.appendChild(renderPost(data.entries[i]));
    }
  }

  noRefresh();
});

function renderPost(entries) {
  var postedRow = document.createElement('div');
  postedRow.setAttribute('class', 'row posted-row');

  var leftDiv = document.createElement('div');
  leftDiv.setAttribute('class', 'column-half align-end left-div mobile-entry');
  postedRow.appendChild(leftDiv);

  var postImage = document.createElement('img');
  postImage.setAttribute('src', entries.url);
  postImage.setAttribute('alt', 'uploaded-image');
  postImage.setAttribute('class', 'engine-image');
  leftDiv.appendChild(postImage);

  var rightDiv = document.createElement('div');
  rightDiv.setAttribute('class', 'column-half');
  postedRow.appendChild(rightDiv);

  var unorderedList = document.createElement('ul');
  unorderedList.setAttribute('class', 'right-column');
  rightDiv.appendChild(unorderedList);

  var listOne = document.createElement('li');
  unorderedList.appendChild(listOne);

  var entryHeading = document.createElement('h3');
  var entryTitle = document.createTextNode(entries.title);
  entryHeading.setAttribute('class', 'entry-heading');
  entryHeading.appendChild(entryTitle);
  listOne.appendChild(entryHeading);

  var listTwo = document.createElement('li');
  var editPencil = document.createElement('i');
  listTwo.setAttribute('class', 'edit-pencil');
  editPencil.setAttribute('class', 'fas fa-pencil-alt');
  listTwo.appendChild(editPencil);
  unorderedList.appendChild(listTwo);

  var listThree = document.createElement('li');
  var commentsPara = document.createElement('p');
  var enteredComments = document.createTextNode(entries.comments);
  commentsPara.setAttribute('class', 'entry-p');
  commentsPara.appendChild(enteredComments);
  listThree.appendChild(commentsPara);
  unorderedList.appendChild(listThree);

  return postedRow;
}
