var animateButton = function (e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function () {
        e.target.classList.remove('animate');
    }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}



const btnYes = document.querySelector('.yes');
const btnNo = document.querySelector('.no');

let buttonYesFontSize = 2;
let buttonNoFontSize = 2;

btnNo.addEventListener('click', doYesMore)
btnYes.addEventListener('click', btnYesPushed)

function doYesMore() {
    buttonYesFontSize += .4;
    btnYes.style.fontSize = buttonYesFontSize + "em";
    buttonNoFontSize -= .2;
    btnNo.style.fontSize = buttonNoFontSize + "em";
}

function btnYesPushed() {
    location.href = './page2.html';
}







