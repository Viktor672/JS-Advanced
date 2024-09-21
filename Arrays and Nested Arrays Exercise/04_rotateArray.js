function rotateArray(arr, number) {
    for (let i = 1; i <= number; i++) {
        let lastEl = arr.pop();
        arr.unshift(lastEl);
    }
    console.log(arr.join(" "));
}
rotateArray(['1',
    '2',
    '3',
    '4'],
    2);