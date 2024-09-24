function solve() {
    let selectTo = document.querySelector("#selectMenuTo");
    let selectMenuToConvertToBinary = document.createElement("option");
    let selectMenuToConvertToHexadecimal = document.createElement("option");
    selectMenuToConvertToBinary.setAttribute("value", "binary");
    selectMenuToConvertToHexadecimal.setAttribute("value", "hexadecimal");
    selectMenuToConvertToBinary.textContent = "Binary";
    selectMenuToConvertToHexadecimal.textContent = "Hexadecimal";
    selectTo.appendChild(selectMenuToConvertToBinary);
    selectTo.appendChild(selectMenuToConvertToHexadecimal);

    document.querySelector("#container button").addEventListener("click", f => {
        let resultEl = document.querySelector("#result");
        let number = Number(document.querySelector("#input").value);
        if (selectTo.value == "binary") {
            resultEl.value = number.toString(2);
        }
        else if (selectTo.value == "hexadecimal") {
            resultEl.value = number.toString(16).toUpperCase();
        }
    });
}
