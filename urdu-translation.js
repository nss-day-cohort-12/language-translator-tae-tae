var TranslatorCard = (function(urduTranslation) {
    var greetingCardUrdu = {
        "merry": "میری",
        "christmas": "کرسمس",
        "and": "اور",
        "a": "ایک",
        "happy": "مبارک",
        "new": "نئی",
        "year": "سال"
    };

    urduTranslation.translateToUrdu = function(userString){
        var inputWords = userString.toLowerCase().split(" ");
            console.log(inputWords);
        var objectKeys = Object.keys(greetingCardUrdu);
            console.log(objectKeys);
        for (var i = 0; i < inputWords.length; i++) {
            if (objectKeys.indexOf(inputWords[i]) !== -1) {
                inputWords[i] = greetingCardUrdu[inputWords[i]];
            }
        };
        console.log(inputWords);
        translatedString = inputWords.join(" ");
        
        translatedCard.innerHTML = translatedString;
    }
    return urduTranslation;
})(TranslatorCard); 
