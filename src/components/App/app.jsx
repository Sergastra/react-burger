import './app.css';
import {useEffect, useState} from 'react';
import AppHeader from '../AppHeader/app-header';
import BurgerConstructor from '../burgerConstructor/burger-constructor';
import BurgerIngredients from '../burgerIngredients/burger-ingredients';
import { getIngredients } from '../utils/app';
import Preloader from '../preloader/preloader';


function App() {
  const [ingredients, setIngredients] = useState([]);
  const [ingredientsLoading, setIngredientsLoading] = useState(true);
  useEffect(() => {
   getIngredients()
   .then(setIngredients)
   .catch(() => alert("Во время загрузки произошла ошибка"))
   .finally(() => setIngredientsLoading(false))
  }, []);
  

  return (
    <div>
      <AppHeader />
      {ingredientsLoading ? (
        <Preloader/>
      ) : (
      <main>
        <BurgerConstructor ingredients={ingredients}/>
        <BurgerIngredients ingredients={ingredients}/>
      </main>
      )}
    </div>
    
  );
}
export default App;
