import React, {useEffect, useState} from 'react';

const TabelTr = ({curName, curSign, rate, check}) => {
   const [count, setCount] = useState(check*rate);
   const changeCount = () => {
      const newCount = check * rate;
      const newCountAround = Math.floor(newCount * 100) / 100
      setCount(newCountAround);
   };
   useEffect(()=>{
      changeCount();
   },[check]);

   return (
      <tr className="tabel-rate__tr">
         <td align="left" className="tabel-rate__td">
            <p className="currency" >{curName}</p>
         </td>
         <td align="right" className="tabel-rate__td">
            <p className="exchange" >{rate}&nbsp;֏ за 1&nbsp;$</p>
            <p className="date" >06.07.2022, 10:09 Мск</p>
         </td>
         <td align="right" className="tabel-rate__td">
            <p className="amount" >{count}&nbsp;{curSign}</p>
         </td>
      </tr>
   );
};

export default TabelTr;
