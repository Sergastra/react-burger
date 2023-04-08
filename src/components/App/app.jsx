import styles from './app.css';
import {useEffect, useState} from 'react';
import AppHeader from '../AppHeader/app-header';
import BurgerConstructor from '../burgerConstructor/burger-constructor';
import BurgerIngredients from '../burgerIngredients/burger-ingredients';
import { getIngredients } from '../utils/api';
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
    <>
      <AppHeader />
      {ingredientsLoading ? (
        <Preloader/>
      ) : (
      <>
        <h1 className={`${styles.title} text text_type_main-large mt-10 mb-5 pl-20`}> Соберите бургер </h1>
        <main>
          <BurgerIngredients ingredients={ingredients}/>
          <BurgerConstructor ingredients={ingredients}/>
        </main>
      </>
      )}
    </>
    
  );
}
export default App;
