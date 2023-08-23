import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './';

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;