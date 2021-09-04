// console.log("Hii this is my app")

// var username = prompt("enter your username")
// alert("this is your "+ username)

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


btnTranslate.addEventListener("click", function clickEventHandler() {
    outputDiv.innerText = "abcd " + txtInput.value;
}) 