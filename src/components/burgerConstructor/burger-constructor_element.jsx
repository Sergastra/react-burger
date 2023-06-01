import React from 'react';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import css from './burger-constructor.module.css'

export const BurgerConstructorElement = ({item, index, isLocked, deleteFunc, moveFunc}) => {

    const id    = item._id
    const ref = useRef(null)
    const [, drop] = useDrop({
        accept: 'item',
	    
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            };
        },
        hover(el, monitor) {
            if (!ref.current) return;
            const dragIndex = el.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) return;
            const hoverRect = ref.current?.getBoundingClientRect();
            const hoverMidY = (hoverRect.bottom - hoverRect.top)/2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverRect.top;
            
            if (dragIndex < hoverIndex && hoverClientY < hoverMidY) return;
            if (dragIndex > hoverIndex && hoverClientY > hoverMidY) return;
            
            moveFunc(dragIndex, hoverIndex);
            el.index = hoverIndex;
        },
    });

    const [{ isDrag }, drag] = useDrag({
	    
        type: 'item',
        item: () => {
            return { id, index };
        },
        collect: (monitor) => ({
            isDrag: monitor.isDragging(),
        }),
    });
    //console.log(item)
    const opacity = isDrag ? 0 : 1;
    drag(drop(ref))

    return (

        <li ref={ref} className='constructor-element__row pl-2 mt-5 mb-5 mr-2 w-100%' style={opacity}>
            <DragIcon className="mr-3" type="primary" />
            <div className={css.item_container}>
                <ConstructorElement
                    className='constructor-element__text mr-2'
                    handleClose={deleteFunc}
                    text={item.name}
                    price={item.price}
                    thumbnail={item.image}
                    isLocked={isLocked}
                />
            </div>
        </li>
    );
};
export default BurgerConstructorElement;