import styles from './app.module.css';
import {useEffect} from 'react';
import AppHeader from '../AppHeader/app-header';
import BurgerConstructor from '../burgerConstructor/burger-constructor';
import BurgerIngredients from '../burgerIngredients/burger-ingredients';
import Preloader from '../preloader/preloader';
import {useDispatch, useSelector} from "react-redux";
import {fetchIngredients} from "../../services/thunks/fetchIngredients";


function App() {
  const {ingredientsLoading} = useSelector(state => state.ingredient);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  return (
    <>
      <AppHeader />
      {ingredientsLoading ? (
        <Preloader />
      ) : (
        <div className={styles.main_container}>
          <main>
            <BurgerIngredients />
            <BurgerConstructor />
          </main>
        </div>
      )}
    </>

  );
}
export default App;
