const fetchGetExchangeRate = async () => {
   const cur = await fetch('https://cdn.cur.su/api/cbr.json')
         .then(response => response.json())
         .catch(error => {
            console.log('error', error);
            return '';
         });
   const date = new Date(cur.localISODate).toLocaleString().slice(0, -3);
   const rates = cur.rates;
   const curUSD = 1/rates.AMD;
   const curEUR = rates.EUR/rates.AMD;
   const curGBP = rates.GBP/rates.AMD;
   const curCHF = rates.CHF/rates.AMD;
   const ratesAMD = {
      date: date,
      rates: [
         {
            curName: 'USD',
            curSign: '$',
            rate: curUSD
         },
         {
            curName: 'EUR',
            curSign: '€',
            rate: curEUR
         },
         {
            curName: 'GBP',
            curSign: '£',
            rate: curGBP
         },
         {
            curName: 'CHF',
            curSign: '₣',
            rate: curCHF
         }
      ]
   }
   return ratesAMD;
}

export default fetchGetExchangeRate; 