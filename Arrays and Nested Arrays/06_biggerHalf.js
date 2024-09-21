function biggerHalf(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let half = sortedArr.length / 2;
    let newArr = [];
    for (let i = half; i < sortedArr.length; i++) {
        if (String(i).includes('.')) {
            i = Math.floor(i);
        }
        newArr.push(sortedArr[i]);
    }
    return newArr;
}
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));