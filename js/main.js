var $enginesLink = document.querySelector('.engines-link');
var $subaruSti = document.querySelector('.subaru-sti');
var $integraGsr = document.querySelector('.integra-gsr');
var $civicSi = document.querySelector('.civic-si');
var $chevy = document.querySelector('.chevy');
var $subaruPage = document.querySelector('.subaru-page');
var $engineApplications = document.querySelector('.engine-applications');

$enginesLink.addEventListener('click', function (event) {

});

$subaruSti.addEventListener('click', function (event) {
  event.preventDefault();

  $subaruPage.classList.remove('hidden');
  $engineApplications.classList.add('hidden');
});

$integraGsr.addEventListener('click', function (event) {

});

$civicSi.addEventListener('click', function (event) {

});

$chevy.addEventListener('click', function (event) {

});
