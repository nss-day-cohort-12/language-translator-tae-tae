var TranslatorCard = (function(spanishTranslation) {
    var greetingCardSpanish = {
	    Merry: "Feliz",
	    Christmas: "Navidad",
	    And: "y",
	    Happy: "próspero",
	    New: "nuevo",
	    Year: "año"
	};

	return {
        translateToSpanish: function(word) {
		  return greetingCardSpanish[word];
	} 

	}
	
})(TranslatorCard);








/*
// private variables
var SolarSystem = (function(oldSolarSystem) {
    
    // private planets array
    var closestStars = ["Alpha Centauri", "Proxima Centauri", "Barnard's Star", "Wolf 359", "Rigil Kentaurus"];
    // private spacecraft array
    var ageOfSolarSystem = 0; 
    // private planetsLandedOn number
    var dwarfPlanets = ["Pluto", "Ceres", "Eris", "Makemake", "Haumea"];
    // getter for closestStars array
    oldSolarSystem.getClosestStars = function () {
        return closestStars;
    };
    //last_modified = Date.now(),
    
    // getter for ageOfSolarSystem
    oldSolarSystem.getAgeOfSolarSystem = function() {
        return ageOfSolarSystem;
    };
    console.log("Closest Stars", closestStars);
    console.log("Age Of Solar System", ageOfSolarSystem);
    console.log("Dwarf Planets", dwarfPlanets);
    console.log("SolarSystem", SolarSystem);
    
    return oldSolarSystem;
})(SolarSystem);

*/