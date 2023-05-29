import {BURGER_URL} from '../../utils/api.js';
import {INGREDIENTS_LOAD} from '../actions';
import {request} from '../../utils/api';


  
  export function getIngredients()  {
    return function(dispatch) {
     request(`${BURGER_URL} /ingredients`)
      .then(data => {
        if (data?.success) return data.data;
        return Promise.reject(data)
      }
    )
    .then(result => {
        dispatch({
        	type: INGREDIENTS_LOAD,
        	data: result.data
        })
    })
    .catch(error => {
        console.log(error);
        alert('Error ' + error + ' while connecting to Api');
    });
}};
// export function getIngredients() {
// 	return function(dispatch) {
// 		fetch(config.getIngredientsUrl)
// 			.then(response => {
// 				if (response.ok) {
// 					return response.json();
// 				} else {
// 					return Promise.reject(response.status);
// 				}
// 			})
// 			.then(result => {
// 				dispatch({
// 					type: INGREDIENTS_LOAD,
// 					data: result.data
// 				})
// 			})
// 			.catch(error => {
// 				console.log(error);
// 				alert('Error ' + error + ' while connecting to Api');
// 			});
		
		
// 	}
// }