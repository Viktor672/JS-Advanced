function timeToWalk(stepsInM, footprintInM, speedInKmH) {
    stepsInM = Number(stepsInM);
    footprintInM = Number(footprintInM);
    let distanceInM = stepsInM * footprintInM;
    speedInKmH = Number(speedInKmH);
    let speedInMS = speedInKmH / 3.6;
    let restInM = Math.floor(distanceInM / 500);
    let timeInS = distanceInM / speedInMS;
    let timeInM = timeInS / 60;
    let finalTimeInM = timeInM + restInM;
    let hour = Math.floor(finalTimeInM / 60);
    let minute = Math.floor(finalTimeInM);
    let pattern = /\.[0-9]+/gm;
    let match = pattern.exec(finalTimeInM);
    let remainingPart = match[0];
    remainingPart = remainingPart.substring(1);
    remainingPart = 0 + "." + remainingPart;
    let seconds = 60 * Number(remainingPart);
    seconds = Number(seconds);
    if(String(hour)<=9){
        hour=`0${hour}`
    }
    if(String(minute)<=9){
        minute=`0${minute}`
    }
    if(String(seconds)<=9){
        seconds=`0${seconds}`;
    }
    console.log(`${hour}:${minute}:${seconds.toFixed(0)}`);
}
timeToWalk(2564, 0.70, 5.5);