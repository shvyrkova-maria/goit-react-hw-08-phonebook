import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contactsReducer from './contacts/contactsSlices';
import authReduser from './auth/authSlices';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  auth: authReduser,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
});

export { store };
