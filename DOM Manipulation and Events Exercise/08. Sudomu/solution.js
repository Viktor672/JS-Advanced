function solve() {
    let inputEls = document.querySelectorAll('input');
    let checkButtonEls = document.querySelectorAll('button')[0];
    let clearEls = document.querySelectorAll('button')[1];
    let tableEl = document.querySelector('table');
    let checkParEls = document.querySelectorAll('#check p')[0];
    checkButtonEls.style.cursor = 'pointer';
    clearEls.style.cursor = 'pointer';

    clearEls.addEventListener('click', event => {
        let inputArr = Array.from(inputEls);
        for (const curEl of inputArr) {
            curEl.value = '';
        }
        tableEl.style.border = 'none';
        checkParEls.textContent = '';
    });

    checkButtonEls.addEventListener('click', event => {
        let matrixArr = [
            [inputEls[0].value, inputEls[1].value, inputEls[2].value],
            [inputEls[3].value, inputEls[4].value, inputEls[5].value],
            [inputEls[6].value, inputEls[7].value, inputEls[8].value]
        ];
        isSudomu = true;
        for (let i = 1; i < matrixArr.length; i++) {
            let row = matrixArr[i];
            let col = matrixArr.map(row => row[i]);
            if (col.length != [...new Set(col)].length || row.length != [...new Set(row)].length) {
                isSudomu = false;
                break;
            }
        }
        if (isSudomu) {
            tableEl.style.border = '2px solid green';
            checkParEls.style.color = 'green';
            checkParEls.textContent = 'You solve it! Congratulations!';
        } else {
            tableEl.style.border = '2px solid red';
            checkParEls.style.color = 'red';
            checkParEls.textContent = 'NOP! You are not done yet...';
        }
    });
}