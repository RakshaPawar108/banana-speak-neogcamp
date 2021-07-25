// Objects
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");

// Event Handlers
function clickHandler() {
  console.log("input " + txtInput.value);
}

// Event Listeners
btnTranslate.addEventListener("click", clickHandler);
