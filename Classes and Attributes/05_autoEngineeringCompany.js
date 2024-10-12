function autoEngineeringCompany(arr) {
    let carObj = {};
    for (const curCarInfo of arr) {
        let tokens = curCarInfo.split(' | ');
        let [brand, model, producedCars] = tokens;
        producedCars = Number(producedCars);
        let isTheSameModel = false;
        if (carObj.hasOwnProperty(brand)) {
            for (const curObj of carObj[brand]) {
                if (curObj.model == model) {
                    curObj.producedCars += producedCars;
                    isTheSameModel = true;
                }
            }
            if (!isTheSameModel) {
                carObj[brand].push({ model, producedCars });
            }
        }
        else {
            carObj[brand] = [];
            carObj[brand].push({ model, producedCars });
        }
    }
    for (const brand in carObj) {
        console.log(brand);
        for (const curObj of carObj[brand]) {
            console.log(`###${curObj.model} -> ${curObj.producedCars}`);
        }
    }
}
autoEngineeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);