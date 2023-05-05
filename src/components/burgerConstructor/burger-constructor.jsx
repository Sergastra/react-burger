import { ConstructorElement, DragIcon, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import React from 'react';
import { useModal } from "../../hooks/useModal";
import Modal from "../modal/modal";
import { OrderDetails } from "./order-details/order-details";
import PropTypes from 'prop-types';
import { ingredientType } from "../../utils/prop-types";
import css from './burger-constructor.module.css'


const BurgerConstructor = ({ onIngredients, bun, setOnIngredients }) => {
    
    const { isModalOpen, openModal, closeModal } = useModal();

    const handleDeleteElem = (id) => {
        const result = onIngredients.filter((item) => item._id !== id);
        setOnIngredients(result)
    }

    const orderSumm = (bun, items) => {
        let summ = (bun) ? bun.price * 2 : 0
        items.map((item) => summ += item.price);
        return summ;
    }

    return (

        <section className={css.constructor_container}>
            <div className={css.constructNo}> Добавьте ингредиенты </div>
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
                        onIngredients.map((item) => {
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
                    <p className="text text_type_digits-medium mr-4">{orderSumm(bun, onIngredients)}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button
                    htmlType="button"
                    type="primary"
                    size="large"
                    children="Оформить заказ"
                    onClick={() => openModal()}
                />
            </div>
            {isModalOpen && (
                <Modal onClose={closeModal}>
                    <OrderDetails title='034567' />
                </Modal>
            )}
        </section>
    );
}

export default BurgerConstructor;

BurgerConstructor.propTypes = {
    onIngredients: PropTypes.arrayOf(ingredientType).isRequired,
};