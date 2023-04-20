import React from 'react';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerItem = (item) => {
    const { image, price, name } = item;

    return (
        <>
            <Counter count={1} size="default" extraClass="m-3" />
            <img src={image} alt={name} />
            <span className="constructor-element__price" >{price}
                <CurrencyIcon type="primary" />
            </span>
            <p>{name}</p>
        </>
    )
}
export default React.memo(BurgerItem);




