function equalNeighbors(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (j < arr[i].length - 1 && arr[i][j] == arr[i][j + 1]) {
                count++;
            }
            if (i < arr.length - 1 && arr[i][j] == arr[i + 1][j]) {
                count++;
            }
        }
    }
    return count;
}
let result = equalNeighbors([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, '5', 0, 4]]);
console.log(result); 
