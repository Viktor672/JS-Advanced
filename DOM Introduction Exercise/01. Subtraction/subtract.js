function subtract() {
    let [firstNumEl, secondNumEl] = document.querySelectorAll("#wrapper input[type='text']");
    let result = document.querySelector("#result");
    result.textContent = Number(firstNumEl.value) - Number(secondNumEl.value);
}