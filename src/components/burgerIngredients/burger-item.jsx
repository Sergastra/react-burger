import React from 'react';
import PropTypes from 'prop-types';
import { ingredientType } from '../../utils/prop-types';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import {useSelector} from 'react-redux';

const BurgerItem = (props) => {
    const { image, price, name, apiData } = props;

    const { counts, bun } = useSelector(store => store.burgerIngredients);
	let count = (counts && typeof(counts[apiData._id]) !== 'undefined') ? counts[apiData._id] : 0;
	count = (apiData.type==='bun' && count && apiData._id === bun._id) ? 2 : (apiData.type==='bun' ? 0 : count);

    return (
        <>
             {count > 0 && <Counter count={count} size="default" extraClass="m-3" />}
            <img src={image} alt={name} />
            <span className="constructor-element__price" >{price}
                <CurrencyIcon type="primary" />
            </span>
            <p>{name}</p>
        </>
    )
}
export default React.memo(BurgerItem);

BurgerItem.propTypes = {
    item: PropTypes.arrayOf(ingredientType),
};




