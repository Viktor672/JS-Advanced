function extract(content) {
    let textEl = document.getElementById(content).textContent;
    let pattern = /\(([^)]+)\)/g;
    let match = pattern.exec(textEl);
    let textArr = [];
    while (match != null) {
        textArr.push(match[0])
        match = pattern.exec(textEl);
    }
    return textArr.join("; ");
}