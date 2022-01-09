import {SAVE_INFO} from '../constants';

const initialState = {
  firstName: null,
  secondName: null,
  email: null,
  number: null,
};

const InfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_INFO:
      return action.payload;
    default:
      return state;
  }
};
export default InfoReducer;
