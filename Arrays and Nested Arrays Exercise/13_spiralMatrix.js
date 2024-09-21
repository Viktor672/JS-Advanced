function spiralMatrix(row, col) {
    let matrixArr = [];
    let counter = 1;
    let startCol = 0;
    let endCol = col - 1;
    let startRow = 0;
    let endRow = row - 1;
    for (let i = 0; i < row; i++) {
        matrixArr.push([]);
    }
    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            matrixArr[startRow][i] = counter;
            counter++;
        }
        startRow++;
        for (let i = startRow; i <= endRow; i++) {
            matrixArr[i][endCol] = counter;
            counter++;
        }
        endCol--;
        for (let i = endCol; i >= startCol; i--) {
            matrixArr[endRow][i] = counter;
            counter++;
        }
        endRow--;
        for (let i = endRow; i >= startRow; i--) {
            matrixArr[i][startCol] = counter;
            counter++;
        }
        startCol++;
    }
    matrixArr = matrixArr.forEach(row => console.log(row.join(' ')));
}
spiralMatrix(5, 5);