var j003_classList = (function(){
    const nameFile = "j003_classList.js";
    return {
         /* j003.addClassToNode ( ".reset", "invisible" );
        j003.removeClassToNode ( ".reset", "invisible" ); */

       /*  addClassToNode :function( selector, className ) {
            const node = document.querySelector( selector );
            node.classList.add( className );
        }, */
         addInvisible : function(){
            const nodeClear = document.querySelector(".clear")
            nodeClear.classList.add("invisible")
        },
        removeInvisible : function (){
            const nodeClear = document.querySelector(".clear");
            nodeClear.classList.remove("invisible");
        },
        box__visible : function(){
            const nodeRefresh = document.querySelector(".refresh");
            nodeRefresh.classList.add("box__visible");
        },
        removeBoxes : function(){
            const nodeOk = document.querySelector(".trivial__resultok");
            nodeOk.classList.remove("trivial__visible");
            const nodeError = document.querySelector(".trivial__resulterror");
            nodeError.classList.remove("trivial__visible");
            const nodeRefresh = document.querySelector(".refresh");
            nodeRefresh.classList.remove("box__visible");
            const nodeCorrectAnswer = document.querySelector(".correctAnswer");
            nodeCorrectAnswer.classList.remove("box__visible");
        },
        removeBorder : function(){
            nodesBorder = document.querySelectorAll(".operator--selected")
            nodesBorder.forEach(element =>{
                element.classList.remove("operator--selected")
            });
        },
    };
})();
var j003 = j003_classList;