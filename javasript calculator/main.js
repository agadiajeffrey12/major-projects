// const dataOperation = document.querySelectorAll('[data-number]');
// console.log(dataOperation);
const inputE = document.getElementById('inputE');
const save = document.getElementById('save');
const final = document.getElementById('final');
let plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multipy');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight')
const nine = document.getElementById('nine');
const equal = document.getElementById('equal');
const dot = document.getElementById('dot');
const zero = document.getElementById('zero');
let currentValue = inputE.innerText
let finalValue = 0
let previousText = 0;
let minusNow = false
let plusNow = false;
let multiplyNow = false;
let divideNow = false

// console.log(plus, minus, divide, multiply, one, two, three, four, five, six, seven, eight, nine);

function inputCall() {
 inputE.innerText = 0
 if (inputE.innerText == inputE.innerHTML) {
     nine.addEventListener('click', function() {
        inputE.innerText  += nine.innerText;
        currentValue = inputE.innerText;
    })
 } 
//  begining of button 8
 if (inputE.innerText = nine.innerText) {
    eight.addEventListener('click', function() {
        inputE.innerText  += eight.innerText;
        currentValue = inputE.innerText
        // console.log(currentValue);
        // beginning of logical operation
        if (currentValue == inputE.innerText) {
            plus.addEventListener('click', function(){
                let previousText = currentValue;
                save.innerText = previousText;
                inputE.innerText = 0;
                plusNow = true; 
                minusNow = false;
                multiplyNow = false;
                divideNow = false   
                // count = 0;
            })
            minus.addEventListener('click', function(){
                let previousText = currentValue;
                save.innerText = previousText;
                inputE.innerText = 0;  
                minusNow = true  
                plusNow = false;
                multiplyNow = false;
                // count = 0;
            })
            multiply.addEventListener('click', function(){
                let previousText = currentValue;
                save.innerText = previousText;
                inputE.innerText = 0;  
                minusNow = false  
                plusNow = false
                multiplyNow = true
                // count = 0;
            })
            divide.addEventListener('click', function(){
                let previousText = currentValue;
                save.innerText = previousText;
                inputE.innerText = 0;  
                minusNow = false  
                plusNow = false
                multiplyNow = false;
                divideNow = true
                // count = 0;
            })
            if (currentValue == inputE.innerText) {
                final.innerText = currentValue
            } 
            if (save.innerText == previousText || final.innerText == currentValue) {
                equal.addEventListener('click', function (){
                    const result = parseInt(save.innerText) + parseInt(final.innerText);
                    console.log(result);
                    inputE.innerText = result
                })
            }
            if (minusNow = true && plusNow == false && multiplyNow == false ) {
                equal.addEventListener('click', function (){
                    const result = parseInt(save.innerText) - parseInt(final.innerText) ;
                    inputE.innerText = result
                })
            }
            // multiplication part
            if (multiplyNow = true && minusNow == false && plusNow == false) {
                equal.addEventListener('click', function (){
                    const result = parseInt(save.innerText) * parseInt(final.innerText) ;
                    inputE.innerText = result
                })
            }

            if (divideNow = true && minusNow == false && plusNow == false && multiplyNow == false){
                equal.addEventListener('click', function (){
                    const result = parseInt(save.innerText) / parseInt(final.innerText) ;
                    inputE.innerText = result
                })
            }
            // division part
            // if (divideNow = true && plusNow == false) {
            //     equal.addEventListener('click', function (){
            //         const result = parseInt(save.innerText) / parseInt(final.innerText) ;
            //         inputE.innerText = result
            //     })
            // }
        }
    })
 } 
//  End of button 8
 if (inputE.innerText = eight.innerText){
    seven.addEventListener('click', function() {
        inputE.innerText  += seven.innerText
        currentValue = inputE.innerText
        // console.log(inputE.innerText);
        if (currentValue == inputE.innerText) {
            plus.addEventListener('click', function(){
                let previousText = currentValue;
                save.innerText = previousText;
                inputE.innerText = 0;    
                // count = 0;
            })
            minus.addEventListener('click', function(){
                let previousText = currentValue;
                save.innerText = previousText;
                inputE.innerText = 0;  
                minusNow = true  
                plusNow = false;
                multiplyNow = false;
                // count = 0;
            })
            multiply.addEventListener('click', function(){
                let previousText = currentValue;
                save.innerText = previousText;
                inputE.innerText = 0;  
                minusNow = false  
                plusNow = false
                multiplyNow = true
                // count = 0;
            })
            divide.addEventListener('click', function(){
                let previousText = currentValue;
                save.innerText = previousText;
                inputE.innerText = 0;  
                minusNow = false  
                plusNow = false
                multiplyNow = false;
                divideNow = true
                // count = 0;
            })
            if (currentValue == inputE.innerText) {
                final.innerText = currentValue
            }
            if (save.innerText == previousText || final.innerText == currentValue) {
                equal.addEventListener('click', function (){
                    const result = parseInt(save.innerText) + parseInt(final.innerText);
                    console.log(result);
                    inputE.innerText = result
                })
            }
            if (minusNow = true && plusNow == false && multiplyNow == false ) {
                equal.addEventListener('click', function (){
                    const result = parseInt(save.innerText) - parseInt(final.innerText) ;
                    inputE.innerText = result
                })
            }
            // multiplication part
            if (multiplyNow = true && minusNow == false && plusNow == false) {
                equal.addEventListener('click', function (){
                    const result = parseInt(save.innerText) * parseInt(final.innerText) ;
                    inputE.innerText = result
                })
            }

            if (divideNow = true && minusNow == false && plusNow == false && multiplyNow == false){
                equal.addEventListener('click', function (){
                    const result = parseInt(save.innerText) / parseInt(final.innerText) ;
                    inputE.innerText = result
                })
            }
            
        }
    })
 }

 console.log(currentValue);
 
}


inputCall()

six.addEventListener('click', function() {
    inputE.innerText  += six.innerText;
    currentValue = inputE.innerText
    console.log(currentValue);

    if (currentValue == inputE.innerText) {
        plus.addEventListener('click', function(){
            let previousText = currentValue;
            save.innerText = previousText;
            inputE.innerText = 0;    
            // count = 0;
        })
        minus.addEventListener('click', function(){
                let previousText = currentValue;
                save.innerText = previousText;
                inputE.innerText = 0;  
                minusNow = true  
                plusNow = false;
                multiplyNow = false;
                // count = 0;
            })
            multiply.addEventListener('click', function(){
                let previousText = currentValue;
                save.innerText = previousText;
                inputE.innerText = 0;  
                minusNow = false  
                plusNow = false
                multiplyNow = true
                // count = 0;
            })
            divide.addEventListener('click', function(){
                let previousText = currentValue;
                save.innerText = previousText;
                inputE.innerText = 0;  
                minusNow = false  
                plusNow = false
                multiplyNow = false;
                divideNow = true
                // count = 0;
            })
        if (currentValue == inputE.innerText) {
            final.innerText = currentValue
        }
        if (save.innerText == previousText || final.innerText == currentValue) {
            equal.addEventListener('click', function (){
                const result = parseInt(save.innerText) + parseInt(final.innerText);
                console.log(result);
                inputE.innerText = result
            })
        }
        
        
    }
})

five.addEventListener('click', function() {
    inputE.innerText  += five.innerText;
    currentValue = inputE.innerText
     console.log(currentValue);

     if (currentValue == inputE.innerText) {
        plus.addEventListener('click', function(){
            let previousText = currentValue;
            save.innerText = previousText;
            inputE.innerText = 0;    
            // count = 0;
        })
        if (currentValue == inputE.innerText) {
            final.innerText = currentValue
        }
        if (save.innerText == previousText || final.innerText == currentValue) {
            equal.addEventListener('click', function (){
                const result = parseInt(save.innerText) + parseInt(final.innerText);
                console.log(result);
                inputE.innerText = result
            })
        }
    }
})

four.addEventListener('click', function() {
    inputE.innerText  += four.innerText;
    currentValue = inputE.innerText
    console.log(currentValue);

    if (currentValue == inputE.innerText) {
        plus.addEventListener('click', function(){
            let previousText = currentValue;
            save.innerText = previousText;
            inputE.innerText = 0;    
            // count = 0;
        })
        if (currentValue == inputE.innerText) {
            final.innerText = currentValue
        }
        if (save.innerText == previousText || final.innerText == currentValue) {
            equal.addEventListener('click', function (){
                const result = parseInt(save.innerText) + parseInt(final.innerText);
                console.log(result);
                inputE.innerText = result
            })
        }
    }
})

three.addEventListener('click', function() {
    inputE.innerText  += three.innerText;
    currentValue = inputE.innerText
    console.log(currentValue);

    if (currentValue == inputE.innerText) {
        plus.addEventListener('click', function(){
            let previousText = currentValue;
            save.innerText = previousText;
            inputE.innerText = 0;    
            // count = 0;
        })
        if (currentValue == inputE.innerText) {
            final.innerText = currentValue
        }
        if (save.innerText == previousText || final.innerText == currentValue) {
            equal.addEventListener('click', function (){
                const result = parseInt(save.innerText) + parseInt(final.innerText);
                console.log(result);
                inputE.innerText = result
            })
        }
    }
})

two.addEventListener('click', function() {
    inputE.innerText  += two.innerText;
    currentValue = inputE.innerText
    console.log(currentValue);

    if (currentValue == inputE.innerText) {
        plus.addEventListener('click', function(){
            let previousText = currentValue;
            save.innerText = previousText;
            inputE.innerText = 0;    
            // count = 0;
        })
        if (currentValue == inputE.innerText) {
            final.innerText = currentValue
        }
        if (save.innerText == previousText || final.innerText == currentValue) {
            equal.addEventListener('click', function (){
                const result = parseInt(save.innerText) + parseInt(final.innerText);
                console.log(result);
                inputE.innerText = result
            })
        }
    }
})

one.addEventListener('click', function() {
    inputE.innerText += one.innerText;
    currentValue = inputE.innerText
    console.log(currentValue);

    if (currentValue == inputE.innerText) {
        plus.addEventListener('click', function(){
            let previousText = currentValue;
            save.innerText = previousText;
            inputE.innerText = 0;    
            // count = 0;
        })
        if (currentValue == inputE.innerText) {
            final.innerText = currentValue
        }
        if (save.innerText == previousText || final.innerText == currentValue) {
            equal.addEventListener('click', function (){
                const result = parseInt(save.innerText) + parseInt(final.innerText);
                console.log(result);
                inputE.innerText = result
            })
        }
    }
})

cancel.addEventListener('click', function(){
    inputE.innerText = 0;
    currentValue = inputE.innerText
    console.log(currentValue);
    final.innerText = ' ';
    save.innerText = ' '
})

zero.addEventListener('click', function() {
    inputE.innerText += zero.innerText;
})

dot.addEventListener('click', function() {
    inputE.innerText += dot.innerText;
})

// const addition = function (a,b){
//      a + b
// }

// //   currentValue = inputE.innerText
//         // console.log(currentValue);

// addition(currentValue,5)

// equal.addEventListener('click', function(){
//     inputE.innerText = addition(3,4)
// })

