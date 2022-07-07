import React, { useState } from 'react';
import TabelTr from './TabelTr';

const Rate = ({check}) => {

   const [currencies, setCurrencies] = useState([
      {
         curName: 'USD',
         curSign: '$',
         rate: 0.1
      },
      {
         curName: 'EUR',
         curSign: '€',
         rate: 0.2
      },
      {
         curName: 'GBP',
         curSign: '£',
         rate: 0.3
      },
      {
         curName: 'CHF',
         curSign: '₣',
         rate: 0.4
      }
   ]);

   return (
      <div className="box-rate">
         <h3 className="box-rate__title title-h3">Я получу</h3>
         <table className="tabel-rate">
            <thead>
               <tr>
                  <th align="left" className="tabel-rate__th">Валюта</th>
                  <th align="right" className="tabel-rate__th">Курс и дата обновления</th>
                  <th align="right" className="tabel-rate__th">Итого</th>
               </tr>
            </thead>
            <tbody>
               {
                  currencies.map(item=>{
                     return <TabelTr key={item.curName} curName={item.curName} curSign={item.curSign} rate={item.rate} check={check}/>
                  })
               }
            </tbody>
         </table>
      </div>
   );
};

export default Rate;
