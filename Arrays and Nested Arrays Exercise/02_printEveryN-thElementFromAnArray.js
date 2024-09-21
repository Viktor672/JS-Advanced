function printEveryN_hElementFromAnArray(arr, number) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += number) {
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(printEveryN_hElementFromAnArray(['5', '20', '31', '4', '20'], 2));