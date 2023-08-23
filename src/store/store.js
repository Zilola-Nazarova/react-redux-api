import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/usersSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
