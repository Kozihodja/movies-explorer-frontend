import React from "react";
import promoImg from '../../../images/landing.svg';
import NavTab from '../NavTab/NavTab'

  
  function Promo() {
  
      return (
        <div className='promo'>
            <div className='promo__description'>
                <div className='promo__text'>
                    <h1 className='promo__title'>Учебный проект студента факультета Веб&#8209;разработки.</h1>
                    <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                    <NavTab />
                </div>
                <img src={promoImg} className="promo__img" alt="Промо изображение" />
            </div>
        </div>
      );
    }
    
    export default Promo;