const BURGER_URL = "https://norma.nomoreparties.space/api";

const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const getIngredients = () => {
  return request(`${BURGER_URL}/ingredients`)
    .then(data => {
      if (data?.success) return data.data;
      return Promise.reject(data)
    }
  );
};

/* универсальная функция */

function request(url, options) {
  return fetch(url, options).then(checkResponse)
};