import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../store/features/userSlices';

const store = configureStore({
  reducer: {
    user: userReducer, 
  },
});

export default store;
