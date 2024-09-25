let arr=[1,2,1,4,5];
let uniqueProductArr = arr.reduce((acc, value) => {
    if (!(acc.includes(value))) {
       acc.push(value);
    }
    return acc;
 }, []);
 console.log(uniqueProductArr);
 