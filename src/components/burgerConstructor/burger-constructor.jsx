import { ConstructorElement, DragIcon, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useCallback} from 'react';
import { useModal } from "../../hooks/useModal";
import Modal from "../modal/modal";
import { OrderDetails } from "./order-details/order-details";
import PropTypes from 'prop-types';
import { ingredientType } from "../../utils/prop-types";
import css from './burger-constructor.module.css'
import { useDrop } from 'react-dnd';
import { useSelector, useDispatch } from 'react-redux';
import {TRANSFER_INGREDIENT, INGREDIENT_DELETE, COUNTER_DOWN} from '../../services/actions';
import {createOrder} from '../../services/actions/order';


export const BurgerConstructor = ({onDropHandler}) => {
    const dispatch = useDispatch();
    const { isModalOpen, closeModal } = useModal();

    const handleDeleteElem = (item) => {
        dispatch({
            type: INGREDIENT_DELETE,
            id : item.productId
        })
        dispatch({
            type: COUNTER_DOWN,
            key: item._id,
            typeItem: item.type
        })
    }
    

    const handleClick = () => {
		let ingredientsArr = [bun._id]; // пусть сервер знает id булки
		for (let itm of contentItems) {
			ingredientsArr.push(itm._id)
		}
		dispatch(createOrder(ingredientsArr)); // redux-thunk
		closeModal(true)
	}

    const { bun, contentItems } = useSelector(store => store.burgerIngredients);
    const [{ canDrop }, dropTarget] = useDrop({
        accept : "ingredient",
        drop(itemId) {
            onDropHandler(itemId);
        },
        collect: monitor => ({
            isHover: monitor.isOver(),
            canDrop: monitor.canDrop(),
        })
    });
	let opacity,dropMsgCls,column;
	if(canDrop) {
		dropMsgCls = css.drop_msg;
		opacity = 0.5;
		column = css.constructor_container_active;
	} else {
		dropMsgCls = css.no_drop_msg;
		opacity = 1;
		column = css.constructor_container;//css.constructor_candrop;
	}
	const moveItem = useCallback((dragIdx, idx) => {
		dispatch({
			type: TRANSFER_INGREDIENT,
			toIndex: idx,
			fromIndex: dragIdx
		})
	}, [dispatch])

    const orderSumm = (bun, items) => {
        let summ = (bun) ? bun.price * 2 : 0
        items.map((item) => summ += item.price);
        return summ;
    }

    return (

        <section className={column} ref={dropTarget} style={{opacity}}>
            <div className={dropMsgCls}> Добавьте ингредиенты </div>
            <div className={css.container_element} key={bun._id}>

                {bun &&
                    <ConstructorElement className='constructor-element_pos_top ml-4'
                        type="top"
                        isLocked={true}
                        text={bun.name + '(верх)'}
                        price={bun.price}
                        thumbnail={bun.image}
                    />
                }

                <ul className={css.constructor_item}>
                    {
                        contentItems && contentItems.map((item) => {
                            return (
                                <React.Fragment key={item._id}>
                                    <li className='constructor-element__row pl-2 mt-5 mb-5 mr-2 w-100%' >
                                        <DragIcon className="mr-3" type="primary" />
                                        <div className={css.item_container}>
                                            <ConstructorElement
                                                className='constructor-element__text mr-2'
                                                handleClose={() => handleDeleteElem(item._id)}
                                                text={item.name}
                                                price={item.price}
                                                thumbnail={item.image}
                                                moveFunc={moveItem}
                                            />
                                        </div>
                                    </li>
                                </React.Fragment>
                            )
                        })
                    }
                </ul>

                {bun &&
                    <ConstructorElement
                        key={bun._id}
                        type="bottom"
                        isLocked={true}
                        text={bun.name + '(низ)'}
                        price={bun.price}
                        thumbnail={bun.image}
                    />
                }
            </div>

            <div className={css.counter_container} >
                <div className={css.counter_item} >
                    <p className="text text_type_digits-medium mr-4">{orderSumm(bun, contentItems)}</p>
                    <CurrencyIcon type="primary" />
                </div>
                {bun && <Button
                    htmlType="button"
                    type="primary"
                    size="large"
                    children="Оформить заказ"
                    // onClick={() => openModal()}
                    onClick={()=> handleClick}
                />}
            </div>
            {isModalOpen && (
                <Modal onClose={closeModal}>
                    <OrderDetails />
                </Modal>
            )}
        </section>
    );
}

export default BurgerConstructor;

BurgerConstructor.propTypes = {
    onIngredients: PropTypes.arrayOf(ingredientType).isRequired,
};