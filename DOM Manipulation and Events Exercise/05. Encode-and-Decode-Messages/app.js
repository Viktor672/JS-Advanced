function encodeAndDecodeMessages() {
    let messageEl = document.querySelector("#main div textarea");
    let lastReceivedMessageEl = document.querySelector("textarea[disabled]");
    let msgButtonEl = document.querySelector("#main div:nth-of-type(1) button");
    let lastMsgButtonEl = document.querySelector("#main div:nth-of-type(2) button");
    msgButtonEl.addEventListener("click", event => {
        let message = messageEl.value;
        let encodedMessage = "";
        for (const curChar of message) {
            let asciiChar = curChar.charCodeAt();
            asciiChar += 1;
            encodedMessage += String.fromCharCode(asciiChar);
        }
        lastReceivedMessageEl.value = encodedMessage;
        messageEl.value = "";
    });
    lastMsgButtonEl.addEventListener("click", event => {
        let lastReceivedMessage = lastReceivedMessageEl.value;
        let decodedMessage = "";
        for (const curChar of lastReceivedMessage) {
            let asciiChar = curChar.charCodeAt();
            asciiChar -= 1;
            decodedMessage += String.fromCharCode(asciiChar);
        }
        lastReceivedMessageEl.value = decodedMessage;
    });
}