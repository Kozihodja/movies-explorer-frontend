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
                    return res.json();
                  }
                return Promise.reject(`${res.status}. Не удалось сделать GET запрос по адресу ${url}`);
            })
        return this._data;
    }

    getInitialCards() {
        return this._requestGet(`${this._baseUrl}`);
    }

}

const api = new Api({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies/',
  });

export default api;