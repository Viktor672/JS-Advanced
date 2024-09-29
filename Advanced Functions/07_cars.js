function cars(arr) {
    let newArr = [];
    for (const curEl of arr) {
        let tokens = curEl.split(" ");
        let command = tokens[0];
        if (command == "create") {
            if (curEl.includes("inherit")) {
                let curObj = newArr.find(curObj => curObj.name == tokens[3]);
                let obj = JSON.parse(JSON.stringify(curObj));
                obj = Object.create(curObj);
                obj.name = tokens[1];
                newArr.push(obj);
            }
            else {
                let name = tokens[1];
                let obj = {
                    name
                }
                newArr.push(obj);
            }
        }
        else if (command == "set") {
            let curObj = newArr.find(curObj => curObj.name == tokens[1]);
            curObj[tokens[2]] = tokens[3];
        }
        else if (command == "print") {
            let curObj = newArr.find(curObj => curObj.name == tokens[1]);
            let resultArr = [];
            for (const key in curObj) {
                if (key != "name") {
                    resultArr.push(`${key}:${curObj[key]}`);
                }
            }
            console.log(resultArr.join(","));
        }
    }
}
cars(['create pesho', 'create gosho inherit pesho', 'create stamat inherit gosho', 'set pesho rank number1', 'set gosho nick goshko', 'print stamat']);