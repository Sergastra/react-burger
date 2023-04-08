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


    const handleClicks = (e) => {
        setCurrent( current);
    };

  return (
    <div className={styles.ingredients_container}>
    <div style={{ display: "flex" }} onClick={handleClicks}>
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

    <section className={styles.ingredients_section}>
    {typeIngredient.map((itemType) =>  {
        let carrentRef = scollTomainRef;
        if (itemType === 'bun') {
            carrentRef = scollTobunRef
        } else if (itemType === 'sauce') {
            carrentRef = scollTosauceRef
        };

        return(

            <div  key={itemType}>
                <h3 className={styles.ingredients_header} ref={carrentRef} >{translate[itemType]} </h3>
                <div className={styles.ingredients_body}>
                    {ingredients
                        .filter((item) => item.type === itemType)
                        .map((item) => {
                            return (
                                
                                <BurgerItem
                                    key={item._id}
                                    name={item.name}
                                    image={item.image}
                                    price={item.price}
                                />
                            )
                        })
                    }
                </div>
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
