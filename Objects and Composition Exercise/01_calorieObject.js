function calorieObject(arr) {
    let foodObj = {};
    for (let i = 0; i < arr.length; i += 2) {
        foodObj[arr[i]] = Number(arr[i + 1]);
    }
    console.log(foodObj);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);