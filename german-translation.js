var TranslatorCard = (function(inputText) {
// private object holding German greeting card phrase to translate
    var greetingCardGerman = {
        Merry: "Frohe",
        Christmas: "Weihnachten",
        And: "und",
        A: "ein",
        Happy: "glückliches",
        New: "neues",
        Year: "Jahr"
    };

    return {
        translateToGerman: function(word){
            return greetingCardGerman[word];
        }
    }

})();



console.log(TranslatorCard.translateToGerman("Year"));