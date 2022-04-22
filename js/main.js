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

const letterNumber = /^[0-9a-zA-Z]+$/;

// const $vinDecode = document.querySelector('#vin-decode');
const $vinModal = document.querySelector('.vin-modal');

const returnedVinDecode = vin => {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/' + vin + '?format=json');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    // console.log('Status1:', xhr.status);
    // console.log('response:', xhr.response);

    // create an object, and fill the object with the values from the VIN decoder api as key value pairs.
    var results = xhr.response.Results;
    for (var key in results) {
      // console.log('results[key].Value:', results[key].Value);
      if (results[key].Variable === 'Make') {
        // console.log('Make:', results[key].Value);
      }
    }
  });
  xhr.send();

};

$searchOne.addEventListener('click', event => { // Subaru sample VIN: JF1GD70644L519076
  var vinInput = $vinOne.value; // GSR sample VIN: JH4DC2390XS004187

  for (var i = 0; i < vinInput.length; i++) {
    if (vinInput.length !== 17) {
      $notSeventeen.classList.remove('hidden');
    } else if (!/^[0-9a-zA-Z]+$/.test(vinInput)) {
      $notAplhanum.classList.remove('hidden');
    } else {
      returnedVinDecode(vinInput);
      $subaruPage.classList.add('hidden');
      $vinModal.classList.remove('hidden');
    }

  }
});

const $vinTwo = document.querySelector('.vin-two');
const $searchTwo = document.querySelector('.search-two');

$searchTwo.addEventListener('click', event => {
  const vinInput = $vinTwo.value;
  for (var i = 0; i < vinInput.length; i++) {
    if (vinInput.length !== 17) {
      $notSeventeen.classList.remove('hidden');
    } else if (vinInput[i] !== letterNumber) {
      $notAplhanum.classList.remove('hidden');
    }
  }
});

const $vinThree = document.querySelector('.vin-three');
const $searchThree = document.querySelector('.search-three');

$searchThree.addEventListener('click', event => { // GSR sample VIN: JH4DC2390XS004187
  const vinInput = $vinThree.value;
  for (var i = 0; i < vinInput.length; i++) {
    if (vinInput.length !== 17) {
      $notSeventeen.classList.remove('hidden');
    } else if (vinInput[i] !== letterNumber) {
      $notAplhanum.classList.remove('hidden');
    }
  }
});

const $vinFour = document.querySelector('.vin-four');
const $searchFour = document.querySelector('.search-four');

$searchFour.addEventListener('click', event => {
  const vinInput = $vinFour.value;
  for (var i = 0; i < vinInput.length; i++) {
    if (vinInput.length !== 17) {
      $notSeventeen.classList.remove('hidden');
    } else if (vinInput[i] !== letterNumber) {
      $notAplhanum.classList.remove('hidden');
    }
  }
});

$closeSeventeen.addEventListener('click', event => {
  event.preventDefault();
  $notSeventeen.classList.add('hidden');
});

$closeAlphanum.addEventListener('click', event => {
  $notAplhanum.classList.add('hidden');
});
