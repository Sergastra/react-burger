import { ConstructorElement, DragIcon, CurrencyIcon, Button  } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useState } from 'react';
import Modal from "../modal/modal";
import { OrderDetails } from "./order-details/order-details";
import css from './burger-constructor.module.css'


const BurgerConstructor = ({ onIngredients, bun, setOnIngredients }) => {
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
    const openOrderModal = () => setIsOrderModalOpen(true);
    const closeOrderModal = () => setIsOrderModalOpen(false);

    const handleDeleteElem = (id) => {
        const result = onIngredients.filter((item) => item._id !== id);
        setOnIngredients(result)
    }

    return (

        <section className={css.constructor_container}>
            <div className={css.constructNo}> Добавьте ингредиенты </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} key={bun._id}>

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
                                        <div style={{ width: '100%', height: '80px' }}>
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
                    <p className="text text_type_digits-medium mr-4">610</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button
                    htmlType="button"
                    type="primary"
                    size="large"
                    children="Оформить заказ"
                    onClick={() => openOrderModal()}
                />
            </div>
            {isOrderModalOpen && (
                <Modal onClose={closeOrderModal}>
                    <OrderDetails />
                </Modal>
            )}
        </section>
    );
}

export default BurgerConstructor;
