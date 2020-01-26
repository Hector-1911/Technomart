var loginInButton = document.querySelector('.panel-login-in');
var loginOutButton = document.querySelector('.user-exit');
var userLogin = document.querySelector('.middle-panel-login');
var userInfo = document.querySelector('.middle-panel-login-area');

loginInButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    userLogin.classList.remove('display-on');
    userLogin.classList.add('display-off');
    userInfo.classList.add('display-on');
    userInfo.classList.remove('display-off');
});

loginOutButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    userInfo.classList.remove('display-on');
    userInfo.classList.add('display-off');
    userLogin.classList.add('display-on');
    userLogin.classList.remove('display-off');
});

var popupBuy = document.querySelector('.mobal-buy');
var closeBuy = popupBuy.querySelector('.modal-close-btn');
var continueBuy = popupBuy.querySelector('.continue-btn');

closeBuy.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupBuy.classList.remove('modal-show');
});

continueBuy.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupBuy.classList.remove('modal-show');
});
