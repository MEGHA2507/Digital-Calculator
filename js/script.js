// All clear button
function clearAll(event) {
    document.querySelector('.calculator-data-input').value = "";
}

// Delete last character button
function deleteLastInput(event) {
    let inputValue = document.querySelector('.calculator-data-input').value;
    let deleteOutput = inputValue.slice(0, -1);
    document.querySelector('.calculator-data-input').value = deleteOutput;
}

// Input entered button
function inputEntered(event) {

    let enteredValue = event.target.value;
    let inputValue = document.querySelector('.calculator-data-input').value;

    // null value of input and 1st char shouldnot be operator validations
    if (inputValue == '' && isNaN(enteredValue)) {
        return false;
    } else {
        if (isNaN(enteredValue)) {
            let lastindexValue = inputValue.slice(-1);
            console.log(lastindexValue);
            if (enteredValue == lastindexValue || isNaN(lastindexValue)) {
                return false;
            }
        }
    }

    let calcValue = inputValue.concat(enteredValue);
    document.querySelector('.calculator-data-input').value = calcValue;
}


function evaluteResult(event) {
    inputEntered(event);
    let inputValue = document.querySelector('.calculator-data-input').value;

    // evaluates null input.
    if (inputValue == '') {
        document.querySelector('.calculator-data-input').value = '';
    } else {
        let deleteOutput = inputValue.slice(0, -1);
        let evalResult;

        if (deleteOutput.includes('^')) {
            let powerIndex = deleteOutput.indexOf('^');
            let num1 = deleteOutput.slice(0, powerIndex);
            let num2 = deleteOutput.slice(powerIndex + 1, deleteOutput.length);

            evalResult = Math.pow(num1, num2);

        } else {
            evalResult = eval(deleteOutput);
            if (isNaN(evalResult)) {
                document.querySelector('.calculator-data-input').value = 'error';
            }
        }

        let evalResultDisplay = inputValue.concat(evalResult);
        document.querySelector('.calculator-data-input').value = evalResultDisplay;
    }
}