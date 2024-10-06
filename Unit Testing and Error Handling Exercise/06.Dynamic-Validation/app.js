function validate() {
    let emailPattern = /\w+@\w+\.\w+\b/gm;
    let emailId = document.getElementById('email');
    emailId.addEventListener('change', event => {
        if (!emailPattern.test(event.currentTarget.value)) {
            event.currentTarget.classList = 'error';
        }
        else{
            event.currentTarget.classList='';
        }
    });
}