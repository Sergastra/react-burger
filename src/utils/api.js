export const BURGER_URL = "https://norma.nomoreparties.space/api";
export const createOrderUrl = BURGER_URL + '/orders';

// const checkResponse = (res) => {
//   return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
// };

// export const getIngredients = () => {
//   return request(`${BURGER_URL}/ingredients`)
//     .then(data => {
//       if (data?.success) return data.data;
//       return Promise.reject(data)
//     }
//   );
// };

// export const getOrders = () => {
//   return request(`${BURGER_URL}/orders`)
//     .then(data => {
//       if (data?.success) return data.order.number;
//       return Promise.reject(data)
//     }
//   );
// };

// /* универсальная функция */
// export function request(url, options) {
//   return fetch(url, options).then(checkResponse)
// };

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  
  return Promise.reject(`Ошибка ${res.status}`);
};

const checkSuccess = (res) => {
  if (res && res.success) {
    return res;
  }
  
  return Promise.reject(`Ответ не success: ${res}`);
};

export const request = (endpoint, options) => {
  return (
    fetch(`${BURGER_URL}/${endpoint}`, options)
      .then(checkResponse)
      .then(checkSuccess)
  )
};