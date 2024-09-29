function filterEmployees(data, criteria) {
    let employeeArr = JSON.parse(data);
    if (criteria == 'all') {
        for (let i = 0; i < employeeArr.length; i++) {
            console.log(`${i}. ${employeeArr[i].first_name} ${employeeArr[i].last_name} - ${employeeArr[i].email}`);
        }
        return;
    }
    let criteriaArr = criteria.split("-");
    let value = criteriaArr[1];
    let newArr = [];
    for (const curObj of employeeArr) {
        for (const key in curObj) {
            if (curObj[key] == value) {
                newArr.push(curObj);
            }
        }
    }
    for (let i = 0; i < newArr.length; i++) {
        console.log(`${i}. ${newArr[i].first_name} ${newArr[i].last_name} - ${newArr[i].email}`);
    }
}
filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'all');