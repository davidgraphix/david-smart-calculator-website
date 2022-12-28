const containerElement = document.getElementById('container')

const displayElement = document.getElementById('display')




const equalElement = document.getElementById('equal')

equalElement.addEventListener('click', pushTheAnswerToTheDisplayMenu)

function pushTheAnswerToTheDisplayMenu(){
    const value = displayElement.innerHTML;
    const answer = eval(value)

    displayElement.innerHTML = answer
}




const numOneElement = document.getElementById('one_btn')
const numTwoElement = document.getElementById('two_btn')
const numThreeElement = document.getElementById('three_btn')
const NumFourElement = document.getElementById('four_btn')
const numFiveElement = document.getElementById('five_btn')
const numSixElement = document.getElementById('six_btn')
const numSevenElement = document.getElementById('seven_btn')
const numEightElement = document.getElementById('eight_btn')
const numNineElement = document.getElementById('nine_btn')
const zeroElement = document.getElementById('zero_btn')

numOneElement.addEventListener('click', showOnDisplay)
numTwoElement.addEventListener('click', showOnDisplay)
numThreeElement.addEventListener('click', showOnDisplay)
NumFourElement.addEventListener('click', showOnDisplay)
numFiveElement.addEventListener('click', showOnDisplay)
numSixElement.addEventListener('click', showOnDisplay)
numSevenElement.addEventListener('click', showOnDisplay)
numEightElement.addEventListener('click', showOnDisplay)
numNineElement.addEventListener('click', showOnDisplay)
zeroElement.addEventListener('click', showOnDisplay)

function showOnDisplay(event){
    const newValue = event.target.innerHTML;


    const oldNum = displayElement.innerHTML

    displayElement.innerHTML =  oldNum + newValue

}




const additionElement = document.getElementById('addition_btn')
const substractionElement = document.getElementById('substract_btn')
const multiplicationElement = document.getElementById('mult_btn')
const divisionElement = document.getElementById('division_btn')

additionElement.addEventListener('click', replaceSignWithTheNewSign)
substractionElement.addEventListener('click', replaceSignWithTheNewSign)
multiplicationElement.addEventListener('click', replaceSignWithTheNewSign)
divisionElement.addEventListener('click', replaceSignWithTheNewSign)

function replaceSignWithTheNewSign(event){
    const display = displayElement.innerHTML
    const sign = event.target.innerHTML;

    const lastChar = display[display.length-1]

    if(lastChar === "/" || lastChar === "*" || lastChar === "+" || lastChar === "-"){
        displayElement.innerHTML = display.slice(0, display.length - 1);
    } 

    displayElement.innerHTML = displayElement.innerHTML + sign;
}





const arrowElement = document.getElementById('arrow_btn')
arrowElement.addEventListener('click', goBackToThePreviousDisplay)

function goBackToThePreviousDisplay(event){
    const display = displayElement.innerHTML 

    displayElement.innerHTML = display.slice(0, -1)
}




const clearElement = document.getElementById('clear_btn')
clearElement.addEventListener('click', clearAllDisplay)

function clearAllDisplay(event){
    const clear = event.target.innerHTML

    displayElement.innerHTML = ''
}





const openbracketElement = document.getElementById('openbracket_btn')
const closebracketElement = document.getElementById('closebracket_btn')
const pointElement = document.getElementById('point_btn')

openbracketElement.addEventListener('click', showOnDisplay)
closebracketElement.addEventListener('click', showOnDisplay)
pointElement.addEventListener('click', showOnDisplay)

function showOnDisplay(event){
    const bracket = event.target.innerHTML


    const sign = displayElement.innerHTML

    displayElement.innerHTML = sign + bracket
}