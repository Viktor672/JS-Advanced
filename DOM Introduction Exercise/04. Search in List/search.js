function search() {
   let towns = document.querySelectorAll("#towns li");
   let searchText = document.getElementById("searchText").value.toLowerCase();
   let result = document.getElementById("result");
   let townsArr = Array.from(towns);
   let searchedTownsArr = [];
   let count = 0;
   if (searchText == "") {
      return;
   }
   for (const curTown of towns) {
      curTown.style.fontWeight = "normal";
      curTown.style.textDecoration = "none";
   }
   for (const curEl of townsArr) {
      if (curEl.textContent.toLowerCase().includes(searchText)) {
         searchedTownsArr.push(curEl); 
         count++;
      }  
   }
   for (const curEl of searchedTownsArr) {
      curEl.style.fontWeight = "bold";
      curEl.style.textDecoration = "underline";
   }
   result.textContent = `${count} matches found`;
}
