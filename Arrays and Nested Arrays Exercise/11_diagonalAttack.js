function diagonalAttack(arr) {
    let matrixArr = arr.map(row => row.split(' ').map(Number));
    let sumFirstDiagonal = 0;
    for (let i = 0; i < matrixArr.length; i++) {
        sumFirstDiagonal = sumFirstDiagonal + matrixArr[i][i];
    }
    let sumSecondDiagonal = 0;
    for (let j = 0; j < matrixArr.length; j++) {
        sumSecondDiagonal = sumSecondDiagonal + matrixArr[j][matrixArr.length - 1 - j];
    }
    if (sumFirstDiagonal == sumSecondDiagonal) {
        for (let k = 0; k < matrixArr.length; k++) {
            for (let l = 0; l < matrixArr.length; l++) {
                if (k != l && k != matrixArr.length - 1 - l) {
                    matrixArr[k][l] = sumFirstDiagonal;
                }
            }
        }
        printMatrix(matrixArr);
    }
    else {
        printMatrix(matrixArr);
    }
    function printMatrix(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(' '))
        }
    }
}
diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);