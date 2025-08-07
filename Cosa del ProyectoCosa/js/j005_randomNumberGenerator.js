var j005_randomNumberGenerator = (function(){
    const nameFile = "j005_randomNumberGenerator.js";
    return {
            getRandomNumber: function(numMin, numMax) {		
                return Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
		    }
        }
    }
)();
var j005 = j005_randomNumberGenerator;