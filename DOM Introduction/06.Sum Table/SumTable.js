function sumTable() {
    let priceList = document.querySelectorAll("table tbody tr td");
    let priceArr = [];
    let count = 0;
    for (const curEl of priceList) {
        if (count % 2 != 0) {
            priceArr.push(curEl.textContent);
        }
        count++;
    }
    let sum = priceArr.pop();
    sum = priceArr.reduce((acc, value) => acc + Number(value), 0);
    document.getElementById("sum").textContent = sum;
}