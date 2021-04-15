const defaultState = {
  isAuth: true,
  user: {}
};

const SET_AUTH = 'SET_AUTH';
const SET_USER = 'SET_USER';

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return { ...state, isAuth: action.payload };
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export const setAuthAction = (payload) => ({ type: SET_AUTH, payload })
export const setUserAction = (payload) => ({ type: SET_USER, payload })
