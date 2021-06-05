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
import Login from '../Login/Login';
import Register from '../Register/Register';
import PopupNav from '../Header/PopupNav/PopupNav';

function App() {

  const [user, setUser] = React.useState({ name: 'Виталий', email: 'test@ya.ru' });

  const [isEditProfilePopupOpen, toggleEditProfilePopup] = React.useState(false);
  const [isNavPopupOpen, toggleNavPopup] = React.useState(false);

  function handleNavIconClick() {
    toggleNavPopup(true);
  }

  function handleEditProfileClick() {
    toggleEditProfilePopup(true);
  }

  function closeAllPopups() {
		toggleEditProfilePopup(false);
    toggleNavPopup(false);
	}

  function  handleUpdateUser(data) {
		setUser({
      ...user,
      name: data.name,
      email: data.email,
    });
    closeAllPopups();
	}

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header 
            loggedIn = 'true'
          />
          <Main />
          <Footer />
        </Route>
        <Route path="/movies">
          <Header 
            loggedIn = 'true' 
            onNavIconClick={handleNavIconClick} 
          />
          <Movies />
          <Footer />
        </Route>
        <Route path="/saved-movies">
          <Header 
            loggedIn = 'true'
            onNavIconClick={handleNavIconClick}
          />
          <SavedMovies />
          <Footer />
        </Route>
        <Route path="/profile">
          <Header 
            loggedIn = 'true'
            onNavIconClick={handleNavIconClick}
          />
          <Profile 
            user={user}
            onEditProfileClick={handleEditProfileClick}
          />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signon">
          <Register />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      
      <PopupNav 
          isOpen={isNavPopupOpen}
          onClose={closeAllPopups}
        />
      <PopupWithForm 
        title ='Редактировать профиль'
        name = 'edit'
        user={user}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
        />
    </div>
  );
}

export default App;