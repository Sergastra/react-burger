import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useRef} from 'react';
import css from "../burger-constructor.module.css";
import {useDrag, useDrop} from "react-dnd";

const IngredientItem = (props) => {
    const { item, handleDeleteElem, index, moveListItem } = props;

    const [, dragRef] = useDrag({
        type: 'item',
        item: { index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })


    const [, dropRef] = useDrop({
        accept: 'item',
        hover: (item, monitor) => {
            const dragIndex = item.index
            const hoverIndex = index
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top

            if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return
            if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return
            if (dragIndex === hoverIndex) {
                return;
            }

            moveListItem(dragIndex, hoverIndex)
            item.index = hoverIndex
        },
    })

    // Join the 2 refs together into one (both draggable and can be dropped on)
    const ref = useRef(null)
    const dragDropRef = dragRef(dropRef(ref))

    return (
      <div >
        <React.Fragment>
            <li className='constructor-element__row pl-2 mt-5 mb-5 mr-2 w-100%' ref={dragDropRef} >
                <DragIcon className="mr-3" type="primary"  />
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
      </div>
    );
};

export default IngredientItem;
