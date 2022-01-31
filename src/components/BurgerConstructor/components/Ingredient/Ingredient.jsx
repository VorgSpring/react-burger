import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { getIngredientById } from '../../../../helpers/ingredients';
import {
  moveIngredientInBurger,
  removeIngredientInBurger,
} from '../../../../services/actions/burger';
import { DndTypes } from '../../../../constants/dndTypes';
import styles from './Ingredient.module.css';

export const Ingredient = ({ id, index }) => {
  const dispatch = useDispatch();
  const ref = useRef(null);

  const ingredient = useSelector(
    (store) => getIngredientById(store.ingredients.items, id),
  );

  const [{ opacity }, drag] = useDrag(() => ({
    type: DndTypes.CONSTRUCTOR,
    item: () => ({ id, index }),
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0 : 1,
    }),
  }));

  const [{ handlerId }, drop] = useDrop({
    accept: DndTypes.CONSTRUCTOR,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;

      if (dragIndex === index) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < index && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > index && hoverClientY > hoverMiddleY) {
        return;
      }

      dispatch(moveIngredientInBurger(dragIndex, index, id));

      // Необходимо мутировать аргумент
      // чтобы избежать поиска по индексу.
      // eslint-disable-next-line no-param-reassign
      item.index = index;
    },
  });

  drag(drop(ref));

  const {
    name,
    price,
    image,
    constructorType,
  } = ingredient;

  const handleRemoveIngredient = () => {
    dispatch(removeIngredientInBurger(constructorType, index));
  };

  const preventDefault = (e) => e.preventDefault();

  return (
    <li
      className={`${styles.root} mb-4`}
      ref={ref}
      style={{ opacity }}
      data-handler-id={handlerId}
      onDrop={preventDefault}
    >
      <span className="mr-2">
        <DragIcon type="primary" />
      </span>

      <ConstructorElement
        text={name}
        price={price}
        thumbnail={image}
        handleClose={handleRemoveIngredient}
      />
    </li>
  );
};

Ingredient.propTypes = {
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
