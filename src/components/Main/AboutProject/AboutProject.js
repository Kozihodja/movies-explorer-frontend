import React from "react";

  
  function AboutProject() {
  
      return (
        <section className='aboutProject' id='aboutProject'>
            <h2 className='aboutProject__title'>О проекте</h2>
            <div className='aboutProject__descriptionBox'>
                <p className='aboutProject__subTitle'>Дипломный проект включал 5 этапов</p>
                <p className='aboutProject__subTitle aboutProject__subTitle_time'>На выполнение диплома ушло 5 недель</p>
                <p className='aboutProject__description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                <p className='aboutProject__description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            <div className='aboutProject__time'>
                <p className='aboutProject__timeItem1'>1 неделя</p>
                <p className='aboutProject__timeItem3'>4 недели</p>
                <p className='aboutProject__timeItem2'>Back-end</p>
                <p className='aboutProject__timeItem2'>Front-ent</p>
            </div>
        </section>
      );
    }
    
    export default AboutProject;