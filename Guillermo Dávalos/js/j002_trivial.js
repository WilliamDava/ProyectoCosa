
var j002_trivial = (function(){
    const nameFile = "j002_trivial.js";
    function _removeAttribute(){
        const nodeAnswer = document.querySelector (".trivial__answer");
        nodeAnswer.value = "";
        nodeAnswer.removeAttribute("disabled", "");
    }
       function _keydownResult( event ){
            const nodeAnswer = document.querySelector(".trivial__answer");
            if (event.key === "Enter"){
                if (nodeAnswer.value === ""){
                    return;
                }
                else{
                _disableAnswer();
                _checkOperator();
                _checkAnswer();
                _calculatePercentage();
                j003.removeInvisible();
                j003.box__visible();
                }
        }
        }
          function _formatInput(){
            const valor = this.value;
            if (valor.includes(".")) 
            {
                const[entero, decimal] = valor.split(".");
            if (decimal.length > 2){
                    this.value = `${entero}.${decimal.slice(0, 2)}`;
                }
            } 
            if (/[^0-9.-]/.test(valor)) {
                this.value = valor.slice(0, -1);
            }
        }
    function _generateNumbers(){
        const number1 = j005.getRandomNumber(1, 10);
        const number2 = j005.getRandomNumber(1, 10);
        const nodesNumber = document.querySelectorAll (".trivial__number");
        nodesNumber[0].innerText = number1;
        nodesNumber[1].innerText = number2;
    }
    function _checkOperator(){
        const nodeAnswer = document.querySelector (".trivial__answer");
        const nodesNumber = document.querySelectorAll(".trivial__number");
        const operator = document.querySelector(".trivial__operator");
        if (operator.innerText === "+"){  
            result = parseInt(nodesNumber[0].innerText) + parseInt(nodesNumber[1].innerText);
            answerFormated = parseInt(nodeAnswer.value);
            return result;
        }
        else if (operator.innerText === "-"){  
            result = parseInt(nodesNumber[ 0 ].innerText) - parseInt(nodesNumber[1].innerText);
            answerFormated = parseInt(nodeAnswer.value);
            return result;
        }
        else if (operator.innerText === "x"){  
            result = parseInt(nodesNumber[0].innerText) * parseInt(nodesNumber[1].innerText);
            answerFormated = parseInt(nodeAnswer.value);
            return result;
        }
        else if (operator.innerText === "/"){  
            result = Math.trunc((parseFloat(nodesNumber[0].innerText) / parseFloat(nodesNumber[1].innerText))*100)/ 100;
            /* answerFormated = parseFloat(nodeAnswer.value).toFixed(2); */
            answerFormated = Math.trunc(nodeAnswer.value * 100) / 100
            return result;
        }
    }
    function _checkAnswer(){
        _checkOperator;
        const nodeAnswer = document.querySelector(".trivial__answer");
        const nodeRight = document.querySelector(".rightNumber");
        const nodeWrong = document.querySelector(".wrongNumber");
        if (result === answerFormated){
            const nodeOk = document.querySelector(".trivial__resultok");
            nodeOk.classList.add("trivial__visible");
            nodeRight.innerText++; 
            google.charts.setOnLoadCallback(j006.drawChart ( parseInt(nodeRight.innerText), parseInt(nodeWrong.innerText )));
            } else{
            const nodeError = document.querySelector(".trivial__resulterror");
            nodeError.classList.add("trivial__visible");
            const nodeCorrectAnswer = document.querySelector(".correctAnswer");
            nodeCorrectAnswer.classList.add("box__visible");
            nodeCorrectAnswer.innerText =  `La respuesta correcta es: ${result}`;
            nodeWrong.innerText++; 
            google.charts.setOnLoadCallback(j006.drawChart ( parseInt( nodeRight.innerText ), parseInt( nodeWrong.innerText ) ));
            }
        }
    function _disableAnswer(){
        const nodeAnswer = document.querySelector(".trivial__answer");
        nodeAnswer.setAttribute("disabled", "");
        }
    function _calculatePercentage (){
        const nodeRight = document.querySelector(".rightNumber");
        const nodeWrong = document.querySelector(".wrongNumber");
        const attemptNumber = parseInt(nodeRight.innerText) + parseInt(nodeWrong.innerText);
        const nodePercentValue = document.querySelector(".percentValue");
        nodePercentValue.innerText = ((parseFloat(nodeRight.innerText) / parseFloat(attemptNumber))*100).toFixed(2);
        }
    function _refresh(){
        
            const nodeOk = document.querySelector(".trivial__resultok");
            nodeOk.classList.remove("trivial__visible");

            const nodeError = document.querySelector(".trivial__resulterror");
            nodeError.classList.remove("trivial__visible");

            const nodeRefresh = document.querySelector(".refresh");
            nodeRefresh.classList.remove("box__visible");

            j003.removeBoxes();

            const number1 = j005.getRandomNumber(1, 10);
            const number2 = j005.getRandomNumber(1, 10);

            const nodesNumber = document.querySelectorAll (".trivial__number");
            nodesNumber[0].innerText = number1;
            nodesNumber[1].innerText = number2;

            const nodeAnswer = document.querySelector (".trivial__answer");
            nodeAnswer.value = "";
            nodeAnswer.removeAttribute("disabled", "");
            nodeAnswer.focus();
            const operator  = document.querySelector (".trivial__operator");
            
            operator.removeAttribute("disabled", "");
            const nodeRandom = document.querySelector(".operatorRandom");
            if (nodeRandom.hasAttribute("data-selected")){
                j002.random();
            }
        }
    function _selectOperator(){
        const operator = document.querySelector(".trivial__operator");
            if(operator.innerText === this.innerText){
                return;
            }
            _generateNumbers();
            j003.removeBorder();
            this.classList.add("operator--selected");
            operator.innerText = this.innerText;
            const nodeAnswer = document.querySelector (".trivial__answer");
            _removeAttribute();
            nodeAnswer.focus();
            j003.removeBoxes();
    }
    function _setOperator(){
        const nodeOperatorsWrapper = document.querySelectorAll(".operator")
        nodeOperatorsWrapper[0].classList.add("operator--selected")
        nodeOperatorsWrapper.forEach(element =>{
            element.addEventListener("click", _selectOperator);
    });
    }
    function _generateRandomOperator(){
         const numberRandom = j005.getRandomNumber(1, 4);
            const operator = document.querySelector(".trivial__operator");
            const nodeAnswer = document.querySelector (".trivial__answer");
            nodeAnswer.focus()
            if(numberRandom == 1){
                operator.innerText = "+"
            }
            else if(numberRandom == 2){
                operator.innerText = "-"
            }
            else if(numberRandom == 3){
                operator.innerText = "x"
            }
            else if(numberRandom == 4){
                operator.innerText = "/"
            }
    }
    function _random(){
        const number1 = j005.getRandomNumber(1, 10);
            const number2 = j005.getRandomNumber(1, 10);
            const nodesNumber = document.querySelectorAll ( ".trivial__number");
            j003.removeBorder()
            this.classList.add("operator--selected");
            nodesNumber[0].innerText = number1;
            nodesNumber[1].innerText = number2;
            _generateRandomOperator();
    }
    function _setRandomOperator(){
        const nodeRandom = document.querySelector(".operatorRandom");
        nodeRandom.addEventListener("click", _random);
    }
    return {
        initOperator : function(){
            _setOperator();
            _setRandomOperator();
            const number1 = j005.getRandomNumber(1, 10);
            const number2 = j005.getRandomNumber(1, 10);
            const nodesNumber = document.querySelectorAll (".trivial__number");
            nodesNumber[0].innerText = number1;
            nodesNumber[1].innerText = number2;
        },
        initClear : function(){
            const nodeClear = document.querySelector(".clear")
            nodeClear.addEventListener("click", j004.clearStats)
        },
        initAnswer : function(){
            const nodeAnswer = document.querySelector(".trivial__answer");
            nodeAnswer.addEventListener("keydown", _keydownResult); 
            nodeAnswer.addEventListener("input" , _formatInput);
        },
        initRefresh : function(){
            const nodeRefresh = document.querySelector(".refresh");
            nodeRefresh.addEventListener("click", _refresh);
        },
        initStats : function(){
            
            const nodeRight = document.querySelector(".rightNumber");
            nodeRight.innerText = 0; 
            const nodeWrong = document.querySelector(".wrongNumber");
            nodeWrong.innerText= 0;
        }
       
    };
})();
var j002 = j002_trivial;