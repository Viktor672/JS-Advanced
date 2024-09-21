//Solution with reduce
function extractIncreasingSubsetFromArray(arr) {
    let newArr = [];
    arr.reduce((acc, value) => {
        let curBiggestNum = acc;
        if (value >= curBiggestNum) {
            newArr.push(value);
            curBiggestNum = value;
            return curBiggestNum;
        }
        return curBiggestNum;
    }, Number.MIN_SAFE_INTEGER)
    return newArr;
}
let result = extractIncreasingSubsetFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
console.log(result);

//Solution with just a loop
// function extractIncreasingSubsetFromArray(arr) {
//     let newArr = [];
//     let curBiggestNum = Number.MIN_SAFE_INTEGER;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= curBiggestNum) {
//             newArr.push(arr[i]);
//             curBiggestNum = arr[i];
//         }
//     }
//     return newArr;
// }
// let result = extractIncreasingSubsetFromArray([1, 3, 3, 4, 10, 12, 3, 2, 24]);
// console.log(result);

