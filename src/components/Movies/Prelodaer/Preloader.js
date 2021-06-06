import React from 'react'

function Preloader(props) {

    return (
        <div className={`preloader ${props.isLoad ? `preloader_open` : ''}`}>
          <div className="preloader__circle"> 
          </div>
        </div>
    )
};

export default Preloader
