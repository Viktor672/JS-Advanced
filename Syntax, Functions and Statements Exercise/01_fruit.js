function fruit(string, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    let kilograms = num1 / 1000;
    let money = kilograms * num2;
    console.log(`I need $${money.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${string}.`);
}
fruit('orange', 2500, 1.80);