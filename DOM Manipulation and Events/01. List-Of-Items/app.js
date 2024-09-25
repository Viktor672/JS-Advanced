function addItem() {
    let inputItem = document.querySelector("#newItemText");
    let ulItem = document.querySelector("#items");
    let liItem = document.createElement("li");
    liItem.textContent = inputItem.value;
    ulItem.append(liItem);
    inputItem.value = "";
}