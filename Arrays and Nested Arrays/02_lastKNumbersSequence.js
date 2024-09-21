function lastKNumbersSequence(n, k) {
    let arr = [1];
    let sum = 0;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i; j > i - k; j--) {
            if (j >= 0) {
                sum += arr[j];
            }
        }
        arr.push(sum);
        sum = 0;
    }
    return arr;
}
console.log(lastKNumbersSequence(8, 2));
