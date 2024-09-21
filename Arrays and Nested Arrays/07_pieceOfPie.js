function pieceOfPie(arr, string1, string2) {
    let newArr = [];
    let indexOfString1 = arr.indexOf(string1);
    let indexOfString2 = arr.indexOf(string2);
    for (let i = indexOfString1; i <= indexOfString2; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(pieceOfPie(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'));