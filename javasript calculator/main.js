const btn = document.querySelectorAll('.maro');
const operators = document.querySelectorAll('.opp');
const inputE = document.getElementById('inputE');
const eight = document.getElementById('eight');
const save = document.getElementById('save');
const final = document.getElementById('final')
const equal = document.getElementById('equal')
const cancel = document.getElementById('cancel')
const finalEqual = document.querySelector('.subandDiv')
console.log(equal);

function subtract(e,b){
    return e - b
}

const actions = {
    operator: ''
}

const numberGotten = {
    numberfirst: '',
    numberSecond: ''
}

for(let i = 0; i < operators.length; i++)
    operators[i].addEventListener('click', function(){
        actions.operator = operators[i].textContent;
        numberGotten.numberfirst = Number(inputE.textContent);
        inputE.textContent = null;
        console.log(numberGotten);
        
    })
    equal.addEventListener('click', function(){
        console.log(actions);
        
        console.log(numberGotten);
        
        switch (actions.operator) {
            case '+':
                numberGotten.numberSecond = Number(inputE.textContent);
                let valueAdd= numberGotten.numberfirst;
                valueAdd += numberGotten.numberSecond;
                inputE.textContent = valueAdd
            break;
            case '-':
                numberGotten.numberSecond = Number(inputE.textContent);
                let valueSub = subtract(numberGotten.numberfirst, numberGotten.numberSecond)
                inputE.style.visibility = 'hidden';
                finalEqual.textContent = valueSub;
                if (finalEqual.textContent = valueSub) {
                    // console.log(valueSub - inputE.textContent);
                    equal.addEventListener('click', function(){
                       let realTotal = Number(finalEqual.textContent) - inputE.textContent 
                    //    console.log(realTotal);
                       if (realTotal = Number(finalEqual.textContent) - inputE.textContent ) {
                        equal.addEventListener('click', function(){
                            realTotal = inputE.textContent;
                            finalEqual.textContent -= realTotal
                            console.log(realTotal);
                        })
                       }
                    })
                }else{
                    console.log('no');
                }
                finalEqual.style.visibility = 'visible'
                // let finalSub = Number(inputE.textContent) - numberGotten.numberfirst;
                // inputE.textContent = finalSub
            break;
            case 'x':
                numberGotten.numberSecond = Number(inputE.textContent);
                let valueMult= numberGotten.numberfirst;
                valueMult *= numberGotten.numberSecond;
                inputE.textContent = valueMult
            break;
            case '/':
                numberGotten.numberSecond = Number(inputE.textContent);
                let valueDiv= numberGotten.numberfirst;
                valueDiv /= numberGotten.numberSecond;
                inputE.textContent = valueDiv;
            break;
        
            default:
                break;
        }
        
    })
    

for(let i = 0; i < btn.length; i++)
    btn[i].addEventListener('click', function(){
        // inputE.textContent = ''
        inputE.textContent += btn[i].textContent
    })

cancel.addEventListener('click', function(){
    inputE.textContent = null;
    numberGotten.numberfirst = ''
    numberGotten.numberSecond = ''
})