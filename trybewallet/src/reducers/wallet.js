import { GET_CURRENCY, ADD_EXPENSE, SUM_VALUE,
    DELETE_EXPENSE, EDIT_EXPENSE, SAVE_EDITIONS } from '../actions';
  
  const INICIAL_STATE = {
    currencies: [],
    expenses: [],
    editor: false,
    idToEdit: 0,
    total: 0,
  };
  
  const walletReducer = (state = INICIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
    case GET_CURRENCY: {
      return {
        ...state,
        currencies: payload,
      };
    }
    case ADD_EXPENSE: {
      return {
        ...state,
        expenses: [...state.expenses, payload],
      };
    }
    case SUM_VALUE: {
      return {
        ...state,
        total: payload,
      };
    }
    case DELETE_EXPENSE: {
      const id = parseInt(payload, 10);
      const deleteExpenseArray = state.expenses.filter((item) => item.id !== id);
      return {
        ...state,
        expenses: deleteExpenseArray,
      };
    }
    case EDIT_EXPENSE: {
      return { ...state,
        editor: true,
        idToEdit: payload,
      };
    }
    case SAVE_EDITIONS: {
      const newArray = state.expenses.map((item) => {
        if (item.id === parseInt(payload.id, 10)) {
          item = payload;
        }
        return item;
      });
      return { ...state,
        expenses: newArray,
        editor: false };
    }
    default:
      return state;
    }
  };
  
  export default walletReducer;
