var TranslatorCard = (function() {

    // private object holding German greeting card phrase to translate
    var greetingCardGerman = {
        "merry": "Frohe",
        "christmas": "Weihnachten",
        "and": "und",
        "a": "ein",
        "happy": "glückliches",
        "new": "neues",
        "year": "Jahr"
    };

    return {
        
        translateToGerman: function(userString){
            var inputWords = userString.toLowerCase().split(" ");
                console.log(inputWords);
            var objectKeys = Object.keys(greetingCardGerman);
                console.log(objectKeys);
            for (var i = 0; i < inputWords.length; i++) {
                if (objectKeys.indexOf(inputWords[i]) !== -1) {
                    inputWords[i] = greetingCardGerman[inputWords[i]];
                }
            };
            console.log(inputWords);
            translatedString = inputWords.join(" ");
            
            translatedCard.innerHTML = translatedString;
            }
        }
})();