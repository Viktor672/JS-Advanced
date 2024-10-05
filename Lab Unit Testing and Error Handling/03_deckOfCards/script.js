function printDeckOfCards(cards) {

    function createCard(face, type) {
        let cardFacesAndSuitsArr = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let cardTypeObj = {
            S: "\u2660",
            H: "\u2665",
            D: "\u2666",
            C: "\u2663"
        }
        if (!cardFacesAndSuitsArr.includes(face) || !cardTypeObj.hasOwnProperty(type)) {
            return 0;
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

    let cardArr = [];
    for (const curCard of cards) {
        let face = curCard.substring(0, curCard.length - 1);
        let type = curCard.substring(curCard.length - 1);
        let card = createCard(face, type);
        if (card) {
            cardArr.push(card);
        }
        else {
            console.log(`Invalid card: ${face}${type}`);
            return;
        }
    }

    console.log(cardArr.join(" "));
}
printDeckOfCards(['5S', '3D', 'QD', '1C']);