function getFibonator() {
    let arr = [];
    let sum = 0;
    function fibonachiSum() {
        if (arr[arr.length - 1] == undefined || arr[arr.length - 2] == undefined) {
            sum = 1;
        }
        else {
            sum = arr[arr.length - 1] + arr[arr.length - 2];
        }
        arr.push(sum);
        return sum;
    }
    return fibonachiSum;
}
let fib = getFibonator();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());

