var TranslatorCard = (function(urduTranslation) {
	    var greetingCardUrdu = {
        Merry: "میری",
        Christmas: "کرسمس",
        And: "اور",
        A: "ایک",
        Happy: "مبارک",
        New: "نئی",
        Year: "سال"
    };

    return {
        translateToUrdu: function(word){
            return greetingCardUrdu[word];
        }
    }
})(TranslatorCard);
