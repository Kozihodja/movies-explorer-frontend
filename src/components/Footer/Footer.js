import React from "react";
  
  function Footer() {
  
      return (
        <section className='footer'>
            <p className='footer__description'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__navBar'>
                <p className='footer__year'>&#169; 2020</p>
                <ul className='footer__links'>
                    <li><a href='https://praktikum.yandex.ru/profile/web/' className='footer__link' target='blank'>Яндекс.Практикум</a></li>
                    <li><a href='https://github.com/Kozihodja/' className='footer__link' target='blank'>GitHub</a></li>
                    <li><a href='https://www.facebook.com/' className='footer__link' target='blank'>Facebook</a></li>
                </ul>
            </div>
        </section>
      );
    }
    
    export default Footer;