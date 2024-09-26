function lockedProfile() {
    let divEl = document.querySelectorAll(".profile");
    let buttonEl = document.querySelectorAll("button");
    let inputLockEl = document.querySelectorAll("input[type='radio']");
    for (const curButton of buttonEl) {
        let hiddenInfoEl = curButton.parentElement.querySelector(".profile div");
        let lockRadio = curButton.parentElement.querySelector("input[type='radio']");
        curButton.addEventListener("click", event => {
            if (!(lockRadio.checked)) {
                if (event.currentTarget.textContent == "Hide it") {
                    hiddenInfoEl.style.display = "none";
                    event.currentTarget.textContent = "Show more";
                }
                else {
                    hiddenInfoEl.style.display = "block";
                    event.currentTarget.textContent = "Hide it";
                }
            }
        });
    }
}