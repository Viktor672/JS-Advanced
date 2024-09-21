// First Solution with for loop
function smallestTwoNumbers(arr) {
    arr = arr.map(Number);
    let theSmallestNumsArr = [];
    let min = Number.MAX_SAFE_INTEGER;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let curNum = arr[i];
        if (curNum < min) {
            min = curNum;
        }
        if (i >= arr.length - 1 && count == 1) {
            theSmallestNumsArr.push(min);
        }
        if (i >= arr.length - 1 && count == 0) {
            i = 0;
            count++;
            theSmallestNumsArr.push(min);
            let indexOf = arr.indexOf(min);
            arr.splice(indexOf, 1);
            min = Number.MAX_SAFE_INTEGER;
            continue;
        }
    }
    console.log(theSmallestNumsArr.join(" "));
}
smallestTwoNumbers([30, 15, 50, 5]);

//Second Solution with sort
// function smallestTwoNumbers(arr) {
//     arr = arr.map(Number);
//     let sortedArr = arr.sort((a, b) => a - b);
//     let theSmallestNum = sortedArr[0];
//     let theSecondSmallestNum = sortedArr[1];
//     console.log(`${theSmallestNum} ${theSecondSmallestNum}`);
// }
// smallestTwoNumbers([30, 15, 50, 5]);

//Third Solution with Math.min
// function smallestTwoNumbers(arr) {
//arr=arr.map(Number);
//     let theSmallestNum = Math.min(...arr);
//     let indexOf = arr.indexOf(theSmallestNum);
//     arr.splice(indexOf, 1);
//     let theSecondSmallestNum = Math.min(...arr);
//     console.log(`${theSmallestNum} ${theSecondSmallestNum}`);
// }
// smallestTwoNumbers([30, 15, 50, 5]);


