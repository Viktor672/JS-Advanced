function attachEventsListeners() {
    let inputDaysEl = document.querySelector("#days");
    let inputHoursEl = document.querySelector("#hours");
    let inputMinutesEl = document.querySelector("#minutes");
    let inputSecondsEl = document.querySelector("#seconds");
    let buttonEl = document.querySelectorAll("input[type='button']");

    function updateElements(seconds) {
        inputDaysEl.value = Number(seconds / timeUnitObj.days).toFixed(2);
        inputHoursEl.value = Number(seconds / timeUnitObj.hours).toFixed(2);
        inputMinutesEl.value = Number(seconds / timeUnitObj.minutes).toFixed(2);
        inputSecondsEl.value = Number(seconds / timeUnitObj.seconds).toFixed(2);
    }

    let timeUnitObj = {
        days: 86400,
        hours: 3600,
        minutes: 60,
        seconds: 1
    }

    for (const curButton of buttonEl) {
        curButton.addEventListener("click", event => {
            let getElementId = event.target.getAttribute("id").split("Btn")[0];
            let curInputEl = document.querySelector("#" + getElementId);
            let convertor = Number(curInputEl.value) * timeUnitObj[getElementId];
            updateElements(convertor);
        });
    }
}