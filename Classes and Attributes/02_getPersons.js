function getPersons() {
    class Person {
        firstName;
        lastName;
        age;
        email;
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }
    let arr = [];
    let firstPersonObj = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    let secondPersonObj = new Person('SoftUni');
    let thirdPersonObj = new Person('Stephan', 'Johnson', 25);
    let fourthPersonObj = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');
    arr.push(firstPersonObj,secondPersonObj,thirdPersonObj,fourthPersonObj);
    return arr;
}
console.log(getPersons());
