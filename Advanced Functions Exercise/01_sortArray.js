function sortArray(arr, string) {
    if (string == "asc") {
        arr.sort((a, b) => a - b);
    }
    else if (string == "desc") {
        arr.sort((a, b) => b - a);
    }
    return arr;
}
console.log(sortArray([14, 7, 17, 6, 8], 'asc'));