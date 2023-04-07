const Burger_URL = "https://norma.nomoreparties.space/api";

const checkResponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  };
  
  export const getIngredients = () => {
    return fetch(`${Burger_URL}/ingredients`)
    .then(checkResponse)
    .then(data=> {
      if(data?.success) return data.data;
      return Promise.reject(data)
    });
  };