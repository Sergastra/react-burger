import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useRef, onClick } from "react";
import BurgerItem from "./burger-item";
import styles from './burger-ingredients.module.css'


const BurgerIngredients = ({ ingredients }) => {
    const [current, setCurrent] = useState('bun');

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


    const handleClicks = () => {
        onClick( ingredients );
    };

  return (
    <div className={styles.ingredients_container}>
    <div style={{ display: "flex" }}>
          <Tab value="bun" active={current === "bun"} onClick={(e) => {
              scollTobunRef.current.scrollIntoView({ behavior: "smoot" })
              setCurrent(e)
          }}>
              Булки
          </Tab>
          <Tab value="sauce" active={current === "sauce"} onClick={(e) => {
              scollTosauceRef.current.scrollIntoView({ behavior: "smoot" })
              setCurrent(e)
          }}>
              Соусы
          </Tab>
          <Tab value="main" active={current === "main"} onClick={(e) => {
              scollTomainRef.current.scrollIntoView({ behavior: "smoot" })
              setCurrent(e)
          }}>
              Начинки
          </Tab>
    </div>

    <section className="ingredients-section">
    {typeIngredient.map((itemType) =>  {
        let carrentRef = scollTomainRef;
        if (itemType === 'bun') {
            carrentRef = scollTobunRef
        } else if (itemType === 'sauce') {
            carrentRef = scollTosauceRef
        };

        return(

            <div className={styles.ingredients_item} key={itemType}>
                <h3 className={styles.ingredients_header} ref={carrentRef}>{translate[itemType]}</h3>

                {ingredients
                    .filter((item) => item.type === itemType)
                    .map((item) => {
                        return (
                            <div>
                                <BurgerItem
                                    name={item.name}
                                    image={item.image}
                                    price={item.price}
                                    onClick={() => handleClicks(ingredients)}
                                />

                            </div>

                        )

                    })
                }
            </div>
        ) 
        }  
        )
    }
        
     </section>
    </div>
)
}
export default BurgerIngredients;
