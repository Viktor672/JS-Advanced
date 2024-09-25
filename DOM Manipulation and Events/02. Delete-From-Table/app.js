function deleteByEmail() {
    let trElements = document.querySelectorAll("tbody tr");
    let inputEl = document.querySelector("input[type='text']");
    let resultEl = document.querySelector("#result");
    let isFound = false;
    for (const curEl of trElements) {
        if (curEl.children[1].textContent == inputEl.value) {
            isFound = true;
            curEl.remove();
            resultEl.textContent = "Deleted.";
            inputEl.value = "";
        }
    }
    if (!isFound) {
        resultEl.textContent = "Not found.";
        inputEl.value = "";
    }
}
