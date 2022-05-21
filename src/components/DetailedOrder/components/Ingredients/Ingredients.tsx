import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import { preparedOrderIngredients } from '../../../../helpers/orders/util';
import { getErrorAndEmptySelector } from '../../../../selectors/ingredients';
import { getIngredients } from '../../../../services/operations/ingredients';
import { Ingredient } from '../Ingredient/Ingredient';
import styles from './Ingredients.module.css';

type Props = {
  ids: Array<string>
};
export const Ingredients = ({ ids }: Props) => {
  const dispatch = useDispatch();
  const { error, isEmpty } = useSelector(getErrorAndEmptySelector);

  useEffect(() => {
    if (isEmpty) {
      dispatch(getIngredients());
    }
  }, [dispatch, isEmpty]);

  const preparedIngredientValues = preparedOrderIngredients(ids);

  if (error) {
    return null;
  }

  return (
    <div className="mb-10">
      <h4 className="text text_type_main-medium mb-6">Состав:</h4>

      <div className={cn(styles.ingredients, 'pr-6')}>
        {Object.keys(preparedIngredientValues).map((id) => (
          <Ingredient
            key={id}
            id={id}
            count={preparedIngredientValues[id]}
          />
        ))}
      </div>
    </div>
  );
};
