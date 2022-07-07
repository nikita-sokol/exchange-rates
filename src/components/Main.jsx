import React, { useEffect, useState } from 'react';
import Check from './Check';
import Rate from './Rate/Rate';
import fetchGetExchangeRate from '../API/getExchangeRate.js';
import Loader from './ui/Loader';

const Main = () => {
   const [check, setCheck] = useState('100');
   const [ratesAMD, setRatesAMD] = useState(null);

   const getExchangeRate = async () => {
      const newRatesAMD = await fetchGetExchangeRate();
      setRatesAMD(newRatesAMD);
   };

   useEffect(() => {
      const getExchangeRateInterval = setInterval(getExchangeRate,1000*60*60);
      getExchangeRate();
      return () => {
         clearInterval(getExchangeRateInterval);
      }
   },[]);

   return (
      <div className='main'>
         <h1 className="title-h1">Курсы валют</h1>
         {ratesAMD ?
            <div className="cur-conver">
               <div className="cc-box">
                  <Check check={check} setCheck={setCheck} />
               </div>

               <div className="cc-box">
                  <Rate check={check} ratesAMD={ratesAMD}/>
               </div>
            </div>
            : <Loader />}
      </div>
   );
};

export default Main;
