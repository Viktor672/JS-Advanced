function stringLength(string1, string2, string3) {
    let sum = string1.length + string2.length + string3.length;
    let avgSum = sum / 3;
    console.log(Math.floor(sum));
    console.log(Math.floor(avgSum));
}
stringLength('chocolate', 'ice cream', 'cake');