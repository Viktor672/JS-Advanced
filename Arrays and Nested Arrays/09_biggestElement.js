function biggestElement(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(Math.max(...arr[i]));
    }
    let sortedNewArr = newArr.sort((a, b) => b - a);
    return sortedNewArr[0];
}
let result = biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);
console.log(result);
