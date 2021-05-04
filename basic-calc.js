// Global variables
let number1, number2, operation

// Gets the number buttons
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')
const btn6 = document.getElementById('btn6')
const btn7 = document.getElementById('btn7')
const btn8 = document.getElementById('btn8')
const btn9 = document.getElementById('btn9')
const btn0 = document.getElementById('btn0')

// Gets the op buttons
const btnAddition = document.getElementById('add')
const btnSubstraction = document.getElementById('sub')
const btnMultiplication = document.getElementById('mult')
const btnDivision = document.getElementById('div')

// Gets the answer and operation elements on the screen
let answer = document.getElementById('answer')
let op = document.getElementById('op')

// Gets the clean and calc buttons
const btnClean = document.getElementById('clean')
const btnCalc = document.getElementById('calc')

/*
// Op funcs
*/
// Clean the screen for a new op
const cleanScreen = () => {
    answer.textContent = "0"
    op.textContent = ""
    number1 = 0
    number2 = 0
    operation = ""
}
// Clean the screen for the next op
const operationClean = () => {
    op.textContent = ""
}
// Calc the op
const solveOperation = () => {
    let result = 0
    switch (operation) {
        case '+':
            result = parseFloat(number1) + parseFloat(number2)
            break;
            
        case '-':
            result = parseFloat(number1) - parseFloat(number2)
            break;
                
        case '*':
            result = parseFloat(number1) * parseFloat(number2)
            break;
            
        case '/':
            result = parseFloat(number1) / parseFloat(number2)
            break;

        default:
            break;
    }
    cleanScreen()
    answer.textContent = result.toString()
}

/* Button events 
// Numbers
*/
btn1.addEventListener("click", () => {
    op.textContent = op.textContent + '1'
})
btn2.addEventListener("click", () => {
    op.textContent = op.textContent + '2'
})
btn3.addEventListener("click", () => {
    op.textContent = op.textContent + '3'
})
btn4.addEventListener("click", () => {
    op.textContent = op.textContent + '4'
})
btn5.addEventListener("click", () => {
    op.textContent = op.textContent + '5'
})
btn6.addEventListener("click", () => {
    op.textContent = op.textContent + '6'
})
btn7.addEventListener("click", () => {
    op.textContent = op.textContent + '7'
})
btn8.addEventListener("click", () => {
    op.textContent = op.textContent + '8'
})
btn9.addEventListener("click", () => {
    op.textContent = op.textContent + '9'
})
btn0.addEventListener("click", () => {
    op.textContent = op.textContent + '0'
})

/*
// Operations
*/
btnAddition.addEventListener("click", () => {
    number1 = op.textContent
    operation = '+'
    operationClean()
})
btnSubstraction.addEventListener("click", () => {
    number1 = op.textContent
    operation = '-'
    operationClean()
})
btnMultiplication.addEventListener("click", () => {
    number1 = op.textContent
    operation = '*'
    operationClean()
})
btnDivision.addEventListener("click", () => {
    number1 = op.textContent
    operation = '/'
    operationClean()
})

/*
// Calculation
*/
btnCalc.addEventListener("click", () => {
    number2 = op.textContent
    solveOperation()
})

/*
// Clean screen
*/
btnClean.addEventListener("click", cleanScreen)