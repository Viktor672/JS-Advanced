function orbit(arr) {
    let rows = arr[0];
    let cols = arr[1];
    let starRow = arr[2];
    let starCol = arr[3];
    let matrixArr = [];
    for (let i = 0; i < rows; i++) {
        matrixArr.push([]);
    }
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            matrixArr[row][col] = Math.max(Math.abs(row - starRow), Math.abs(col - starCol)) + 1;
        }
    }
    console.log(matrixArr.map(row => row.join(" ")).join("\n"));
}
orbit([4, 4, 0, 0]);