import { ConstructorElement, DragIcon, CurrencyIcon, Button  } from "@ya.praktikum/react-developer-burger-ui-components";
import React from 'react';
import css from './burger-constructor.module.css'
// import { useState } from "react";


const BurgerConstructor = ({onIngredients, bun, setOnIngredients }) => {
    // const [ setIngredients] = useState([]);
    
    const handleDeleteElem = (id) => {
            const result = onIngredients.filter((item) => item._id !== id)
            setOnIngredients(result)
        }


        // let opacity,dropMsgCls,column;
        // if(canDrop) {
        //     dropMsgCls = css.constructNo;
        //     opacity = 0.5;
        //     column = css.column_active;
        // } else {
        //     dropMsgCls = css.no_drop_msg;
        //     opacity = 1;
        //     column = css.column;//css.constructor_candrop;
        // }
    return (

        
        // <div>
            
        //     {ingredients.map((item) => {
        //         return (
        //             <div key={item._id}>
        //                 <p>{item.price}</p>
        //                 <p>{item.name}</p>
        //                 <p>{item.bun}</p>

        //             </div>
        //         )})
        //     }</div>
            <section >

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'}} key={bun._id}>
    <div className={ css.constructNo }> Добавьте ингредиенты </div>
    {bun && 
    <ConstructorElement className= 'constructor-element_pos_top ml-15' 
        type="top"
        isLocked={true}
        text={bun.name + '(верх)'}
        price={bun.price}
        thumbnail={bun.image}
    />
    }   


    <ul >

        {
            onIngredients.map((item) => {
                return (
                    <React.Fragment key={item._id}>
                    <li className='constructor-element__row pl-4' >
                        <DragIcon type="primary"/>
                        <div>
                            <ConstructorElement 
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
    { bun &&
        <ConstructorElement
            key={bun._id}
            type="bottom"
            isLocked={true}
            text={bun.name + '(низ)'}
            price={bun.price}
            thumbnail={bun.image}
        />
    }

    <div className={css.counter_container} >
        <div className= {css.counter_item} >
            <p className="text text_type_digits-medium mr-4">610</p>
            <CurrencyIcon type="primary" />
        </div>
        <Button
            htmlType="button"  
            type="primary" 
            size="large"
            children= "Оформить заказ"
            // onClick={openOrderModal}
            />
    </div>
    {/* { isOrderModalOpen && (
        <Modal onClose={closeOrderModal}>
            <OrderDetails orderNumber="034567" /> 
        </Modal>
    )} */}
</div>
</section>
    );
}

export default BurgerConstructor;
