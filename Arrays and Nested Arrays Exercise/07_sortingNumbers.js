function sortingNumbers(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let newArr = [];
    let count = arr.length - 1;
    for (let i = 0; i < arr.length / 2; i++) {
        if (i != count) {
            newArr.push(arr[i]);
            newArr.push(arr[count]);
            count--;
        }
        else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21]));