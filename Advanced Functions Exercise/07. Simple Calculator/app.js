function calculator() {
    let num1El;
    let num2El;
    let resultEl;
    let calculatorObj = {
        init: function (selector1, selector2, resultSelector) {
            num1El = document.querySelector(selector1);
            num2El = document.querySelector(selector2);
            resultEl = document.querySelector(resultSelector);
        },
        add: function () {
            resultEl.value = Number(num1El.value) + Number(num2El.value);
        },
        subtract: function () {
            resultEl.value = num1El.value - num2El.value;
        }
    }
    return calculatorObj;
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');





