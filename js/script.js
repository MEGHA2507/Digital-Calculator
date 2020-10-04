function inputEntered(event) {
    let inputValue = document.querySelector('.calculator-data-input').value;
    console.log(inputValue);
    let enteredValue = event.target.value;
    let calcValue = inputValue.concat(enteredValue);
    document.querySelector('.calculator-data-input').value = calcValue;

}

function clearAll(event) {
    document.querySelector('.calculator-data-input').value = "";
}

function deleteLastInput(event) {
    let inputValue = document.querySelector('.calculator-data-input').value;
    let deleteOutput = inputValue.slice(0, -1);
    document.querySelector('.calculator-data-input').value = deleteOutput;
}

function evaluteResult(event) {
    inputEntered(event);
    let inputValue = document.querySelector('.calculator-data-input').value;
    let deleteOutput = inputValue.slice(0, -1);
    let evalResult;

    if (deleteOutput.includes('^')) {
        let powerIndex = deleteOutput.indexOf('^');
        let num1 = deleteOutput.slice(0, powerIndex);
        let num2 = deleteOutput.slice(powerIndex + 1, deleteOutput.length);

        evalResult = Math.pow(num1, num2);

    } else {
        evalResult = eval(deleteOutput);
    }

    let evalResultDisplay = inputValue.concat(evalResult);
    document.querySelector('.calculator-data-input').value = evalResultDisplay;
}

// function operatorOccurance(){

// }