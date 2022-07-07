import React, { useState } from 'react';
import Check from './Check';
import Rate from './Rate/Rate';

const Main = () => {

   const [check, setCheck] = useState('100');

   return (
      <div className='main'>
         <h1 className="title-h1">Курсы валют</h1>

         <div className="cur-conver">
            <div className="cc-box">
               <Check check={check} setCheck={setCheck}/>
            </div>

            <div className="cc-box">
               <Rate check={check}/>
            </div>
         </div>
      </div>
   );
};

export default Main;
