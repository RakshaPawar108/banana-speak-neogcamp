// Objects
let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#txt-input");
let outputDiv = document.querySelector("#output");

// Event Handlers
function clickHandler() {
  let input = txtInput.value;
  outputDiv.innerText = "Translated " + input;
}

// Event Listeners
btnTranslate.addEventListener("click", clickHandler);
