export class Api {
    constructor( {baseUrl, headers} ) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }

    _requestGet(url) {
        this._data = fetch(url, {
            mathod: "GET",
            headers: this._headers
            })
            .then(res => {
                if (res.ok) {
                    return res;
                  }
                return Promise.reject(`${res.status}. Не удалось сделать GET запрос по адресу ${url}`);
            })
        return this._data;
    }

    register(name, email, password){
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({ 'name': name, 'email': email, 'password': password }),
        }).then(res => {
            if (res.ok) {
                return res.json();
              }
            return Promise.reject(res.status);
        })
    }

    login(email, password){
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({ 'email': email, 'password': password }),
        }).then(res => {
            if (res.ok) {
                return res.json();
              }
            return Promise.reject(res.status);
        })
    }

    checkToken(jwt){
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                'authorization':`Bearer ${jwt}`,
            },
        }).then(res => {
            if (res.ok) {
                return res.json();
              }
            return Promise.reject(res.status);
        })
    }

    udateUserData(name, email){
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                'authorization':`Bearer ${localStorage.getItem('jwt')}`,
            },
            body: JSON.stringify({ name, email }),
        }).then(res => {
            if (res.ok) {
                return res.json();
              }
            return Promise.reject(res.status);
        })
    }

    saveMovie(movie){
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'authorization':`Bearer ${localStorage.getItem('jwt')}`,
            },
            body: JSON.stringify({
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: `https://api.nomoreparties.co${movie.image.url}`,
                trailer: movie.trailerLink,
                movieId: movie.id,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN,
                thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
            }),
        }).then(res => {
            if (res.ok) {
                return res.json();
              }
            return Promise.reject(res.status);
        })
    }

    getMovies(){
        return fetch(`${this._baseUrl}/movies`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                'authorization':`Bearer ${localStorage.getItem('jwt')}`,
            },
        }).then(res => {
            if (res.ok) {
                return res.json();
              }
            return Promise.reject(res.status);
        })
    }

    deleteSavedMovie(movieId) {
        return fetch(`${this._baseUrl}/movies/${movieId}`, {
            method: 'DELETE',
            headers: {
                ...this._headers,
                'authorization':`Bearer ${localStorage.getItem('jwt')}`,
            },
        });
    }
}

const api = new Api({
    baseUrl: 'https://api.dipback.nomoredomains.monster',
     headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${localStorage.getItem('token')}`
        }
  });

export default api;