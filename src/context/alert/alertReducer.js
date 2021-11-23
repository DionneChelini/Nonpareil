import { MESSAGE_FAILED, MESSAGE_SENT } from '../types';

const alerts = (state, action) => {
  switch (action.type) {
    case MESSAGE_SENT:
      return {
        ...state,
        messageSent: action.payload,
      };
    case MESSAGE_FAILED:
      return;
    default:
      return state;
  }
};

export default alerts;
