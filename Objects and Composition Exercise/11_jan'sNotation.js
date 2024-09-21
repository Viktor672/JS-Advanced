function janSNotation(arr) {
    let numbersArr = [];
    for (const curEl of arr) {
        if (typeof curEl == 'number') {
            numbersArr.push(curEl);
        } else if (numbersArr.length >= 2) {
            calculate(numbersArr, curEl);
        } else {
            console.log('Error: not enough operands!');
            return;
        }
    }

    if (numbersArr.length > 1) {
        console.log('Error: too many operands!');
        return;
    } else {
        console.log(numbersArr.toString());
    }

    function calculate(numbers, operator) {
        if (numbers.length < 2) {
            console.log('Error: not enough operands!');
            return;
        } else {
            let oper2 = numbers.pop();
            let oper1 = numbers.pop();

            let sum = 0;
            if (operator == '+') {
                sum = oper1 + oper2;
            } else if (operator == '-') {
                sum = oper1 - oper2;
            } else if (operator == '*') {
                sum = oper1 * oper2;
            } else if (operator == '/') {
                sum = oper1 / oper2;
            }
            numbers.push(sum);
        }
    }
}
janSNotation([3, 4, '+']);