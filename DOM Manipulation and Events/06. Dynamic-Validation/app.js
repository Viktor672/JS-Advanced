function validate() {
    let textEl = document.querySelector("#email");
    let pattern = /[a-z]+@{1}[a-z]+\.{1}[a-z]+/gm;
    textEl.addEventListener("change", (event) => {
        if (!(pattern.test(event.currentTarget.value))) {
            event.currentTarget.classList.add("error");
        }
        else {
            event.currentTarget.classList.remove("error")
        }
    });
}