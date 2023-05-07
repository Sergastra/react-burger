import styles from './app.module.css';
import {useEffect, useState} from 'react';
import AppHeader from '../AppHeader/app-header';
import BurgerConstructor from '../burgerConstructor/burger-constructor';
import BurgerIngredients from '../burgerIngredients/burger-ingredients';
import { getIngredients } from '../../utils/api';
import Preloader from '../preloader/preloader';


function App() {
  const [ingredients, setIngredients] = useState([]);
  const [onIngredients, setOnIngredients] = useState([]);
  const [bun, setBun] = useState('');
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
        <Preloader />
      ) : (
        <div className={styles.main_container}>
          <main>
            <BurgerIngredients
              ingredients={ingredients}
              setOnIngredients={setOnIngredients}
              setBun={setBun}
            />
            <BurgerConstructor
              onIngredients={onIngredients}
              setOnIngredients={setOnIngredients}
              bun={bun}
            />
          </main>
        </div>
      )}
    </>

  );
}
export default App;
