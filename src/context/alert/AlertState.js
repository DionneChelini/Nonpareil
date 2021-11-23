import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import { MESSAGE_SENT, MESSAGE_FAILED } from '../types';

const AlertState = (props) => {
  const initialState = {
    messageSent: null,
    messageFailed: null,
  };

  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setMessageSent = (bool) => {
    if (true) {
      dispatch({ type: MESSAGE_SENT, payload: bool });
    } else {
      dispatch({ type: MESSAGE_FAILED, payload: bool });
    }
  };

  return (
    <AlertContext.Provider
      value={{
        messageSent: state.messageSent,
        setMessageSent,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
