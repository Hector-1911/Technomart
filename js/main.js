var bookmarkCounter = document.querySelector(".bookmark-counter");
var basketCounter = document.querySelector(".basket-counter");
var bookmarkCell = document.querySelector(".top-panel-bookmarks");
var basketCell = document.querySelector(".top-panel-basket");
var popupBuy = document.querySelector('.mobal-buy');
var closeBuy = popupBuy.querySelector('.modal-close-btn');
var continueBuy = popupBuy.querySelector('.continue-btn');

let productMenu = document.getElementById('table');
let productMenux = document.getElementById('tablex');

let selectedBtn;
let selectedDtn;

productMenu.onclick = function (event) {
    let target = event.target;

    if (target.id != 'bookmark-btn') return;

    highlight(target);
};

function highlight(node) {
    selectedBtn = node;
    bookmarkCell.classList.add("highlight");
    bookmarkCounter.value = (bookmarkCounter.value - 1) + 2;
};

productMenux.onclick = function (event) {
    let targetx = event.target;

    if (targetx.id != 'basket-btn') return;

    highhard(targetx);
};

function highhard(nobe) {
    selectedDtn = nobe;
    basketCell.classList.add("highlight");
    basketCounter.value = (basketCounter.value - 1) + 2;
    popupBuy.classList.add('modal-show');
};

closeBuy.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupBuy.classList.remove('modal-show');
});

continueBuy.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupBuy.classList.remove('modal-show');
});

var popupLogin = document.querySelector('.modal-login');
var closeLogin = popupLogin.querySelector('.modal-close-btn');
var openLogin = document.querySelector('.about-us-contacts-button');

openLogin.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupLogin.classList.add('modal-show');
});

closeLogin.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupLogin.classList.remove('modal-show');
});

var popupMap = document.querySelector('.modal-map');
var closeMap = popupMap.querySelector('.modal-close-btn');
var openMap = document.querySelector('.about-us-map');

openMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupMap.classList.add('modal-show');
});

closeMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupMap.classList.remove('modal-show');
});

var sliderOne = document.querySelector('.features-slider-1-container');
var sliderTwo = document.querySelector('.features-slider-2-container');
var buttonLeft = document.querySelector('.slider-btn-left');
var buttonRight = document.querySelector('.slider-btn-right');
var redDotLeft = document.querySelector('.red-dot-1');
var redDotRight = document.querySelector('.red-dot-2');
var dotLeft = document.querySelector('.slider-paginator-1');
var dotRight = document.querySelector('.slider-paginator-2');

buttonLeft.addEventListener("click", function(evt) {
    evt.preventDefault();
    sliderTwo.classList.remove('display-on');
    sliderTwo.classList.add('display-off');
    sliderOne.classList.add('display-on');
    sliderOne.classList.remove('display-off');

    redDotRight.classList.remove('display-on');
    redDotRight.classList.add('display-off');
    redDotLeft.classList.add('display-on');
    redDotLeft.classList.remove('display-off');
});

buttonRight.addEventListener("click", function(evt) {
    evt.preventDefault();
    sliderOne.classList.remove('display-on');
    sliderOne.classList.add('display-off');
    sliderTwo.classList.add('display-on');
    sliderTwo.classList.remove('display-off');

    redDotLeft.classList.remove('display-on');
    redDotLeft.classList.add('display-off');
    redDotRight.classList.add('display-on');
    redDotRight.classList.remove('display-off');
});

dotLeft.addEventListener("click", function(evt) {
    evt.preventDefault();
    sliderTwo.classList.remove('display-on');
    sliderTwo.classList.add('display-off');
    sliderOne.classList.add('display-on');
    sliderOne.classList.remove('display-off');

    redDotRight.classList.remove('display-on');
    redDotRight.classList.add('display-off');
    redDotLeft.classList.add('display-on');
    redDotLeft.classList.remove('display-off');
});

dotRight.addEventListener("click", function(evt) {
    evt.preventDefault();
    sliderOne.classList.remove('display-on');
    sliderOne.classList.add('display-off');
    sliderTwo.classList.add('display-on');
    sliderTwo.classList.remove('display-off');

    redDotLeft.classList.remove('display-on');
    redDotLeft.classList.add('display-off');
    redDotRight.classList.add('display-on');
    redDotRight.classList.remove('display-off');
});









