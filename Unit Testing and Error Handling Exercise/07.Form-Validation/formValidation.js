function validate() {
    let validTextEl = document.querySelector('#valid');
    let checkboxEl = document.querySelector('#company');
    let fieldsetEl = document.querySelector('#companyInfo');
    let formEl = document.querySelector('#registerForm');

    let patternObj = {
        username: /^[A-Za-z0-9]{3,20}$/,
        email: /^.*@.*\..*$/,
        password: /^\w{5,15}$/,
        "confirm-password": /^\w{5,15}$/,
        companyNumber: /^[1-9][0-9]{3,3}$/
    };

    checkboxEl.addEventListener('change', event => {
        fieldsetEl.style.display = event.currentTarget.checked ? 'block' : 'none';
    });

    formEl.addEventListener('submit', event => {
        event.preventDefault();

        let formElements = event.currentTarget.querySelectorAll('input');
        let isValidated = true;


        for (const curEl of formElements) {
            curEl.style.border = '';
        }

        for (const curEl of formElements) {
            let curElLabel = curEl.id;


            if (curElLabel === 'company' || curElLabel === 'companyNumber') {
                continue;
            }

            if (curElLabel in patternObj && !patternObj[curElLabel].test(curEl.value)) {
                isValidated = false;
                curEl.style.borderColor = 'red';
            }
        }


        let passwordEl = event.currentTarget.querySelector('#password');
        let confirmPasswordEl = event.currentTarget.querySelector('#confirm-password');

        if (passwordEl.value !== confirmPasswordEl.value) {
            isValidated = false;
            passwordEl.style.borderColor = 'red';
            confirmPasswordEl.style.borderColor = 'red';
        }


        if (checkboxEl.checked) {
            let companyNumberEl = event.currentTarget.querySelector('#companyNumber');
            if (!patternObj.companyNumber.test(companyNumberEl.value)) {
                isValidated = false;
                companyNumberEl.style.borderColor = 'red';
            }
        }
        validTextEl.style.display = isValidated ? 'block' : 'none';
    });
}