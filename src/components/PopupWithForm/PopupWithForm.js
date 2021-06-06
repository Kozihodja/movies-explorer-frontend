import React from 'react';

function PopupWithForm(props) {  
    
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    function handleNameChange(e) {
        setName(e.target.value);
      }

    function handleEmailChange(e) {
        setEmail(e.target.value);
      }

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
      
        // Передаём значения управляемых компонентов во внешний обработчик
        props.onUpdateUser({
          name,
          email,
        });
      } 
		return (
            <div className={`popup popup-${props.name} ${props.isOpen ? 'popup_is-opened' : ''}`} tabIndex="0">
				<div className="popup__container">
					<button type="button" className="popup__close button-hover" aria-label="Закрыть" onClick={props.onClose}></button>
                    <h3 className="popup__form-title">{props.title}</h3>
					<form className={`form form-${props.name}`} name={`profile-${props.name}-form`} method="post" noValidate onSubmit={handleSubmit}>
						<input type="text" placeholder={props.user.name  || 'Имя'} name="userName" onChange={handleNameChange} id="name-input" className="form__input form__input_name form__input_type_focus" required minLength="2" maxLength="40" />
			  			<span id="name-input-error" className="form__input-error"></span>
			  			<input type="text" placeholder={props.user.email || 'Email'} onChange={handleEmailChange}  name="userEmail" id="email-input" className="form__input form__input_email form__input_type_focus" required minLength="2" maxLength="200" />
			 			 <span id="job-input-error" className="form__input-error"></span>
						<button type="submit" className="form__submit" aria-label="Сохранить">Сохранить</button>
					</form>
				</div>
			</div>
		);
	
  }
 
  export default PopupWithForm;