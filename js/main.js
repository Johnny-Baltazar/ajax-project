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
const $searchButton = document.querySelector('.search-button');
const $vinInput = document.querySelector('.vin-input');
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

$searchButton.addEventListener('click', event => {
  event.preventDefault();
  const letterNumber = /^[0-9a-zA-Z]+$/;
  const vinValue = $vinInput.value;
  for (var i = 0; i < vinValue.length; i++) {
    if (vinValue.length !== 17) {
      $notSeventeen.classList.remove('hidden');
    } else if (vinValue[i] !== letterNumber) {
      $notAplhanum.classList.remove('hidden');
    } else {
      // console.log('VIN is acceptable.');
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
