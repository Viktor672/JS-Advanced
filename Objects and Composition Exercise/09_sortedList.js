function createSortedList() {
    const listObj = {
        listArr: [],
        size: 0,
        add,
        remove,
        get
    }
    function add(number) {
        if (typeof number === 'number') {
            this.listArr.push(number);
            this.size++;
            this.listArr.sort((a, b) => a - b);
        }
    }
    function remove(index) {
        if (index >= 0 && index < this.listArr.length) {
            this.listArr.splice(index, 1);
            this.size--;
        }
    }
    function get(index) {
        if (index >= 0 && index < this.listArr.length) {
            return this.listArr[index];
        }
    }
    return listObj;
}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
