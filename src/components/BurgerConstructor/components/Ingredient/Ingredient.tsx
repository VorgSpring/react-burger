import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from '../../../../hooks/typedHooks';
import { getIngredientByIdSelector } from '../../../../selectors/ingredients';
import {
  moveIngredientInBurger,
  removeIngredientInBurger,
} from '../../../../services/actions/burger';
import { DndTypes } from '../../../../constants/dndTypes';
import styles from './Ingredient.module.css';

type Props = {
  id: string;
  index: number
};

export const Ingredient = ({ id, index }: Props) => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLLIElement | null>(null);

  const ingredient = useSelector(
    (store) => getIngredientByIdSelector(store, id),
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
    hover(item: { id: string, index: number }, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;

      if (dragIndex === index) {
        return;
      }

      if (!ref.current) {
        return;
      }
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();

      if (clientOffset === null) {
        return;
      }

      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < index && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > index && hoverClientY > hoverMiddleY) {
        return;
      }

      dispatch(moveIngredientInBurger(dragIndex, index));

      // Необходимо мутировать аргумент
      // чтобы избежать поиска по индексу.
      // eslint-disable-next-line no-param-reassign
      item.index = index;
    },
  });

  if (ingredient === null) {
    return null;
  }

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

  const preventDefault = (e: React.DragEvent<HTMLLIElement>) => e.preventDefault();

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
