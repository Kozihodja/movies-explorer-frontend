import React from 'react';

function PopupWithForm(props) {   

		return (
        <>
            <section className={`popup popup-${props.name} ${props.isOpen ? 'submitPopup_is-opened' : ''}`} tabIndex="0">
				<div className="popup__container">
					<button type="button" className="popup__close button-hover" aria-label="Закрыть" onClick={props.onClose}></button>
                    <h3 className="popup__form-title">{props.title}</h3>
					<button type="submit" className='form__submit' aria-label="Сохранить" onClick={props.onSubmit}>Сохранить</button>
                    <button type="submit" className='form__submit submitPopup__btn_cancel' aria-label="Сохранить" onClick={props.onClose}>Отменить</button>
				</div>
			</section>
        </>
		);
	
  }
 
  export default PopupWithForm;