function extractText() {
    let liItems = document.querySelectorAll('#items li');
    let listArr = [];
    for (const curLiItem of liItems) {
        listArr.push(curLiItem.textContent);
    }
    let textAreaElement = document.getElementById('result');
    for (const curEl of listArr) {
        textAreaElement.value += curEl.trim() + "\n";
    }

}