function townPopulation(arr) {
    let townObj = {};
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(" <-> ");
        let [town, population] = tokens;
        population = Number(population);
        if (town in townObj) {
            townObj[town] += population;
        }
        else {
            townObj[town] = population;
        }
    }
    for (const town in townObj) {
        console.log(`${town} : ${townObj[town]}`);
    }
}
townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);