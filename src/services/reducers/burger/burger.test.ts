import { reducer } from './burger';
import { BurgerActionTypes } from '../../actions/type';
import { TBurgerActionTypes } from '../../../types/actions/burger';
import { ConstructorElementTypes } from '../../../constants/constructor';

describe('reducer burger', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as TBurgerActionTypes)).toEqual({
      bun: null,
      ingredients: [],
    });
  });

  it('should handle SET_BURGER', () => {
    const action: TBurgerActionTypes = {
      type: BurgerActionTypes.SET_BURGER,
      payload: {
        bun: 'bun',
        ingredients: [{
          id: 'id',
          key: 'key',
        }],
      },
    };

    expect(reducer(undefined, action)).toEqual({
      bun: 'bun',
      ingredients: [{
        id: 'id',
        key: 'key',
      }],
    });
  });

  it('should handle REMOVE_BURGER', () => {
    const action: TBurgerActionTypes = {
      type: BurgerActionTypes.REMOVE_BURGER,
    };

    const state = {
      bun: 'bun',
      ingredients: [{
        id: 'id',
        key: 'key',
      }],
    };

    expect(reducer(state, action)).toEqual({
      bun: null,
      ingredients: [],
    });
  });

  it('should handle ADD_INGREDIENT_IN_BURGER type bun', () => {
    const action: TBurgerActionTypes = {
      type: BurgerActionTypes.ADD_INGREDIENT_IN_BURGER,
      payload: {
        type: ConstructorElementTypes.BUN,
        id: 'bun',
        key: 'key',
      },
    };

    expect(reducer(undefined, action)).toEqual({
      bun: 'bun',
      ingredients: [],
    });
  });

  it('should handle ADD_INGREDIENT_IN_BURGER type ingregient', () => {
    const action: TBurgerActionTypes = {
      type: BurgerActionTypes.ADD_INGREDIENT_IN_BURGER,
      payload: {
        type: ConstructorElementTypes.INGEDIENTS,
        id: 'ingregient',
        key: 'key',
      },
    };

    expect(reducer(undefined, action)).toEqual({
      bun: null,
      ingredients: [{
        id: 'ingregient',
        key: 'key',
      }],
    });
  });

  it('should handle MOVE_INGREDIENT_IN_BURGER', () => {
    const action: TBurgerActionTypes = {
      type: BurgerActionTypes.MOVE_INGREDIENT_IN_BURGER,
      payload: {
        currentIndex: 0,
        moveIndex: 1,
      },
    };

    const state = {
      bun: null,
      ingredients: [
        {
          id: '0',
          key: '0',
        },
        {
          id: '1',
          key: '1',
        },
        {
          id: '2',
          key: '2',
        },
      ],
    };

    expect(reducer(state, action)).toEqual({
      bun: null,
      ingredients: [
        {
          id: '1',
          key: '1',
        },
        {
          id: '0',
          key: '0',
        },
        {
          id: '2',
          key: '2',
        },
      ],
    });
  });

  it('should handle REMOVE_INGREDIENT_IN_BURGER type bun', () => {
    const action: TBurgerActionTypes = {
      type: BurgerActionTypes.REMOVE_INGREDIENT_IN_BURGER,
      payload: {
        type: ConstructorElementTypes.BUN,
        index: 0,
      },
    };

    const state = {
      bun: 'bun',
      ingredients: [{
        id: 'id',
        key: 'key',
      }],
    };

    expect(reducer(state, action)).toEqual({
      bun: null,
      ingredients: [{
        id: 'id',
        key: 'key',
      }],
    });
  });

  it('should handle REMOVE_INGREDIENT_IN_BURGER type ingregient', () => {
    const action: TBurgerActionTypes = {
      type: BurgerActionTypes.REMOVE_INGREDIENT_IN_BURGER,
      payload: {
        type: ConstructorElementTypes.INGEDIENTS,
        index: 0,
      },
    };

    const state = {
      bun: 'bun',
      ingredients: [{
        id: 'id',
        key: 'key',
      }],
    };

    expect(reducer(state, action)).toEqual({
      bun: 'bun',
      ingredients: [],
    });
  });
});
