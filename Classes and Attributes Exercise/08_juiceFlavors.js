function juiceFlavors(arr) {
    let juiceObj = {};
    let resultObj = {};
    let sumArr = [];
    for (const curEl of arr) {
        let tokens = curEl.split(' => ');
        let [juice, quantity] = tokens;
        quantity = Number(quantity);
        if (!(juice in juiceObj)) {
            juiceObj[juice] = quantity;
            let a = 5;
        }
        else {
            juiceObj[juice] += quantity;
        }
        if (juiceObj[juice] >= 1000) {
            if (!(juice in resultObj)) {
                resultObj[juice] = 0;
            }
        }
    }
    for (const juice in resultObj) {
        let bottles = Math.floor(juiceObj[juice] / 1000);
        console.log(`${juice} => ${bottles}`);
    }

}

juiceFlavors(['Kiwi => 234',

    'Pear => 2345',

    'Watermelon => 3456',

    'Kiwi => 4567',

    'Pear => 5678',

    'Watermelon => 6789']);