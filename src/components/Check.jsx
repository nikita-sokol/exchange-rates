import React from 'react';

const Check = ({check, setCheck}) => {

   const handleCheck = (e) => {
      const regexp = (/\D/g);
      if (regexp.test(e.target.value)) {
         return;
      }

      let count = Number(e.target.value);
      if (String(count).length > 6) {
         return;
      }
      setCheck(() => count);
   };

   return (
      <div className="box-check">
         <h3 className="box-check__title title-h3">У меня есть</h3>
         <form className="form-check">
            <label htmlFor="check" className="form-check__label">Укажите сумму в драмах</label>
            <input className="form-check__input" type="text" id="check" value={check} onChange={handleCheck} />
         </form>
      </div>
   );
};

export default Check;
