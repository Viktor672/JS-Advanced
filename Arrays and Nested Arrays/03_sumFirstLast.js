function sumFirstLast(arr) {
    let firstEl = Number(arr[0]);
    let lastEl = Number(arr[arr.length - 1]);
    let result = firstEl + lastEl
    console.log(result);
}
sumFirstLast(['20', '30', '40']);