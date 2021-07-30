// Objects
let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#txt-input");
let outputDiv = document.querySelector("#output");

const serverURL = "https://api.funtranslations.com/translate/minion.json";
// Fetch call
function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

// Error Handler
function errorHandler(error) {
  console.log("Error Occurred " + error);
}

// Event Handlers
function clickHandler() {
  let inputText = txtInput.value;

  //   Calling server for processing.
  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => (outputDiv.innerHTML = json.contents.translated))
    .catch(errorHandler);
}

// Event Listeners
btnTranslate.addEventListener("click", clickHandler);
