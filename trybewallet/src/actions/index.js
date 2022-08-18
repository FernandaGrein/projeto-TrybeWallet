export const ADD_EMAIL = 'ADD_EMAIL';
export const GET_CURRENCY = 'GET_CURRENCY';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const SELECTED_CURRENCIES = 'SELECTED_CURRENCIES';
export const SUM_VALUE = 'SUM_VALUE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const SAVE_EDITIONS = 'SAVE_EDITIONS';
export const CURRENCY_URL = 'https://economia.awesomeapi.com.br/json/all';

export const saveEmail = (email) => ({
  type: ADD_EMAIL,
  payload: email,
});

export const saveCurrency = (currencies) => ({
  type: GET_CURRENCY,
  payload: currencies,
});

export const fetchCurrency = () => async (dispatch) => {
  try {
    const response = await fetch(CURRENCY_URL);
    const responseJson = await response.json();
    const allCurrencys = Object.keys(responseJson).filter((item) => (item !== 'USDT'));
    dispatch(saveCurrency(allCurrencys));
  } catch (error) {
    console.log(error);
  }
};

export const addExpense = (newExpense) => ({
  type: ADD_EXPENSE,
  payload: newExpense,
});

export const sumValues = (total) => ({
  type: SUM_VALUE,
  payload: total,
});

export const fetchquotation = (expense) => async (dispatch) => {
  try {
    const response = await fetch(CURRENCY_URL);
    const responseJson = await response.json();
    const completeExpense = { ...expense, exchangeRates: responseJson };
    dispatch(addExpense(completeExpense));
  } catch (error) {
    console.log(error);
  }
};

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  payload: id,
});

export function editExpenses(id) {
  return {
    type: EDIT_EXPENSE,
    payload: id,
  };
}

export const saveEditions = (expense) => ({
  type: SAVE_EDITIONS,
  payload: expense,
});
