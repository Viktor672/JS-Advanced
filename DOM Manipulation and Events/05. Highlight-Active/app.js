function focused() {
    let divEl = document.querySelectorAll("body div input");
    for (const curDivEl of divEl) {
        curDivEl.addEventListener("focus", (event) => {
            event.currentTarget.parentElement.classList.add("focused");
        });
        curDivEl.addEventListener("blur", (event) => {
            event.currentTarget.parentElement.classList.remove("focused");
        });
    }
}