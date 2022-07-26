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
  event.preventDefault();

  if (data.view === 'sti') {
    $subaruPage.classList.add('hidden');
    $homePage.classList.remove('hidden');
    data.view = 'home-page';
  } else if (data.view === 'integra-gsr') {
    $homePage.classList.remove('hidden');
    $gsrPage.classList.add('hidden');
    data.view = 'home-page';
  } else if (data.view === 'ls3') {
    $homePage.classList.remove('hidden');
    $ls3Page.classList.add('hidden');
    data.view = 'home-page';
  } else if (data.view === 'civic-si') {
    $homePage.classList.remove('hidden');
    $siPage.classList.add('hidden');
    data.view = 'home-page';
  }
});

$subaruSti.addEventListener('click', function (event) {
  event.preventDefault();

  $subaruPage.classList.remove('hidden');
  $homePage.classList.add('hidden');
  data.view = 'sti';
});

$integraGsr.addEventListener('click', function (event) {
  event.preventDefault();

  $gsrPage.classList.remove('hidden');
  $homePage.classList.add('hidden');
  data.view = 'integra-gsr';
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
    // console.log('Status1:', xhr.status);
    // console.log('response:', xhr.response);

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

$searchThree.addEventListener('click', event => { // 2011 Camaro SS VIN example: 2G1FS1EW1B9102917
  event.preventDefault();
  const vinInput = $vinThree.value;
  for (var i = 0; i < vinInput.length; i++) {
    if (vinInput.length !== 17) {
      $notSeventeen.classList.remove('hidden');
    } else if (!letterNumber.test(vinInput)) {
      $notAplhanum.classList.remove('hidden');
    } else {
      returnedVinDecode(vinInput);
      $ls3Page.classList.add('hidden');
      $vinDecode.classList.remove('hidden');
      $decodeHeading.textContent = `Vehicle Identification Number: ${vinInput}`;
    }
  }
});

const $vinFour = document.querySelector('.vin-four');
const $searchFour = document.querySelector('.search-four');

$searchFour.addEventListener('click', event => { // GSR sample VIN: JH4DC2390XS004187
  event.preventDefault();
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
});

var $exitButton = document.querySelector('.exit-button');

const dataViewsExit = () => {
  if (data.view === 'sti') {
    $vinDecode.classList.add('hidden');
    $subaruPage.classList.remove('hidden');
  } else if (data.view === 'integra-gsr') {
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
  event.preventDefault();
  dataViewsExit();
});

$closeSeventeen.addEventListener('click', event => {
  event.preventDefault();
  $notSeventeen.classList.add('hidden');
});

$closeAlphanum.addEventListener('click', event => {
  $notAplhanum.classList.add('hidden');
});

const $stiPlus = document.querySelector('.sti-plus');
const $entryForm = document.querySelector('.entry-form');

const openEntryForm = () => {
  if (data.view === 'sti') {
    $subaruPage.classList.add('hidden');
    $entryForm.classList.remove('hidden');
  } else if (data.view === 'integra-gsr') {
    $gsrPage.classList.add('hidden');
    $entryForm.classList.remove('hidden');
  } else if (data.view === 'ls3') {
    $ls3Page.classList.add('hidden');
    $entryForm.classList.remove('hidden');
  } else if (data.view === 'civic-si') {
    $siPage.classList.add('hidden');
    $entryForm.classList.remove('hidden');
  }
};

$stiPlus.addEventListener('click', () => {
  event.preventDefault();
  openEntryForm();
}
);

const $gsrPlus = document.querySelector('.gsr-plus');

$gsrPlus.addEventListener('click', () => {
  openEntryForm();
});

const $ls3Plus = document.querySelector('.ls3-plus');

$ls3Plus.addEventListener('click', () => {
  openEntryForm();
});

const $siPlus = document.querySelector('.si-plus');

$siPlus.addEventListener('click', () => {
  openEntryForm();
});

const $urlInput = document.querySelector('.url-input');
const $imagePlaceholder = document.querySelector('.image-placeholder');

$urlInput.addEventListener('input', function (event) {
  $imagePlaceholder.setAttribute('src', $urlInput.value);
});
