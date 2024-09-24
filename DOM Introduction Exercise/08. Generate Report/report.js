function generateReport() {
    let headRowsEl = document.querySelector("table thead tr");
    let bodyRowsEl = document.querySelectorAll("table tbody tr");
    let outputEl = document.querySelector("#output");
    let headRowsArr = Array.from(headRowsEl.children);
    headRowsArr = headRowsArr.map((curEl, index) => ({
        name: curEl.children[0].getAttribute("name"),
        index: index,
        element: curEl.children[0]
    })).filter(curEl => curEl.element.checked);

    let bodyRowsArr = Array.from(bodyRowsEl);
    bodyRowsArr = bodyRowsArr.map(tr => {
        return headRowsArr.reduce((acc, value) => {
            acc[value.name] = tr.children[value.index].textContent;
            return acc;
        }, {})
    })
    outputEl.value = JSON.stringify(bodyRowsArr);
}