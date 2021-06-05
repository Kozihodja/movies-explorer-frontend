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

function App() {

  const [user, setUser] = React.useState({ name: 'Виталий', email: 'test@ya.ru' });

  const [isEditProfilePopupOpen, toggleEditProfilePopup] = React.useState(false);

  function handleEditProfileClick() {
    toggleEditProfilePopup(true);
    console.log(11)
}

  function closeAllPopups() {
		toggleEditProfilePopup(false);
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
            loggedIn = 'false'
          />
          <Main />
          <Footer />
        </Route>
        <Route path="/movies">
          <Header 
            loggedIn = 'true'  
          />
          <Movies />
          <Footer />
        </Route>
        <Route path="/saved-movies">
          <Header 
            loggedIn = 'true'
          />
          <SavedMovies />
          <Footer />
        </Route>
        <Route path="/profile">
          <Header 
            loggedIn = 'true'
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