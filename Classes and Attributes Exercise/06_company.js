class Company {
    departments;
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (name == '' || name == undefined || name == null) {
            throw new Error('Invalid input!');
        }
        if (salary == '' || salary == undefined || salary == null || salary < 0) {
            throw new Error('Invalid input!');
        }
        if (position == '' || position == undefined || position == null) {
            throw new Error('Invalid input!');
        }
        if (department == '' || department == undefined || department == null) {
            throw new Error('Invalid input!');
        }

        if (!(department in this.departments)) {
            this.departments[department] = {
                totalSalary: salary,
                workersArr: []
            }
            this.departments[department].workersArr.push({ name, salary, position });
            return `New employee is hired. Name: ${name}. Position: ${position}`;
        }
        else {
            this.departments[department].totalSalary += salary;
            this.departments[department].workersArr.push({ name, salary, position });
            return `New employee is hired. Name: ${name}. Position: ${position}`;
        }
    }

    bestDepartment() {
        let departmentArr = Object.entries(this.departments);
        departmentArr.sort((a, b) => b[1].totalSalary / b[1].workersArr.length - a[1].totalSalary / a[1].workersArr.length);
        let bestDepartment = departmentArr[0][0];
        let averageSalary = departmentArr[0][1].totalSalary / departmentArr[0][1].workersArr.length;
        let resultArr = [];
        let bestWorkersArr = departmentArr[0][1].workersArr;
        bestWorkersArr.sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));
        resultArr.push(`Best Department is: ${bestDepartment}`);
        resultArr.push(`Average salary: ${averageSalary.toFixed(2)}`);
        for (const curWorker of bestWorkersArr) {
            resultArr.push(`${curWorker.name} ${curWorker.salary} ${curWorker.position}`);
        }
        return resultArr.join('\n');
    }
}
let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");

c.addEmployee("Slavi", 500, "dyer", "Construction");

c.addEmployee("Stan", 2000, "architect", "Construction");

c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");

c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");

c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());