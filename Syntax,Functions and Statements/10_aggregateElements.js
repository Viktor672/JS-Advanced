function aggregateElements(arr) {
    arr = arr.map(Number);
    let sum = 0;
    let inversedSum = 0;
    let concatenatedResult = '';
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    for (let i = 0; i < arr.length; i++) {
        let inversedNum = 1 / arr[i];
        inversedSum += inversedNum;
    }
    for (let i = 0; i < arr.length; i++) {
        concatenatedResult += arr[i];
    }
    console.log(sum);
    console.log(inversedSum);
    console.log(concatenatedResult);
}
aggregateElements([1, 2, 3]);