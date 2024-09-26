function addItem() {
    let menuEl = document.querySelector("#menu");
    let inputTextEl = document.querySelector("#newItemText");
    let inputValueEl = document.querySelector("#newItemValue");
    let optionEl = document.createElement("option");
    optionEl.textContent = inputTextEl.value;
    optionEl.setAttribute("value", inputValueEl.value);
    menuEl.append(optionEl);
    inputTextEl.value = "";
    inputValueEl.value = "";
    inputTextEl.focus();
}