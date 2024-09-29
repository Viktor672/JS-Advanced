function solution(number) {
    function add(number) {
        return Number(this.number) + Number(number);
    }
    let sumObj = {
        number: number
    }
    let result = add.bind(sumObj);
    return result;
}
let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
