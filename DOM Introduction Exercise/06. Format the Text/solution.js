function solve() {
  let inputEl = document.getElementById("input");
  let outputEl = document.getElementById("output");
  if (inputEl.value == "") return;
  let maxSentences = 3;
  let splitetInput = inputEl.value.split(". ");
  let numOfParagraphs = Math.ceil(splitetInput.length / maxSentences);
  let outputStr = "";
  for (let i = 0; i < numOfParagraphs; i++) {
    let paragraphs = i * maxSentences;
    let content = splitetInput.slice(paragraphs, (paragraphs + maxSentences)).join(". ");
    outputStr += `<p>${content}</p>`;
  }
  outputEl.innerHTML = outputStr;
}   