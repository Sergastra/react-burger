import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useRef, useEffect } from "react";
import BurgerItem from "./burger-item";
import styles from './burger-ingredients.module.css';
import Modal from "../modal/modal";
import IngredientDetails from "./IngrediensDetail/ingredient-details";
import {useSelector} from "react-redux";
import { useInView } from "react-intersection-observer";


const BurgerIngredients = () => {

    const { ingredients } = useSelector(state => state.ingredient);
    const [current, setCurrent] = useState('bun');
    const [ingredientInModal, setIngredientInModal] = useState(null);
    const closeIngredientModal = () => setIngredientInModal(null);

    const [ref, inView] = useInView({ threshold: 0.1 });
    
    useEffect(() => {
   
        if(inView){
            setCurrent('sauce');
            
        }else if(inView){
            setCurrent('main')
        }else{
                setCurrent('bun')
        }
    }, [inView]);

    const typeIngredient = ["bun", "sauce", "main"];
    const scollTobunRef = useRef();
    const scollTosauceRef = useRef();
    const scollTomainRef = useRef();

    const translate =
    {
        bun: 'Булки',
        sauce: 'Соусы',
        main: 'Начинки'
    }

    const handleClick = (elem) => {
        setIngredientInModal(elem);
    }

    return (
        <div className={styles.ingredients_container}>
            <h1> Соберите бургер </h1>

            <div className={styles.tab_container}>
                <Tab value="bun" active={current === "bun"} onClick={(e) => {
                    scollTobunRef.current.scrollIntoView({ behavior: "smooth" })
                    setCurrent(e)
                }}>
                    Булки
                </Tab>
                <Tab value="sauce" active={current === "sauce"} onClick={(e) => {
                    scollTosauceRef.current.scrollIntoView({ behavior: "smooth" })
                    setCurrent(e)
                }}>
                    Соусы
                </Tab>
                <Tab value="main" active={current === "main"} onClick={(e) => {
                    scollTomainRef.current.scrollIntoView({ behavior: "smooth" })
                    setCurrent(e)
                }}>
                    Начинки
                </Tab>
            </div>

            <section className={styles.ingredients_section}>
                {typeIngredient.map((itemType) => {
                    let carrentRef = scollTomainRef;
                    if (itemType === 'bun') {
                        carrentRef = scollTobunRef
                    } else if (itemType === 'sauce') {
                        carrentRef = scollTosauceRef
                    };

                    return (

                        <div key={itemType}>
                            <h3 className={styles.ingredients_header} ref={carrentRef} >{translate[itemType]} </h3>
                            <div className={styles.ingredients_body} ref={ref}>
                                {ingredients
                                    .filter((elem) => elem.type === itemType)
                                    .map((item) => {
                                        return (
                                            <div key={item._id} className={styles.ingredients_item} onClick={() => handleClick(item)}>
                                                <BurgerItem
                                                    item={item}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })}
            </section>
            {ingredientInModal && (
                <Modal onClose={closeIngredientModal} title="Детали ингредиента">
                    <IngredientDetails ingredient={ingredientInModal} />

                </Modal>
            )}

        </div>
    )
}
export default BurgerIngredients;
