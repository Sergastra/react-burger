import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useRef,  } from "react";
import BurgerItem from "./burger-item";
import styles from './burger-ingredients.module.css'
import Modal from "../modal/modal";
import IngredientDetails from "./IngrediensDetail/ingredient-details";


const BurgerIngredients = ({ ingredients, setOnIngredients, setBun }) => {
    const [current, setCurrent] = useState('bun');
    const [ingredientInModal, setIngredientInModal] = useState(null);
    const closeIngredientModal = () => setIngredientInModal(null);

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
        if (elem.type === 'bun') {
            setBun(elem)
        } else {
            setOnIngredients(prev => {
                if (!prev.some(item => item._id === elem._id)) {
                    return [...prev, elem]
                } else {
                    return prev
                }
            })
        };

        setIngredientInModal(elem);

    }

    return (
        <div className={styles.ingredients_container}>
            <h1> Соберите бургер </h1>

            <div style={{ display: "flex" }} >
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
                            <div className={styles.ingredients_body} >
                                {ingredients
                                    .filter((elem) => elem.type === itemType)
                                    .map((item) => {
                                        return (
                                            <div key={item._id} className={styles.ingredients_item} onClick={() => handleClick(item)}>
                                                <BurgerItem
                                                    name={item.name}
                                                    image={item.image}
                                                    price={item.price}
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
                    <IngredientDetails ingredients={ingredientInModal} />
                </Modal>
            )}

        </div>
    )
}
export default BurgerIngredients;
