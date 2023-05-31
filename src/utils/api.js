const BURGER_URL = "https://norma.nomoreparties.space/api";
export const createOrderUrl = BURGER_URL + '/orders';

const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};



/* универсальная функция */
export function request(url, options) {
  return fetch(url, options).then(checkResponse)
};