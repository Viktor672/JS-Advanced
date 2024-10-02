function add(x) {
    let sum = x;
    function sumOfNums(y) {
        sum += y;
        return sumOfNums;
    }
    sumOfNums.toString = function () {
        return sum;
    }
    return sumOfNums
}
console.log(add(1)(6)(-3).toString());



