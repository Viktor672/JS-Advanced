function diagonalSums(arr) {
    let newArr = [];
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        mainDiagonalSum += arr[i][i];
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        secondaryDiagonalSum += arr[count][i];
        count++;
    }
    newArr.push(mainDiagonalSum, secondaryDiagonalSum);
    console.log(newArr.join(" "));
}
diagonalSums([[20, 40],
[10, 60]]);