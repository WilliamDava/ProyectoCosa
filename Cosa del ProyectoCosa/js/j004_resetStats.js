var j004_resetStats = (function(){
    const nameFile = "j004_resetStats.js";
    return {
        clearStats : function(){
            const nodeRight = document.querySelector(".rightNumber");
            nodeRight.innerText = 0; 
            const nodeWrong = document.querySelector(".wrongNumber");
            nodeWrong.innerText= 0;
            const nodePercentValue = document.querySelector(".percentValue");
            nodePercentValue.innerText= "";
            j003.addInvisible();
        }
    };
})();
var j004 = j004_resetStats;