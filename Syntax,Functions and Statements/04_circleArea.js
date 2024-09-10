function circleArea(element) {
    const pi = Math.PI;
    let typeOf = typeof (element);
    if (typeOf == 'number') {
        let r = Number(element);
        console.log((r * r * pi).toFixed(2));
    }
    else {
        console.log(`We can not calculate the circle area, because we receive a ${typeOf}.`);
    }
}
circleArea([]);