var myImage = document.querySelector('img');

myImage.onclick = function () {

    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/logo.png') {
      myImage.setAttribute('src', 'images/iamlogo.png');
    } else {
      myImage.setAttribute('src', 'images/logo.png');
    }
};
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Feel Good, ' + myName + '. You are Great';
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Feel Good, ' + storedName + '. You are Great';
}

myButton.onclick = function() {
    setUserName();
}