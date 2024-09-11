function validityChecker(x1, y1, x2, y2) {
    x1 = Number(x1);
    y1 = Number(y1);
    x2 = Number(x2);
    y2 = Number(y2);
    let distanceBetweenX1Y1To00 = Math.sqrt(x1 ** 2 + y1 ** 2);
    let distanceBetweenX2Y2To00 = Math.sqrt(x2 ** 2 + y2 ** 2);
    let distanceBetweenX1Y1ToX2Y2 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    if (distanceBetweenX1Y1To00 % 1 == 0) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }
    else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if (distanceBetweenX2Y2To00 % 1 == 0) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }
    else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    if (distanceBetweenX1Y1ToX2Y2 % 1 == 0) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }
    else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
validityChecker(2, 1, 1, 1);