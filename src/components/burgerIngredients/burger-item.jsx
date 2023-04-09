// import onClick from 'react';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css'

const BurgerItem = (item) => {

    return(
        <div key={item._id} className={styles.ingredients_item}>
            <Counter count={1} size="default" extraClass="m-3" />
            <img src={item.image} alt={item.name} />
            <span className="constructor-element__price" >{item.price}
                <CurrencyIcon type="primary" />
            </span>
            <p>{item.name}</p>
        </div>
    )
}
export default BurgerItem;



