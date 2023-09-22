import { ConstructorElement, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useCallback } from 'react';
import { useModal } from "../../hooks/useModal";
import Modal from "../modal/modal";
import { OrderDetails } from "./order-details/order-details";
import css from './burger-constructor.module.css'
import { useDispatch, useSelector } from "react-redux";
import { deleteIngredient, setBun, addOnIngredients, setOnIngredients } from "../../services/slices/ingredientSlice";import { useDrop } from "react-dnd";
import IngredientItem from "./ingredient-item/ingredientItem";
import { createOrder } from "../../services/thunks/createOrder";


const BurgerConstructor = () => {

    const { isModalOpen, openModal, closeModal } = useModal();

    const dispatch = useDispatch();

    const { onIngredients, bun, ingredients } = useSelector(state => state.ingredient);

    const handleDeleteElem = (id) => {
        dispatch(deleteIngredient(id));
    }

    const orderSumm = (bun, ingredients) => {
        let summ = Object.keys(bun).length > 0 ? bun.price * 2 : 0
        ingredients.map((item) => summ += item.price);
        return summ;
    }

    const [{ canDrop }, dropTarget] = useDrop({
        accept: 'ingredient',
        drop: (item) => {
            if (item.type === 'bun') {
                dispatch(setBun(item))
            }
            dispatch(addOnIngredients(item))

        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });

    let opacity, dropMsgCls, constructor_container;
    if (canDrop) {
        dropMsgCls = css.drop_msg;
        opacity = 0.5;
        constructor_container = css.constructor_container_active;
    } else {
        dropMsgCls = css.constructNo;
        opacity = 1;
        constructor_container = css.constructor_container;//css.constructor_candrop;
    }

    const moveListItem = useCallback(
        (dragIndex, hoverIndex) => {
            const dragItem = onIngredients[dragIndex];
            const hoverItem = onIngredients[hoverIndex];
            const updatedIngredients = [...onIngredients];
            updatedIngredients[dragIndex] = hoverItem;
            updatedIngredients[hoverIndex] = dragItem;
            dispatch(setOnIngredients(updatedIngredients));
        },
        [onIngredients, dispatch]
    );
    
    const sendOrder = useCallback(() => {
        openModal();
        if (onIngredients.length > 0) {
            const orderIngredientsIds = onIngredients.map((itEl) => {
                return ingredients.find((el) => el.name === itEl.name)._id
            })

            const orderBunsIds = [bun._id]
            dispatch(createOrder([...orderIngredientsIds, ...orderBunsIds]));
        }
    }, [onIngredients, openModal, ingredients, bun, dispatch]);

    return (

        <section className={constructor_container} ref={dropTarget} style={{ opacity }}>
            <div className={dropMsgCls}> Добавьте ингредиенты </div>
            <div className={css.container_element} key={bun._id}>

                {Object.keys(bun).length > 0 &&
                    <ConstructorElement className='constructor-element_pos_top ml-4'
                        type="top"
                        isLocked={true}
                        text={bun.name + '(верх)'}
                        price={bun.price}
                        thumbnail={bun.image}
                    />
                }

                <ul className={css.constructor_item} ref={dropTarget}>
                    {
                        onIngredients.map((item, index) => {
                            if (item.type !== 'bun') {
                                return (
                                    <IngredientItem
                                        key={item._id}
                                        item={item}
                                        handleDeleteElem={handleDeleteElem}
                                        index={index}
                                        moveListItem={moveListItem}
                                    />
                                )
                            }
                            return null
                        })
                    }
                </ul>

                {Object.keys(bun).length > 0 &&
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
                    {(Object.keys(bun).length || onIngredients.length > 0) && (
                        <p className="text text_type_digits-medium mr-4">{orderSumm(bun, onIngredients)}</p>
                    )}
                    <CurrencyIcon type="primary" />
                </div>
                {Object.keys(bun).length > 0 ? (
                <Button
                    htmlType="button"
                    type="primary"
                    size="large"
                    children="Оформить заказ"
                    onClick={sendOrder}
                /> ) : ( <h2> Для заказа добавьте булку </h2> )}
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
