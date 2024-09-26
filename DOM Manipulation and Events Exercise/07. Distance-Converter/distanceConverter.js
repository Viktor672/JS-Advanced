function attachEventsListeners() {
    let inputEl = document.querySelector('#inputDistance');
    let unitFromEl = document.querySelector('#inputUnits');
    let outputEl = document.querySelector('#outputDistance');
    let unitToEl = document.querySelector('#outputUnits');
    let convertButtonEl = document.querySelector('#convert');

    let convertRatesFromMeterObj = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    }

    convertButtonEl.addEventListener('click', el => {
        let convertFrom = unitFromEl.value;
        let convertTo = unitToEl.value;
        let valueInMeters = inputEl.value * convertRatesFromMeterObj[convertFrom];
        let convertedValue = valueInMeters / convertRatesFromMeterObj[convertTo];
        outputEl.value = convertedValue;
    })
}