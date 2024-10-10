class Contact {
    firstName;
    lastName;
    phoneNumber;
    email;
    constructor(firstName, lastName, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this._online = false;
    }

    render(id) {
        let targetParentEl = document.querySelector('#' + id);
        let articleEl = document.createElement('article');

        let divTitleEl = document.createElement('div');
        divTitleEl.classList.add('title');
        divTitleEl.textContent = `${this.firstName} ${this.lastName}`;

        if (this._online) {
            divTitleEl.classList.add('online');
        }

        let buttonEl = document.createElement('button');
        buttonEl.innerHTML = '&#8505;';
        buttonEl.addEventListener('click', event => {
            let nextElStyling = event.target.parentElement.nextSibling.style;

            if (nextElStyling.display == 'none') {
                nextElStyling.display = 'block';
            }
            else {
                nextElStyling.display = 'none';
            }
        });

        divTitleEl.append(buttonEl);

        let divInfoEl = document.createElement('div');
        divInfoEl.classList.add('info');

        let spanPhoneNumberEl = document.createElement('span');
        spanPhoneNumberEl.innerHTML = `&phone; ${this.phoneNumber}`;
        divInfoEl.append(spanPhoneNumberEl);

        let spanEmailEl = document.createElement('span');
        spanEmailEl.innerHTML = `&#9993; ${this.email}`;
        divInfoEl.append(spanEmailEl);
        divInfoEl.style.display = 'none';

        articleEl.append(divTitleEl);
        articleEl.append(divInfoEl);
        targetParentEl.append(articleEl);
    }

    get online() {
        return this._online;
    }

    set online(state) {
        this._online = state;

        if (document.querySelectorAll("article > div.title").length != 0) {
            if (this._online) {
                Array.from(document.querySelectorAll("article > div.title"))
                    .filter((curEl) => curEl.innerText.includes(this.firstName))[0]
                    .classList.add("online");
            }
            else {
                Array.from(document.querySelectorAll("article > div.title"))
                    .filter((curEl) => curEl.innerText.includes(this.firstName))[0]
                    .classList.remove("online");
            }
        }
    }
}


let contacts = [

    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),

    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),

    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")

];

contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true

setTimeout(() => contacts[1].online = true, 2000);



