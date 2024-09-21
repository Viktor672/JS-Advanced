function heroicInventory(arr) {
    let heroArr = [];
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(" / ");
        let heroObj = {};
        let [name, level, items] = tokens;
        let splitedItems = [];
        if (items) {
            splitedItems = items.split(", ");
        }
        if (name && level && splitedItems) {
            level = Number(level);
            heroObj.name = name;
            heroObj.level = level;
            heroObj.items = splitedItems;
            heroArr.push(heroObj);
        }
    }
    console.log(JSON.stringify(heroArr));
}
heroicInventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']);