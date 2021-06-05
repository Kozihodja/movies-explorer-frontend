import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import PageNotFound from '../PageNotFound/PageNotFound';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Logon from '../Logon/Logon';

function App() {

  const user = {
    name: 'Виталий',
    email: 'test@ya.ru'
  }

  const [isEditProfilePopupOpen, toggleEditProfilePopup] = React.useState(false);

  function handleEditProfileClick() {
    toggleEditProfilePopup(true);
    console.log(11)
}

  function closeAllPopups() {
		toggleEditProfilePopup(false);
	}

  function  handleUpdateUser(user) {
		console.log(user)
	}

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route path="/movies">
          <Header />
          <Movies />
          <Footer />
        </Route>
        <Route path="/saved-movies">
          <Header />
          <SavedMovies />
          <Footer />
        </Route>
        <Route path="/profile">
          <Header />
          <Profile 
            user={user}
            onEditProfileClick={handleEditProfileClick}
          />
        </Route>
        <Route path="/signin">
          <Logon
            route='signin'
          >
            <label>
              <p className='logon__input-placeholder'>Email</p>
              <input className='logon__input'></input>
            </label>
            <label>
              <p className='logon__input-placeholder'>Пароль</p>
              <input className='logon__input'></input>
            </label>
          </Logon>
        </Route>
        <Route path="/signon">
          <Logon
            route='signon'
            >
              <label>
                <p className='logon__input-placeholder'>Имя</p>
                <input className='logon__input'></input>
              </label>
              <label>
                <p className='logon__input-placeholder'>Email</p>
                <input className='logon__input'></input>
              </label>
              <label>
                <p className='logon__input-placeholder'>Пароль</p>
                <input className='logon__input'></input>
              </label>
            </Logon>
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>

      <PopupWithForm title ='Редактировать профиль' name = 'edit' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} >
			  <input type="text" value={user.name  || ''} name="userName" id="name-input" className="form__input form__input_name form__input_type_focus" required minLength="2" maxLength="40" />
			  <span id="name-input-error" className="form__input-error"></span>
			  <input type="text" value={user.email || ''} name="userJob" id="job-input" className="form__input form__input_job form__input_type_focus" required minLength="2" maxLength="200" />
			  <span id="job-input-error" className="form__input-error"></span>
		  </PopupWithForm>
    </div>
  );
}

export default App;