function solve() {
  let generateButtonEl = document.querySelector("button");
  let totalSum = 0;
  generateButtonEl.addEventListener("click", event => {
    let productArrEl = document.querySelector("textarea");
    let productArr = JSON.parse(productArrEl.value);
    let mainProductRl = document.querySelector(".table tbody")
    for (const curProductEl of productArr) {
      let productEl = document.createElement("tr");

      let imgCellEl = document.createElement("td");
      let imgEl = document.createElement("img");
      imgEl.setAttribute("src", curProductEl.img);
      imgCellEl.append(imgEl);

      let nameCellEl = document.createElement("td");
      nameCellEl.textContent = curProductEl.name;

      let priceCellEl = document.createElement("td");
      priceCellEl.textContent = Number(curProductEl.price);
      totalSum += Number(curProductEl.price);
      let decorationFactorCellEl = document.createElement("td");
      decorationFactorCellEl.textContent = curProductEl.decFactor;

      let markCellEl = document.createElement("td");
      let inputEl = document.createElement("input");
      inputEl.setAttribute("type", "checkbox");
      markCellEl.append(inputEl);

      productEl.append(imgCellEl, nameCellEl, priceCellEl, decorationFactorCellEl, markCellEl);
      mainProductRl.append(productEl);
    }
  });
  let buyButtonEl = document.querySelectorAll("button")[1];
  buyButtonEl.addEventListener("click", event => {
    let resultEl = document.querySelectorAll("textarea")[1];
    let elementsEls = document.querySelectorAll(".table tbody tr");
    let elementsArr = [];
    for (const curEl of elementsEls) {
      let checkboxEl = curEl.querySelector("input[type='checkbox']");
      if (checkboxEl.checked) {
        elementsArr.push(curEl)
      }
    }
    elementsArr = elementsArr.map(curEl => ({
      name: curEl.children[1].textContent,
      price: Number(curEl.children[2].textContent),
      decFactor: Number(curEl.children[3].textContent)
    }))
    let namesArr = elementsArr.map(curEl => curEl.name);
    let totalPrice = elementsArr.reduce((acc, value) => {
      acc += value.price;
      return acc;
    }, 0);
    let avgDecFactor = elementsArr.reduce((acc, value, index) => {
      acc += value.decFactor;
      if (index == elementsArr.length - 1) {
        return acc / elementsArr.length;
      }
      return acc;
    }, 0)
    resultEl.value = `Bought furniture: ${namesArr.join(", ")}\n`;
    resultEl.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    resultEl.value += `Average decoration factor: ${avgDecFactor}`;
  });
}