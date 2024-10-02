function getArticleGenerator(articles) {
    let divEl = document.querySelector("#content");
    function showNext() {
        let curText = articles.shift();
        if (curText) {
            let articleEl = document.createElement("article");
            articleEl.textContent = curText;
            divEl.append(articleEl);
        }
    }
    return showNext;
}
