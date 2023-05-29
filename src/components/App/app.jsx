import styles from './app.module.css';
import {useEffect} from 'react';
import AppHeader from '../AppHeader/app-header';
import BurgerConstructor from '../burgerConstructor/burger-constructor';
import BurgerIngredients from '../burgerIngredients/burger-ingredients';
import { getIngredients } from '../../services/actions/ingredient';
// import Preloader from '../preloader/preloader';
import {INGREDIENTS_CHOOSE, COUNTER_UP} from '../../services/actions';
import {useDispatch} from 'react-redux';
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";


function App() {
  // const [ingredients, setIngredients] = useState([]);
  // const [onIngredients, setOnIngredients] = useState([]);
  // const [bun, setBun] = useState('');
  // const [ingredientsLoading, setIngredientsLoading] = useState(true);
  
  // useEffect(() => {
  //   getIngredients()
  //     .then(setIngredients)
  //     .catch(() => alert("Во время загрузки произошла ошибка"))
  //     .finally(() => setIngredientsLoading(false))
  // }, []);

  const dispatch = useDispatch();
	
    useEffect(()=>{
	    dispatch(getIngredients());
    },[dispatch]);

    const handleDrop = (item) => {
        dispatch({
            type: INGREDIENTS_CHOOSE,
            item: item
        })
        dispatch({
            type: COUNTER_UP,
            key: item._id,
            typeItem: item.type
        })
    };


  return (
    <>
      <AppHeader />
      {/* {ingredientsLoading ? (
        <Preloader />
      ) : ( */}
        <div className={styles.main_container}>
          <main>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients
              // ingredients={ingredients}
              // setOnIngredients={setOnIngredients}
              // setBun={setBun}
            />
            <BurgerConstructor
              onDropHandler= {handleDrop}
              // onIngredients={onIngredients}
              // setOnIngredients={setOnIngredients}
              // bun={bun}
            />
          </DndProvider>
          </main>
        </div>
      {/* )} */}
    </>

  );
}
export default App;
