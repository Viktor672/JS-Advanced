function mathOperations(num1, num2, string) {
    num1 = Number(num1);
    num2 = Number(num2);
    let result = 0;
    switch (string) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        case '%': result = num1 % num2; break;
        case '**': result = num1 ** num2; break;
    }
    console.log(result);
}
mathOperations(3, 5.5, '*');