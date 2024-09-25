function addItem() {
    let textEl=document.querySelector("input[type='text']");
    let ulItem=document.querySelector("#items");
    let newLiItem=document.createElement("li");
    newLiItem.textContent=textEl.value;
    textEl.value="";
    let aTag=document.createElement("a");
    aTag.setAttribute("href","#");
    aTag.textContent="[Delete]";
    aTag.addEventListener("click",(event)=>{
        event.target.parentElement.remove();
    })
    newLiItem.append(aTag);
    ulItem.append(newLiItem);
    textEl.value="";
}