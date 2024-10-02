function argumentInfo(...arr) {
    let typeObj = {};
    for (const curEl of arr) {
        console.log(`${typeof curEl}: ${curEl}`);
        if (typeof curEl in typeObj) {
            typeObj[typeof curEl] += 1;
        }
        else {
            typeObj[typeof curEl] = 1;
        }
    }
    let tuples = Object.entries(typeObj);
    tuples.sort(([, a], [, b]) => b - a);
    for (const curEl of tuples) {
        console.log(`${curEl[0]} = ${curEl[1]}`);
    }
}
f = function () {
    console.log('Hello world!');
};

argumentInfo('cat', 42, f);

