function lowestPriceInCities(arr) {
    let cityObj = {};
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(" | ");
        let [city, product, price] = tokens;
        price = Number(price);
        if (!(product in cityObj)) {
            cityObj[product] = { city, price };
        }
        else {
            if (cityObj[product]['price'] > price) {
                cityObj[product] = { city, price };
            }
        }
    }
    for (const product in cityObj) {
        console.log(`${product} -> ${cityObj[product]['price']} (${cityObj[product]['city']})`);
    }
}
lowestPriceInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);