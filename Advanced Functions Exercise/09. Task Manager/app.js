function solve() {
   let formEl = document.querySelector("form");
   formEl.addEventListener("submit", event => {
      event.preventDefault();
      let nameEl = document.querySelector("#task");
      let descriptionEl = document.querySelector("#description");
      let dateEl = document.querySelector("#date");

      if (nameEl.value && descriptionEl.value && dateEl.value) {
         let mainDivEl = document.querySelector(".wrapper section:nth-child(2) > div:nth-child(2)");
         let articleEl = document.createElement("article");
         articleEl.setAttribute("id", "openArticle")
         let h3 = document.createElement("h3");
         let p1 = document.createElement("p");
         let p2 = document.createElement("p");
         h3.textContent = nameEl.value;
         p1.textContent = `Description: ${descriptionEl.value}`;
         p2.textContent = `Due Date: ${dateEl.value}`;

         let divInArticleEl = document.createElement("div");
         let addButtonEl = document.createElement("button");
         let deleteButtonEl = document.createElement("button");
         divInArticleEl.setAttribute("class", "flex");
         addButtonEl.setAttribute("class", "green");
         deleteButtonEl.setAttribute("class", "red");
         addButtonEl.textContent = "Start";
         deleteButtonEl.textContent = "Delete";

         deleteButtonEl.addEventListener("click", event => {
            articleEl.remove();
         })

         addButtonEl.addEventListener("click", event => {
            let curArticleEl = event.currentTarget.closest("article");
            let nextEl = event.currentTarget.closest("section").nextElementSibling.querySelector("div:nth-child(2)");
            let curDivEl = event.currentTarget.closest("div");
            if (event.currentTarget.textContent == "Start") {
               event.currentTarget.setAttribute("class", "orange");
               event.currentTarget.textContent = "Finish";
               event.currentTarget.remove();
               curDivEl.append(event.currentTarget);
            }
            else {
               curDivEl.remove();
            }
            curArticleEl.remove();
            nextEl.append(curArticleEl);
         })
         divInArticleEl.append(addButtonEl, deleteButtonEl);
         articleEl.append(h3, p1, p2, divInArticleEl);
         mainDivEl.append(articleEl);

      }
      event.currentTarget.reset();
   });
}