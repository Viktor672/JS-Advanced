function magicMatrices(arr) {
    let isMagical = true;
    let rowSum = 0;
    let columnSum = 0;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            rowSum += arr[i][j];
            columnSum += arr[j][i];
        }
        newArr.push(rowSum, columnSum);
        rowSum = 0;
        columnSum = 0;
    }
    newArr.map(x => {
        let firstEl = newArr[0];
        if (x != firstEl) {
            isMagical = false;
        }
    })
    console.log(isMagical);
}
magicMatrices([[1, 1, 0],
[2, 2]]);