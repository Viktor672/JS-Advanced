function previousDay(year, month, day) {
    year = Number(year);
    month = Number(month);
    day = Number(day);
    let date = new Date(year, month - 1, day - 1);
    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
}
previousDay(2016, 9, 30);