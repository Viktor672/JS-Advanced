function createAssemblyLine() {
    return {
        hasClima(obj) {
            obj.temp = 21;
            obj.tempSettings = 21;
            obj.adjustTemp = function () {
                if (obj.temp < obj.tempSettings) {
                    obj.temp += 1;
                }
                else if (obj.temp > obj.tempSettings) {
                    obj.temp -= 1;
                }
            }
            return obj;
        },
        hasAudio(obj) {
            obj.currentTrack = null;
            obj.nowPlaying = function () {
                console.log(`Now playing ${obj.currentTrack.name} by ${obj.currentTrack.artist}`);
            }
            return obj;
        },
        hasParktronic(obj) {
            obj.checkDistance = function (distance) {
                distance = Number(distance);
                if (obj.distance < 0.1) {
                    console.log("Beep! Beep! Beep!");
                }
                else if (obj.distance >= 0.1 && obj.distance < 0.25) {
                    console.log("Beep! Beep!");
                }
                else if (obj.distance >= 0.25 && obj.distance < 0.5) {
                    console.log("Beep!");
                }
                else {
                    console.log("");
                }
            }
            return obj;
        }
    }
}
const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();
