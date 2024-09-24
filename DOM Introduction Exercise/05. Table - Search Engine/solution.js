function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchField = document.querySelector("#searchField");
      let studentList = document.querySelectorAll(".container tbody tr");
      let studentListArr = Array.from(studentList);
      let selectedStudentArr = [];
      if (searchField == "") {
         return;
      }
      for (const curStudent of studentList) {
         curStudent.classList.remove("select");
      }
      for (const curStudent of studentListArr) {
         if (curStudent.textContent.includes(searchField.value)) {
            selectedStudentArr.push(curStudent); //possible error
         }
      }
      selectedStudentArr.map(x => x.classList.add("select"));
   }
}