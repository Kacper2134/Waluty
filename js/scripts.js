'use strict';

const baseURL = 'http://api.nbp.pl/api/exchangerates/tables/'

const getCurrency = async (table) => {

        try {
            const responce = await fetch(`${baseURL}${table}`)
            const data = await responce.json();
            return data;
        } catch(err) {
            console.log(`To jest błąd: ${err}`);
        }
}

getCurrency("a").then((data) => {

    console.log('data');

    const [currencies] = data;

    const {rates} = currencies;

    rates.forEach((elem, i) => {
        const tr = document.createElement('tr');
        tr.innerHTML = 
        `<td>${++i}</td>
         <td>${elem.currency}</td>
         <td>${elem.mid}</td>
        `
        document.querySelector('table tbody').appendChild(tr);
    });
});


const btn = document.querySelector('button');
