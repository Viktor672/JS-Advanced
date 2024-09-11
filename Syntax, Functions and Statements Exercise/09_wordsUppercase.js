function wordsUpperCase(string) {
    let pattern = /[A-Za-z0-9_]+/gm;
    let match = pattern.exec(string);
    let arr = [];
    if (!match) {
        console.log("");
        return;
    }
    while (match != null) {
        arr.push(match[0]);
        match = pattern.exec(string);
    }
    let upperCaseWordArr = [];
    for (const curWord of arr) {
        let upperCaseWord = '';
        for (const curChar of curWord) {
            upperCaseWord += curChar.toUpperCase();
        }
        upperCaseWordArr.push(upperCaseWord);
    }
    return upperCaseWordArr.join(", ");
}
console.log(wordsUpperCase('da, a'));