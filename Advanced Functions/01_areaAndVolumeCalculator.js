    function solve(area, vol, input) {
        let calculatorArr = JSON.parse(input);
        let newArr = [];
        for (const curEl of calculatorArr) {
            let calculatorObj = {};
            let areaValue = area.apply(curEl);
            let volumeValue = vol.apply(curEl);
            calculatorObj.area = areaValue;
            calculatorObj.volume = volumeValue;
            newArr.push(calculatorObj);
        }
        return newArr;
    }
    function area() {
        return Math.abs(this.x * this.y);
    }
    function vol() {
        return Math.abs(this.x * this.y * this.z);
    }
    console.log(solve(area, vol, `[
        {"x":"1","y":"2","z":"10"},
        {"x":"7","y":"7","z":"10"},
        {"x":"5","y":"2","z":"10"}]`));