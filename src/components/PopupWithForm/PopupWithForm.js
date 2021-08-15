import React from 'react';
import useInput from '../../utils/Validate';
import Preloader from '../Movies/Prelodaer/Preloader';
import PopupSubmit from '../PopupSubmit/PopupSubmit'
function PopupWithForm(props) {  

  const emailVal = useInput('', {isEmpty : true, minLength: 6, maxLength: 40, isEmail: true})
  const nameVal = useInput('', {isEmpty : true, minLength: 2, maxLength: 40 , isName: true,})
    
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [popupSubmitIsOpen, setpopupSubmitIsOpen] =  React.useState(false);

    function handleNameChange(e) {
        setName(e.target.value);
        nameVal.onChange(e);
      }

    function handleEmailChange(e) {
        setEmail(e.target.value);
        emailVal.onChange(e);
      }

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
        setpopupSubmitIsOpen(true);
      }
    function closePopupSubmt() {
      setpopupSubmitIsOpen(false)
    }

    function submitPopupSubmt() {
      setpopupSubmitIsOpen(false)

      props.onUpdateUser({
          name,
          email,
        });
    }

		return (
      <>
      <Preloader 
        isLoad = {props.isLoad}
      />
      <PopupSubmit
        title = "Сохранить внесенные изменения?"
        name = "submitUpdateUserData"
        isOpen = {popupSubmitIsOpen}
        onClose = {closePopupSubmt}
        onSubmit = {submitPopupSubmt}
      />
      <section className={`popup popup-${props.name} ${props.isOpen ? 'popup_is-opened' : ''}`} tabIndex="0">
				<div className="popup__container">
					<button type="button" className="popup__close button-hover" aria-label="Закрыть" onClick={props.onClose}></button>
                    <h3 className="popup__form-title">{props.title}</h3>
					<form className={`form form-${props.name}`} name={`profile-${props.name}-form`} method="post" noValidate onSubmit={handleSubmit}>
						<input 
              type="text" 
              placeholder={props.user.name  || 'Имя'} 
              name="userName" 
              onChange={handleNameChange} 
              id="name-input" 
              className="form__input form__input_name form__input_type_focus" 
              required 
              minLength="2"
              maxLength="40"
              onBlur={e => nameVal.onBlur(e)}
            />
            {(nameVal.isDirty && (nameVal.isEmpty )) && <p className='error__mes'>Поле пустое</p>}
            {(nameVal.isChanged && (nameVal.minLengthErr || nameVal.maxLengthErr || nameVal.nameError)) && <p className='error__mes'>Поле должно содержать только латиницу, кириллицу, пробел или дефис</p>}
			  		<span id="name-input-error" className="form__input-error"></span>
			  		<input 
              type="email" 
              placeholder={props.user.email || 'Email'}
              onChange={handleEmailChange} 
              name="userEmail" id="email-input"
              className="form__input form__input_email form__input_type_focus"
              required
              minLength="6"
              maxLength="40" 
              onBlur={e => emailVal.onBlur(e)}
            />
            {(emailVal.isDirty && (emailVal.isEmpty )) && <p className='error__mes'>Поле пустое</p>}
            {(emailVal.isChanged && (emailVal.minLengthErr || emailVal.maxLengthErr || emailVal.emailError)) && <p className='error__mes'>Не верный формат электронной почты</p>}
			 			<span id="job-input-error" className="form__input-error"></span>
             {(props.user.email === email || props.user.name === name) ? (<p className='error__mes'>Введенные данные не отличаются от первоначальных</p>):('')}
						<button 
              type="submit" 
              className={((nameVal.inputValid && emailVal.inputValid) && !(props.user.email === email || props.user.name === name)) ? "form__submit" : "form__submit form__submit_disabled"}
              aria-label="Сохранить"
              disabled={(!(nameVal.inputValid && emailVal.inputValid)) || (props.user.email === email || props.user.name === name)}
            >
              Сохранить
            </button>
					</form>
				</div>
			</section>
      </>
		);
	
  }
 
  export default PopupWithForm;