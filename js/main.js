var bookmarkCounter = document.querySelector(".bookmark-counter");
var basketCounter = document.querySelector(".basket-counter");
var bookmarkCell = document.querySelector(".top-panel-bookmarks");
var basketCell = document.querySelector(".top-panel-basket");

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
};
