function playingCards(face, type) {
    let cardFacesAndSuitsArr = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let cardTypeObj = {
        S: "\u2660",
        H: "\u2665",
        D: "\u2666",
        C: "\u2663"
    }
    if (!cardFacesAndSuitsArr.includes(face)) {
        throw new Error("Invalid face");
    }
    if (!cardTypeObj.hasOwnProperty(type)) {
        throw new Error("Invalid type");
    }
    let resultObj = {
        face: face,
        type: type,
        toString: function () {
            return this.face + cardTypeObj[this.type];
        }
    }
    return resultObj;
}
console.log(playingCards('A', 'S').toString());
