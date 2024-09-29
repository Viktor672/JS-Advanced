function listProcessor(arr) {
    let resultArr = [];
    for (const curEl of arr) {
        if (curEl == "print") {
            console.log(resultArr.join(","));
        }
        else {
            let tokens = curEl.split(" ");
            let [command, string] = tokens;
            if (command == "add") {
                resultArr.push(string);
            }
            else if (command == "remove") {
                while (resultArr.includes(string)) {
                    let indexOf = resultArr.indexOf(string);
                    resultArr.splice(indexOf, 1);
                }
            }
        }
    }
}
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);