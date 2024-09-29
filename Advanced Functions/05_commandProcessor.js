function solution() {
    let string = "";
    let obj = {
        append: function (newString) {
            string += newString
        },
        removeStart: function (num) {
            string = string.substring(num);
        },
        removeEnd: function (num) {
            string = string.substring(0, string.length - num);
        },
        print:function(){
            console.log(string);
            
        }
    }
    return obj;
}
let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
