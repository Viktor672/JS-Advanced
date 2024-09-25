function attachGradientEvents() {
    let gradientEl = document.querySelector("#gradient-box");
    let resultEl = document.querySelector("#result");
    gradientEl.addEventListener("mousemove", (event) => {
        let elMouseWidth = Number(event.offsetX);
        let elMaxWidth = Number(event.target.clientWidth - 1);
        resultEl.textContent = `${Math.floor((elMouseWidth / elMaxWidth) * 100)}%`;
    });
    gradientEl.addEventListener("mouseout", (event) => {
        resultEl.textContent = "";
    });
}