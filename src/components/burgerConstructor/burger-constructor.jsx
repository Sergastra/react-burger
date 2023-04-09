import { ConstructorElement, DragIcon, CurrencyIcon, Button  } from "@ya.praktikum/react-developer-burger-ui-components";
import css from './burger-constructor.module.css'
// import { useState } from "react";


const BurgerConstructor = ( { deleteIngredients, bun, setDeleteIngredients }) => {
    // const [ setIngredients] = useState([]);
    
    const handleDeleteElem = (id) => {
            const result = deleteIngredients.filter((item) => item._id !== id)
            setDeleteIngredients(result)
        }
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
            <section className='constructorContainer'>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
    <div className={css.constructNo}> Пусто </div>
    {bun && 
    <ConstructorElement className='constructor-element_pos_top ml-4 ' key={bun._id}
        type="top"
        isLocked={true}
        text={bun.name}
        price={bun.price}
        thumbnail={bun.image}
    />
}

    <ul className='constructor-item' >

        {
            deleteIngredients.map((item) => {
                return (
                    <li className='constructor-element__row pl-4' key={item._id}>
                        <DragIcon type="primary" />
                        <div>
                            <ConstructorElement key={item._id} 
                                handleClose={() => handleDeleteElem(item._id)}
                                text={item.name}
                                price={item.price}
                                thumbnail={item.image}
                            />
                        </div>
                    </li>
                )
            })
        }    
    </ul>
    {bun && 
        <ConstructorElement
            type="bottom"
            isLocked={true}
            text={bun.name}
            price={bun.price}
            thumbnail={bun.image}
        />
    }

    <div className='counter-container' >
        <div className='counter-item' >
            <p className="text text_type_digits-medium mr-4">610</p>
            <CurrencyIcon type="primary" />
        </div>
        <Button  
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
