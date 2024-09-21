function carFactory(carObj) {
    if (carObj.power <= 90) {
        delete carObj.power;
        carObj.engine = { power: 90, volume: 1800 };
    }
    else if (carObj.power <= 120) {
        delete carObj.power;
        carObj.engine = { power: 120, volume: 2400 };
    }
    else if (carObj.power <= 200) {
        delete carObj.power;
        carObj.engine = { power: 200, volume: 3500 };
    }

    let carriageInfo = carObj.carriage;
    delete carObj.carriage;
    carObj.carriage = { type: carriageInfo, color: carObj.color };
    delete carObj.color;

    function pushInArr(x) {
        let arr = [];
        for (let i = 1; i <= 4; i++) {
            arr.push(x);
        }
        return arr;
    }
    if (Math.floor(carObj.wheelsize) % 2 == 0) {
        carObj.wheelsize = Math.floor(carObj.wheelsize - 1);
    }
    carObj.wheels = pushInArr(carObj.wheelsize);
    delete carObj.wheelsize;

    return carObj;
}
let result = carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17});
console.log(result);
