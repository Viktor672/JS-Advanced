function notify(message) {
  let resultEl = document.querySelector("#notification");
  resultEl.textContent = message;
  resultEl.style.display = 'block';
  resultEl.addEventListener('click', event => {
    event.currentTarget.style.display = 'none';
  })
}