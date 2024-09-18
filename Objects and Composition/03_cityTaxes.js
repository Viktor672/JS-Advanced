function cityTaxes(name, population, treasury) {
    let cityObj = {
        name,
        population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
            this.treasury = Math.floor(this.treasury)
        },
        applyGrowth(percentage) {
            this.population += (percentage / 100) * this.population;
            this.population = Math.floor(this.population)
        },
        applyRecession(percentage) {
            this.treasury -= (percentage / 100) * this.treasury;
            this.treasury = Math.floor(this.treasury)
        }
    }
    return cityObj;
}
const city =
    cityTaxes('Tortuga',
        7000,
        15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
