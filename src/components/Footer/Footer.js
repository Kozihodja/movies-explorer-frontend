import React from "react";
  
  function Footer() {
  
      return (
        <section className='footer'>
            <p className='footer__description'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__navBar'>
                <p className='footer__year'>&#169; 2020</p>
                <ul className='footer__links'>
                    <li><a href='#/' className='footer__link'>Яндекс.Практикум</a></li>
                    <li><a href='#/' className='footer__link'>GitHub</a></li>
                    <li><a href='#/' className='footer__link'>Facebook</a></li>
                </ul>
            </div>
        </section>
      );
    }
    
    export default Footer;