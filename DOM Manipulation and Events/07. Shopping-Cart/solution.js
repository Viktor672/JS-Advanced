function solve() {
   let productAddButtonEl = document.querySelectorAll(".product");
   let textAreaEl = document.querySelector("textarea");
   let productCheckoutButtonEl = document.querySelector(".checkout");
   let sum = 0;
   let productArr = [];
   for (const curProduct of productAddButtonEl) {
      curProduct.addEventListener("click", (event) => {
         let productName = event.currentTarget.querySelector(".product-title").textContent;
         let productPrice = Number(event.currentTarget.querySelector(".product-line-price").textContent);
         productArr.push(productName);
         sum += productPrice;
         textAreaEl.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
      })
   }
   productCheckoutButtonEl.addEventListener("click", (event) => {
      let uniqueProductArr = productArr.reduce((acc, value) => {
         if (!(acc.includes(value))) {
            acc.push(value);
         }
         return acc;
      }, []);
      textAreaEl.value += `You bought ${uniqueProductArr.join(", ")} for ${sum.toFixed(2)}.`;
      for (const curProduct of productAddButtonEl) {
         curProduct.querySelector(".product-add .add-product").disabled = true;
      }
      event.currentTarget.disabled = true;
   });
}