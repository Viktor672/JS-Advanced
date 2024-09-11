function cookingByNumbers(num, oper1, oper2, oper3, oper4, oper5) {
    num = Number(num);
    let arr = [];
    arr.push(oper1, oper2, oper3, oper4, oper5);
    for (const curOper of arr) {
        if (curOper == "chop") {
            num /= 2;
        }
        else if (curOper == "dice") {
            num = Math.sqrt(num);
        }
        else if (curOper == "spice") {
            num += 1;
        }
        else if (curOper == "bake") {
            num *= 3;
        }
        else if (curOper == "fillet") {
            num -= 0.2 * num;
        }
        console.log(num);
    }
}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');