(function arrayExtension() {
    Array.prototype.last = function () {
        return [...this].pop();
    }

    Array.prototype.skip = function (n) {
        if(n<0 && n>this.length-1){
            return;
        }
        let resultArr = [];
        for (let i = n; i < this.length; i++) {
            resultArr.push(this[i]);
        }
        return resultArr;
    }

    Array.prototype.take = function (n) {
        if(n<0 && n>this.length-1){
            return;
        }
        let resultArr = [];
        for (let i = 0; i < n; i++) {
            resultArr.push(this[i]);
        }
        return resultArr;
    }

    Array.prototype.sum = function () {
        return this.reduce((acc, value) => {
            acc += value;
            return acc;
        }, 0);
    }

    Array.prototype.average = function () {
        return this.reduce((acc, value, index) => {
            let arrayLength = this.length;
            acc += value;
            if (index >= arrayLength - 1) {
                acc = acc / arrayLength;
            }
            return acc;
        }, 0);
    }
})();

