import { reducer } from './ingredients';
import { IngredientActionTypes } from '../../actions/type';
import { ConstructorElementTypes } from '../../../constants/constructor';
import { TIngredientActionTypes } from '../../../types/actions/ingredients';

describe('reducer ingredients', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as TIngredientActionTypes)).toEqual({
      items: null,
      isLoading: false,
      error: null,
    });
  });

  it('should handle GET_INGREDIENTS_REQUEST', () => {
    const action: TIngredientActionTypes = {
      type: IngredientActionTypes.GET_INGREDIENTS_REQUEST,
    };

    expect(reducer(undefined, action)).toEqual({
      items: null,
      isLoading: true,
      error: null,
    });
  });

  it('should handle GET_INGREDIENTS_SUCCESS', () => {
    const action: TIngredientActionTypes = {
      type: IngredientActionTypes.GET_INGREDIENTS_SUCCESS,
      payload: [{
        id: 'string',
        type: 'bun',
        constructorType: ConstructorElementTypes.BUN,
        image: 'string',
        imageLarge: 'string',
        name: 'string',
        price: 666,
        structure: {
          calories: 'string',
          proteins: 'string',
          fat: 'string',
          carbohydrates: 'string',
        },
      }],
    };

    expect(reducer(undefined, action)).toEqual({
      items: [{
        id: 'string',
        type: 'bun',
        constructorType: ConstructorElementTypes.BUN,
        image: 'string',
        imageLarge: 'string',
        name: 'string',
        price: 666,
        structure: {
          calories: 'string',
          proteins: 'string',
          fat: 'string',
          carbohydrates: 'string',
        },
      }],
      isLoading: false,
      error: null,
    });
  });

  it('should handle GET_INGREDIENTS_ERROR', () => {
    const action: TIngredientActionTypes = {
      type: IngredientActionTypes.GET_INGREDIENTS_ERROR,
      payload: 'error',
    };

    expect(reducer(undefined, action)).toEqual({
      items: null,
      isLoading: false,
      error: 'error',
    });
  });
});
