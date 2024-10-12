function createPerson(firstName, lastName) {
    let personObj = {
        firstName: firstName,
        lastName: lastName,
    }
    
    Object.defineProperty(personObj, 'fullName', {
        get() {
            return this.firstName + ' ' + this.lastName;
        },

        set(value) {
            let pattern = /^(?<firstName>\w+) (?<lastName>\w+)$/;
            let match = value.match(pattern);

            if (match) {
                this.firstName = match.groups.firstName;
                this.lastName = match.groups.lastName;
            }
        }
    })
    return personObj;
}

let person = createPerson("Peter", "Ivanov");

console.log(person.fullName);

// Peter Ivanov

person.firstName = "George";

console.log(person.fullName);

// George Ivanov

person.lastName = "Peterson";

console.log(person.fullName);

//George Peterson

person.fullName = "Nikola Tesla";

console.log(person.firstName)

//Nikola

console.log(person.lastName)

// Tesla