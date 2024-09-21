function storeCatalogue(arr) {
    let shopObj = {};
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(" : ");
        let [product, price] = tokens;
        price = Number(price);
        shopObj[product] = price;
    }
    let tuples = Object.entries(shopObj);
    tuples.sort((a, b) => {
        let str1 = a[0].toUpperCase();
        let str2 = b[0].toUpperCase();
        return str1.localeCompare(str2);
    });
    let charArr = [];
    for (const curEl of tuples) {
        if (!(arr.includes(curEl[0][0].toUpperCase()))) {
            console.log(curEl[0][0].toUpperCase());
            console.log(`  ${curEl[0]}: ${curEl[1]}`);
            arr.push(curEl[0][0].toUpperCase());
        }
        else {
            console.log(`  ${curEl[0]}: ${curEl[1]}`);
        }
    }
}
storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);