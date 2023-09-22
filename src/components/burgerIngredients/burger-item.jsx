import React, { useMemo } from 'react';
import { ingredientType } from '../../utils/prop-types';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag } from "react-dnd";
import { useSelector } from 'react-redux';

const BurgerItem = (item) => {
    const { image, price, name } = item.item;
    const { onIngredients, bun } = useSelector(store => store.ingredient);

    const [, drag] = useDrag({
        type: 'ingredient',
        item: item.item,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const count = useMemo(() => {
        if (bun.name === name) {
            return 2
        } else {
            return onIngredients.filter((element) => element.name === name).length
        }
    }, [name, onIngredients, bun])

    return (
        <div draggable ref={drag}>
            {count > 0
                ? <Counter count={count} size="default" extraClass="m-3" />
                : ''
            }
            <img src={image} alt={name} />
            <span className="constructor-element__price" >{price}
                <CurrencyIcon type="primary" />
            </span>
            <p>{name}</p>
        </div>
    )
}
export default React.memo(BurgerItem);

BurgerItem.propTypes = {
    item: ingredientType,
};
