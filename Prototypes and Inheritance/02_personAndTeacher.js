function personAndTeacher() {
    class Person {
        name;
        email
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person {
        subject;
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }
    return {
        Person,
        Teacher
    }
}
personAndTeacher();


