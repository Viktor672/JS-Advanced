function colorize() {
    let trElements = document.querySelectorAll("table tr");
    let trElementsArr = Array.from(trElements);
    for (let i = 1; i < trElementsArr.length; i += 2) {
        trElementsArr[i].style.backgroundColor = "teal";
    }
}