import './app.css';
import {useEffect, useState} from 'react';
import AppHeader from '../AppHeader/app-header';
import BurgerConstructor from '../burgerConstructor/burger-constructor';
import BurgerIngredients from '../burgerIngredients/burger-ingredients';
import { getIngredients } from '../utils/app';


function App() {
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {
   getIngredients()
   .then(setIngredients);
  }, []);
  

  return (
    <div>
      <AppHeader />
      <main>
        <BurgerConstructor ingredients={ingredients}/>
        <BurgerIngredients ingredients={ingredients}/>
      </main>
    </div>
  );
}
export default App;
