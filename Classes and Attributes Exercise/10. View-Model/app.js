class Textbox {
    constructor(selector, pattern) {
        this._invalidSymbols = pattern;
        this._elements = document.querySelectorAll(selector);
        this._value = '';
        let elementsArr = Array.from(this._elements);
        for (const curEl of elementsArr) {
            curEl.addEventListener('input', event => {
                this.value = element.value;
            });
        }
    }

    get elements() {
        return this._elements;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        this._value = newValue;
        let elementsArr = Array.from(this._elements);
        for (const curEl of elementsArr) {
            curEl.value = newValue
        }
    }

    isValid() {
        return !(this._invalidSymbols.test(this._value));
    }
}

let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click', function () { console.log(textbox.value); });
