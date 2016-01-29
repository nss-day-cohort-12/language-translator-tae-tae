// option values stored as variable
var spanishInput = document.getElementById("spanish");
var germanInput = document.getElementById("german");
var urduInput = document.getElementById("urdu");

var translateButton = document.getElementById("translate-button");
var translatedCard = document.getElementById("output");

var translatedString;
var inputText = "";
var selectedLanguage;

// user input stored as a variable

document.getElementById("translate-button").addEventListener("click", function() {
    selectedLanguage = document.getElementById("language").value;
});

document.getElementById("translate-button").addEventListener("click", function() {
    inputText = document.getElementById("userInput").value;
});

// run correct code when appropriate language option is selected
document.getElementById("translate-button").addEventListener("click", function() { 
    if (selectedLanguage === "German") {
        TranslatorCard.translateToGerman(inputText);
    } else if (selectedLanguage === "Spanish") {
        TranslatorCard.translateToSpanish(inputText);
    } else { (selectedLanguage === "Urdu");
        TranslatorCard.translateToUrdu(inputText);
    }
});
