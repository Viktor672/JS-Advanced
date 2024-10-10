function tickets(arr, string) {
    class Tickets {
        destination;
        price;
        status;
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

let ticketArr = [];

    for (const curEl of arr) {
        let tokens = curEl.split('|');
        let [destination, price, status] = tokens;
        price = Number(price);
        let ticketObj = new Tickets(destination, price, status);
        ticketArr.push(ticketObj);
    }

    if (string != 'price') {
        ticketArr.sort((a, b) => a[string].localeCompare(b[string]));
    }
    else {
        ticketArr.sort((a, b) => a[string] - b[string]);
    }

    return ticketArr;

}

console.log(tickets(['Philadelphia|94.20|available',
    'Boston|126.20|departed',
    'New York City|95.99|sold',
    'New York City|95.99|available'],
    'price'));