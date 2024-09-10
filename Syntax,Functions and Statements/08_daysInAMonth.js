function daysInAMonth(par1, par2) {
    par1 = Number(par1);
    par2 = Number(par2);
    let date = new Date(par2, par1 - 1);
    let month = date.getMonth();
    let result = 0;
    switch (month) {
        case 0: result = 31; break;
        case 1: if ((date.getFullYear() % 4 == 0 && date.getFullYear() % 100 != 0) || date.getFullYear() % 400 == 0) {
            result = 29;
        }
        else {
            result = 28;
        }
            break;
        case 2: result = 31; break;
        case 3: result = 30; break;
        case 4: result = 31; break;
        case 5: result = 30; break;
        case 6: result = 31; break;
        case 7: result = 31; break;
        case 8: result = 30; break;
        case 9: result = 31; break;
        case 10: result = 30; break;
        case 11: result = 31; break;
    }
    console.log(result);
}
daysInAMonth(1, 2012);