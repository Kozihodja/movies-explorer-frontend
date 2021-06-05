import React from 'react';

function PopupWithForm(props) {  
    
    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
		props.onUpdateUser();
      } 
		return (
            <div className={`popup popup-${props.name} ${props.isOpen ? 'popup_is-opened' : ''}`} tabIndex="0">
				<div className="popup__container">
					<button type="button" className="popup__close button-hover" aria-label="Закрыть" onClick={props.onClose}></button>
                    <h3 className="popup__form-title">{props.title}</h3>
					<form className={`form form-${props.name}`} name={`profile-${props.name}-form`} method="post" noValidate onSubmit={handleSubmit}>
						{props.children}
						<button type="submit" className="form__submit" aria-label="Сохранить">Сохранить</button>
					</form>
				</div>
			</div>
		);
	
  }
 
  export default PopupWithForm;