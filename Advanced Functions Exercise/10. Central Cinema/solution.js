function solve() {
    let movieEls = document.querySelector('#movies ul');
    let archiveEl = document.querySelector('#archive ul');

    archiveEl.nextElementSibling.addEventListener('click', () => {
        archiveEl.innerHTML = '';
    });

    document.querySelector('button').addEventListener('click', event => {
        event.preventDefault();
        let [nameEl, hallEl, priceEl] = document.querySelectorAll('#container input');

        if (nameEl.value && hallEl.value && (Number(priceEl.value) || priceEl.value === '0')) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${nameEl.value}</span>
                <strong>Hall: ${hallEl.value}</strong>
                <div>
                    <strong>${priceEl.value}</strong>
                    <input placeholder="Tickets Sold">
                    <button class="archive-button">Archive</button>
                </div>
            `;
            movieEls.appendChild(listItem);

            nameEl.value = '';
            hallEl.value = '';
            priceEl.value = '';

            listItem.querySelector('.archive-button').addEventListener('click', (event) => {
                let ticketPriceEl = event.currentTarget.parentNode.children[0];
                let ticketsSoldEl = event.currentTarget.parentNode.children[1];

                if (Number(ticketsSoldEl.value) || ticketsSoldEl.value === '0') {
                    const archiveItem = document.createElement('li');
                    archiveItem.innerHTML = `
                        <span>${event.currentTarget.parentNode.parentNode.children[0].textContent}</span>
                        <strong>Total amount: ${(ticketPriceEl.textContent * ticketsSoldEl.value).toFixed(2)}</strong>
                        <button class="delete-button">Delete</button>
                    `;
                    archiveEl.appendChild(archiveItem);
                }
                event.currentTarget.parentNode.parentNode.remove();
            });
        }
    });

    archiveEl.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-button')) {
            event.target.parentNode.remove();
        }
    });
}