class List {
    listArr;
    size;
    constructor() {
        this.listArr = [];
        this.size = 0;
    }

    add(element) {
        this.listArr.push(element);
        this.size += 1;
        this.listArr.sort((a, b) => a - b);
    }

    remove(index) {
        if (index >= 0 && index < this.size) {
            this.listArr.splice(index, 1);
            this.size -= 1;
            this.listArr.sort((a, b) => a - b);
        }
    }

    get(index) {
        if (index >= 0 && index < this.size) {
            return this.listArr[index];
        }
    }
}

let list = new List();

list.add(5);

list.add(6);

list.add(7);

console.log(list.get(1));

list.remove(1);

console.log(list.get(1));