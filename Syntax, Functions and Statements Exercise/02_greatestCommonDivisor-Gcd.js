function greatestCommonDivisorGcd(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    if (num1 >= num2) {
        for (let i = num2; i >= 1; i--) {
            if (num1 % i == 0 && num2 % i == 0) {
                console.log(i);
                return;
            }
        }
    }
    else {
        for (let i = num1; i >= 1; i--) {
            if (num1 % i == 0 && num2 % i == 0) {
                console.log(i);
                return;
            }
        }
    }
}
greatestCommonDivisorGcd(17, 37);