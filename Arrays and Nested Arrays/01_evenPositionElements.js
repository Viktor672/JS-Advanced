function evenPositionElements(arr) {
    let evenNumsArr = [];
    for (let i = 0; i < arr.length; i += 2) {
        evenNumsArr.push(arr[i]);
    }
    console.log(evenNumsArr.join(" "));
}
evenPositionElements(['20', '30', '40', '50', '60']);