function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let workers = JSON.parse(document.querySelector("#inputs textarea").value);
      let bestRestaurantEl = document.querySelector("#outputs p");
      let workersEl = document.querySelector("#workers p");
      let restaurantObj = {};
      for (const curEl of workers) {
         let [restaurantName, restaurantWorkers] = curEl.split(" - ");
         if (!(restaurantName in restaurantObj)) {
            restaurantObj[restaurantName] = { totalSalary: 0, highestSalary: 0, workersArr: [] };
         }
         let tokens = restaurantWorkers.split(", ");
         for (const curtokensEl of tokens) {
            let [name, salary] = curtokensEl.split(" ");
            salary = Number(salary);
            restaurantObj[restaurantName].totalSalary += salary;
            restaurantObj[restaurantName].workersArr.push({ name: name, salary: salary });
            if (restaurantObj[restaurantName].highestSalary < salary) {
               restaurantObj[restaurantName].highestSalary = salary;
            }
         }
      }
      let tuples = Object.entries(restaurantObj);
      let sortedWorkersArr = tuples.map(([restaurantName, obj]) => (
         {
            name: restaurantName,
            highestSalary: obj.highestSalary,
            avgSalary: obj.totalSalary / obj.workersArr.length,
            workersArr: obj.workersArr
         }))
      sortedWorkersArr.sort((a, b) => b.avgSalary - a.avgSalary);
      let bestRestaurant = sortedWorkersArr[0];
      let sortedWorkers = bestRestaurant.workersArr.sort((a, b) => b.salary - a.salary);
      bestRestaurantEl.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} Best Salary: ${bestRestaurant.highestSalary.toFixed(2)}`;
      let workersResultArr = [];
      for (const curWorker of sortedWorkers) {
         workersResultArr.push(`Name: ${curWorker.name} With Salary: ${curWorker.salary}`);
      }
      workersEl.textContent = workersResultArr.join(" ");
   }
}