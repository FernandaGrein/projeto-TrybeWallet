import { ADD_EMAIL } from '../actions';

const INICIAL_STATE = {
  email: '',
};

const userReducer = (state = INICIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
  case ADD_EMAIL: {
    return {
      ...state,
      email: payload,
    };
  }
  default:
    return state;
  }
};

export default userReducer;
