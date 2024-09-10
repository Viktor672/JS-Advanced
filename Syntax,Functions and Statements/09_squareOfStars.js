function squareOfStars(num) {
    if (num == undefined) {
        num = 5;
    }
    num = Number(num);
    let result = ""
    for (let rows = 1; rows <= num; rows++) {
        for (let cols = 1; cols <= num; cols++) {
            result += "* "
        }
        result += "\n";
    }
    console.log(result);
}
squareOfStars(7);