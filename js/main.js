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








