import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useRef } from "react";

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
  return (
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
  )
}
export default BurgerIngredients;
