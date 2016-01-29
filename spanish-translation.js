var TranslatorCard = (function(spanishTranslation) {
    var greetingCardSpanish = {
	    "merry": "Feliz",
	    "christmas": "Navidad",
	    "and": "y",
        "a": "un",
	    "happy": "próspero",
	    "new": "nuevo",
	    "year": "año"
	};


	spanishTranslation.translateToSpanish = function(userString){
        var inputWords = userString.toLowerCase().split(" ");
            console.log(inputWords);
        var objectKeys = Object.keys(greetingCardSpanish);
            console.log(objectKeys);
        for (var i = 0; i < inputWords.length; i++) {
            if (objectKeys.indexOf(inputWords[i]) !== -1) {
                inputWords[i] = greetingCardSpanish[inputWords[i]];
            }
        };
        console.log(inputWords);
        translatedString = inputWords.join(" ");
        
        translatedCard.innerHTML = translatedString;
    }
    return spanishTranslation;
})(TranslatorCard); 