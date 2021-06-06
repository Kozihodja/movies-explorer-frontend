import React from "react";

  
  function AboutProject() {
  
      return (
        <section className='about-project' id='about-project'>
            <h2 className='about-project__title'>О проекте</h2>
            <div className='about-project__descriptionBox'>
                <p className='about-project__subTitle'>Дипломный проект включал 5 этапов</p>
                <p className='about-project__subTitle about-project__sub-title_time'>На выполнение диплома ушло 5 недель</p>
                <p className='about-project__description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                <p className='about-project__description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            <div className='about-project__time'>
                <p className='about-project__timeItem1'>1 неделя</p>
                <p className='about-project__timeItem3'>4 недели</p>
                <p className='about-project__timeItem2'>Back-end</p>
                <p className='about-project__timeItem2'>Front-ent</p>
            </div>
        </section>
      );
    }
    
    export default AboutProject;