function solution() {
    let productsObj = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }
    function robot(input) {
        if (input.includes("restock")) {
            let tokens = input.split(" ");
            let product = tokens[1];
            let quantity = Number(tokens[2]);
            productsObj[product] += quantity;
            return "Success";
        }
        else if (input.includes("prepare")) {
            let tokens = input.split(" ");
            let recipe = tokens[1];
            let quantity = Number(tokens[2]);
            for (let i = 1; i <= quantity; i++) {
                if (recipe == "apple") {
                    if (productsObj.carbohydrate - 1 < 0) {
                        return "Error: not enough carbohydrate in stock";
                    }
                    else if (productsObj.flavour - 2 < 0) {
                        return "Error: not enough flavour in stock";
                    }
                    productsObj.carbohydrate -= 1;
                    productsObj.flavour -= 2;
                }
                else if (recipe == "lemonade") {
                    if (productsObj.carbohydrate - 10 < 0) {
                        return "Error: not enough carbohydrate in stock";
                    }
                    else if (productsObj.flavour - 20 < 0) {
                        return "Error: not enough flavour in stock";
                    }
                    productsObj.carbohydrate -= 10;
                    productsObj.flavour -= 20;
                }
                else if (recipe == "burger") {
                    if (productsObj.carbohydrate - 5 < 0) {
                        return "Error: not enough carbohydrate in stock";
                    }
                    else if (productsObj.fat - 7 < 0) {
                        return "Error: not enough fat in stock";
                    }
                    else if (productsObj.flavour - 3 < 0) {
                        return "Error: not enough flavour in stock";
                    }
                    productsObj.carbohydrate -= 5;
                    productsObj.fat -= 7.;
                    productsObj.flavour -= 3;
                }
                else if (recipe == "eggs") {
                    if (productsObj.protein - 5 < 0) {
                        return "Error: not enough protein in stock";
                    }
                    else if (productsObj.fat - 1 < 0) {
                        return "Error:not enough fat in stock";
                    }
                    else if (productsObj.flavour - 1 < 0) {
                        return "Error: not enough flavour in stock";
                    }
                    productsObj.protein -= 5;
                    productsObj.fat -= 1;
                    productsObj.flavour -= 1;
                }
                else if (recipe == "turkey") {
                    if (productsObj.protein - 10 < 0) {
                        return "Error: not enough protein in stock";
                    }
                    else if (productsObj.carbohydrate - 10 < 0) {
                        return "Error:not enough carbohydrate in stock";
                    }
                    else if (productsObj.fat - 10 < 0) {
                        return "Error:not enough fat in stock";
                    }
                    else if (productsObj.flavour - 10 < 0) {
                        return "Error: not enough flavour in stock";
                    }
                    productsObj.protein -= 10;
                    productsObj.carbohydrate -= 10;
                    productsObj.fat -= 10;
                    productsObj.flavour -= 10;
                }
            }
            return "Success";
        }
        else if (input == "report") {
            let productArr = [];
            for (const product in productsObj) {
                productArr.push(`${product}=${productsObj[product]}`);
            }
            return productArr.join(" ");
        }
    }
    return robot;
}

// let manager = solution();
// console.log(manager("restock flavour 50"));
// console.log(manager("prepare lemonade 4"));

let manager = solution();
console.log(manager('prepare turkey 1')); //Error: not enough protein in stock
console.log(manager('restock protein 10')) //success
console.log(manager('prepare turkey 1'))          //'Error: not enough carbohydrate in stock'
console.log(manager('restock carbohydrate 10'))  // Success
console.log(manager('prepare turkey 1'))    //'Error: not enough fat in stock'
console.log(manager('prepare turkey 1')) //'Error: not enough protein in stock'



