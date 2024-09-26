function create(words) {
   let divEl = document.querySelector("#content");
   for (const curWord of words) {
      let curDivEl = document.createElement("div");
      let curPEl = document.createElement("p");
      curPEl.textContent = curWord;
      curPEl.style.display = "none";
      curDivEl.appendChild(curPEl);
      curDivEl.addEventListener("click", event => {
         curPEl.style.display = "block";
      })
      divEl.append(curDivEl);
   }
}