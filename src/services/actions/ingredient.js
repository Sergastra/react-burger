import {BURGER_URL} from '../../utils/api';
import {request} from '../../utils/api';
import {INGREDIENTS_LOAD} from '../actions';


export const getIngredients = () => {
    return function(dispatch){request(`${BURGER_URL}/ingredients`)
      .then(data => {
        if (data?.success) return data.data;
        return Promise.reject(data)
      }
      
    )
    .then(result => {
        dispatch({
            type: INGREDIENTS_LOAD,
            data: result.data
        })})
    .catch(error => {
        console.log(error);
        alert('Error ' + error + ' while connecting to Api');
    });}
    
    
  };