import React from 'react';

const Rate = ({check, setCheck}) => {

   return (
      <div className="box-rate">
         <h3 className="box-rate__title title-h3">Я получу</h3>
         <table className="tabel">
            <thead>
               <tr>
                  <th align="left" className="tabel__th">Валюта</th>
                  <th align="right" className="tabel__th">Курс и дата обновления</th>
                  <th align="right" className="tabel__th">Итого</th>
               </tr>
            </thead>
            <tbody>
               <tr className="tabel__tr">
                  <td align="left" className="tabel__td">
                     <p className="currency" >USD</p>
                  </td>
                  <td align="right" className="tabel__td">
                     <p className="exchange" >64,00&nbsp;₽ за 1&nbsp;$</p>
                     <p className="date" >06.07.2022, 10:09 Мск</p>
                  </td>
                  <td align="right" className="tabel__td">
                     <p className="amount" >156,25&nbsp;$</p>
                  </td>
               </tr>
               <tr className="tabel__tr">
                  <td align="left" className="tabel__td">
                     <p className="currency" >USD</p>
                  </td>
                  <td align="right" className="tabel__td">
                     <p className="exchange" >64,00&nbsp;₽ за 1&nbsp;$</p>
                     <p className="date" >06.07.2022, 10:09 Мск</p>
                  </td>
                  <td align="right" className="tabel__td">
                     <p className="amount" >156,25&nbsp;$</p>
                  </td>
               </tr>
               <tr className="tabel__tr">
                  <td align="left" className="tabel__td">
                     <p className="currency" >USD</p>
                  </td>
                  <td align="right" className="tabel__td">
                     <p className="exchange" >64,00&nbsp;₽ за 1&nbsp;$</p>
                     <p className="date" >06.07.2022, 10:09 Мск</p>
                  </td>
                  <td align="right" className="tabel__td">
                     <p className="amount" >156,25&nbsp;$</p>
                  </td>
               </tr>
            </tbody></table>
      </div>
   );
};

export default Rate;
