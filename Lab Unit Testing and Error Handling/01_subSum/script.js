export function subSum(arr, startIndex, endIndex) {
    if (typeof arr != "object") {
        return NaN;

    }
    if (startIndex < 0) {
        startIndex = 0;
    }
    if (endIndex > arr.length - 1) {
        endIndex = arr.length - 1;
    }
    let resultSum = 0;
    for (let i = startIndex; i <= endIndex; i++) {
        resultSum += arr[i];
    }
    return Math.round(resultSum * 100) / 100;
}
// console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
