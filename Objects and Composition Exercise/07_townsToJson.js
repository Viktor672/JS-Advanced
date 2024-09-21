function townsToJson(arr) {
    let cityArr = [];
    let tokens = arr.shift().split(" | ");
    let [city, latitude, longitude] = tokens;
    city = city.substring(2);
    longitude = longitude.substring(0, longitude.length - 2);
    for (let i = 0; i < arr.length; i++) {
        let cityObj = {};
        let tokens = arr[i].split(" | ");
        let [town, lat, long] = tokens;
        town = town.substring(2);
        long = (long.substring(0, long.length - 2));
        cityObj[city] = town;
        cityObj[latitude] = Number(Number(lat).toFixed(2));
        cityObj[longitude] = Number(Number(long).toFixed(2));
        cityArr.push(cityObj);
    }
    console.log(JSON.stringify(cityArr));
}
townsToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);