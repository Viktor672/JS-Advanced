function processOddPositions(arr) {
    let oddArr = [];
    for (let i = 1; i < arr.length; i += 2) {
        oddArr.push(arr[i]);
    }
    oddArr = oddArr.map(x => x * 2).reverse();
    return oddArr.join(" ");
}
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));