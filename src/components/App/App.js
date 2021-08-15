import React, {useEffect} from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import PageNotFound from '../PageNotFound/PageNotFound';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PopupNavigaton from '../PopupNavigation/PopupNavigation';
import api from '../../utils/MoviesApi'
import apiMain from '../../utils/MainApi'
import Preloader from '../Movies/Prelodaer/Preloader';

function App() {

  const history = useHistory();
  const [isLoad, setIsLoad] = React.useState(false);
  const [isSearchErr, setIsSearchErr] = React.useState(false);
  const [movies, setMovies] = React.useState(['']);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isSearchShortMovies, setIsSearchShortMovies] = React.useState(false);
  const [isReqErr, setIsReqErr] = React.useState(false);
  const [errMessage, setErrMassage] = React.useState('Что то пошло не так...');
  const [currentUser, setCurrentUser] = React.useState({ name: '', email: '' });
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isEditProfilePopupOpen, toggleEditProfilePopup] = React.useState(false);
  const [isNavPopupOpen, toggleNavPopup] = React.useState(false);

  function toggleIsShortMovies() {
    if (isSearchShortMovies) {
      setIsSearchShortMovies(false)
    } else {
      setIsSearchShortMovies(true)
    }
  }

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      apiMain.checkToken(localStorage.getItem('jwt'))
            .then((res) => {
                setCurrentUser({
                  ...currentUser,
                  name: res.name,
                  email: res.email
                })
                setLoggedIn(true);
            })
            .catch((err) => {
                setLoggedIn(false);
                localStorage.clear();
                history.push('/');
                console.log(err);
            });
      setMovies(JSON.parse(localStorage.getItem('movies')));
      setSavedMovies(JSON.parse(localStorage.getItem('savedMovies')));
    }
}, []);

useEffect(() => {
  if (loggedIn && (localStorage.getItem('savedMovies') === null)) {
    apiMain.getMovies()
          .then((res) => {
            setSavedMovies(res.movie)
            localStorage.setItem('savedMovies', JSON.stringify(res.movie));
          })
          .catch((err) => {
            console.log(err);
          });
  }
}, [loggedIn, savedMovies]);
  
  function handleSearch() {
    if (localStorage.getItem('allMovies') === null) {
      setIsLoad(true);
      Promise.all([
        api.getInitialCards()
      ])
      .then((response) => {
        localStorage.setItem('allMovies', JSON.stringify(response[0]))
        let filterReq =  JSON.parse(localStorage.getItem('allMovies')).filter(function(movie) {
          return ((movie.nameRU.toLowerCase().includes(localStorage.getItem('userReq').toLowerCase())) && (isSearchShortMovies ? movie.duration < 40 : ' '));
          });
        localStorage.setItem('movies', JSON.stringify(filterReq));
        setMovies(filterReq);
      })
      .finally(() => {
        setIsLoad(false);
      })
      .catch((err) => {
        setIsSearchErr(true);
      });
    } else {
      let filterReq =  JSON.parse(localStorage.getItem('allMovies')).filter(function(movie) {
        return ((movie.nameRU.toLowerCase().includes(localStorage.getItem('userReq').toLowerCase())) && (isSearchShortMovies ? movie.duration < 40 : ' '));
        });
      localStorage.setItem('movies', JSON.stringify(filterReq));
      setMovies(filterReq)
    }
	}

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

    setIsLoad(true);
    Promise.all([
      apiMain.udateUserData(data.name, data.email)
    ])
    .then((res) => {
      setCurrentUser({
        ...currentUser,
        name: res[0].user.name,
        email: res[0].user.email,
      });
    })
    .finally(() => {
      setIsLoad(false);
      // Сбрасываю значения стейтов при успешном запросе
      setIsReqErr(false);
      setErrMassage('Что то пошло не так...')
    })
    .catch((err) => {
      if (err===400) {
        setErrMassage('Проверьте введенные данные')
      }
      setIsReqErr(true);
    });
    closeAllPopups();
	}

  function hendleSignOn(name, email, password) {
    setIsLoad(true);
    Promise.all([
      apiMain.register(name, email, password)
    ])
    .then(() => {
      history.push('/signin');
    })
    .finally(() => {
      setIsLoad(false);
      // Сбрасываю значения стейтов при успешном запросе
      setIsReqErr(false);
      setErrMassage('Что то пошло не так...')
    })
    .catch((err) => {
      if (err===400) {
        setErrMassage('Проверьте введенные данные')
      } else if (err===409) {
        setErrMassage('Пользователь существует')
      }
      setIsReqErr(true);
    });
  }

  function hendleLogin(email, password) {
    setIsLoad(true);
    Promise.all([
      apiMain.login(email, password)
    ])
    .then((res) => {
      setLoggedIn(true);
      localStorage.setItem('jwt', res[0].token)
      history.push('/movies');
    })
    .finally(() => {
      setIsLoad(false);
      // Сбрасываю значения стейтов при успешном запросе
      setIsReqErr(false);
      setErrMassage('Что то пошло не так...')
    })
    .catch((err) => {
      setIsReqErr(true);
      console.log(err);
      if (err===401) {
        setErrMassage('Не верный логин или пароль')
      }
    });
  }

  function handleExit() {
    localStorage.clear();
    setLoggedIn(false);
    history.push('/');
  }

  function handleSaveMovie(movie) {
    setIsLoad(true);
    Promise.all([
      apiMain.saveMovie(movie)
    ])
    .then((res) => {
      apiMain.getMovies()
          .then((res) => {
            setSavedMovies(res.movie)
            localStorage.setItem('savedMovies', JSON.stringify(res.movie));
            setMovies(JSON.parse(localStorage.getItem('movies')))
          })
          .catch((err) => {
            console.log(err);
          });
    })
    .finally(() => {
      setIsLoad(false);
      // Сбрасываю значения стейтов при успешном запросе
      setIsReqErr(false);
      setErrMassage('Что то пошло не так...')
    })
    .catch((err) => {
      setIsReqErr(true);
      console.log(err);
      if (err===401) {
        setErrMassage('Не верный логин или пароль')
      }
    });
  }

  function handleDeleteMovie(movieId) {
    setIsLoad(true);
    Promise.all([
      apiMain.deleteSavedMovie(movieId)
    ])
    .then((res) => {;
      apiMain.getMovies()
          .then((res) => {
            setSavedMovies(res.movie)
            localStorage.setItem('savedMovies', JSON.stringify(res.movie));
            setMovies(JSON.parse(localStorage.getItem('movies')));
          })
          .catch((err) => {
            console.log(err);
          });
    })
    .finally(() => {
      setIsLoad(false);
      // Сбрасываю значения стейтов при успешном запросе
      setIsReqErr(false);
      setErrMassage('Что то пошло не так...')
    })
    .catch((err) => {
      setIsReqErr(true);
      console.log(err);
      if (err===401) {
        setErrMassage('Не верный логин или пароль')
      }
    });
  }
  return (
    <div className="App">
      <Switch>
      <Route exact path="/">
          <Main 
            loggedIn={loggedIn}
            onNavIconClick={handleNavIconClick}
          />
        </Route>
        <ProtectedRoute 
           exact path="/movies"
           loggedIn={loggedIn}
           component={Movies}
           onNavIconClick={handleNavIconClick}
           onSearch={handleSearch}
           isLoad={isLoad}
           isSearchErr={isSearchErr}
           onShortMoviesClick = {toggleIsShortMovies}
           onSaveIconClick={handleSaveMovie}
           onDelIconClick={handleDeleteMovie}
           movies = {movies}
        />
        <ProtectedRoute 
           exact path="/saved-movies"
           loggedIn={loggedIn}
           component={SavedMovies}
           onNavIconClick={handleNavIconClick}
           onDelIconClick={handleDeleteMovie}
           savedMovies={savedMovies}
           
        />
        <ProtectedRoute 
           exact path="/profile"
           loggedIn={loggedIn}
           component={Profile}
           onNavIconClick={handleNavIconClick}
           user={currentUser}
           onEditProfileClick={handleEditProfileClick}
           onExitClick={handleExit}
           isLoad={isLoad}
        />
        <Route path="/signin">
          <Login 
            onSubmitForm = {hendleLogin}
            isLoad={isLoad}
            errMessage={errMessage}
            isReqErr={isReqErr}
          />
        </Route>
        <Route path="/signon">
          <Register 
            onSubmitForm = {hendleSignOn}
            isLoad={isLoad}
            errMessage={errMessage}
            isReqErr={isReqErr}
          />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      
      <PopupNavigaton 
          isOpen={isNavPopupOpen}
          onClose={closeAllPopups}
        />
      <PopupWithForm 
        title ='Редактировать профиль'
        name = 'edit'
        user={currentUser}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
        isLoad={isLoad}
        />
      <Preloader
      >
        isLoad={isLoad}
      </Preloader>
    </div>
  );
}

export default App;