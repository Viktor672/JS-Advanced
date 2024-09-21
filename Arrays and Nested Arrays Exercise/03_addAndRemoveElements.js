function addAndRemoveElements(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "add") {
            newArr.push(i + 1);
        }
        else if (arr[i] == "remove") {
            newArr.pop();
        }
    }
    if (newArr.length == 0) {
        console.log("Empty");
    }
    else {
        console.log(newArr.join("\n"));
    }
}
addAndRemoveElements(['add',
    'add',
    'add',
    'add']);