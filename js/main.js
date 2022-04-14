var $enginesLink = document.querySelector('.engines-link');
var $subaruSti = document.querySelector('.subaru-sti');
var $integraGsr = document.querySelector('.integra-gsr');
var $civicSi = document.querySelector('.civic-si');
var $chevy = document.querySelector('.chevy');
var $subaruPage = document.querySelector('.subaru-page');
var $homePage = document.querySelector('.home-page');
const $gsrPage = document.querySelector('.gsr-page');
const $ls3Page = document.querySelector('.ls3-page');
const $siPage = document.querySelector('.si-page');

document.addEventListener('DOMContentLoaded', function (event) {
  event.preventDefault();
});

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
