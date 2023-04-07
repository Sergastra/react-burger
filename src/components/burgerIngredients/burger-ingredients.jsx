import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
const BurgerIngredients = ({ ingredients }) => {
    const [current, setCurrent] = useState('bun')
  return (
    <div style={{ display: 'flex' }}>
      <Tab value="bun" active={current === 'Булки'} onClick={setCurrent}>
        One
      </Tab>
      <Tab value="souce" active={current === 'Соусы'} onClick={setCurrent}>
        Two
      </Tab>
      <Tab value="main" active={current === 'Начинки'} onClick={setCurrent}>
        Three
      </Tab>
    </div>
  )
}
export default BurgerIngredients;
