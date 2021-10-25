import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../features/user/userSlice"
import movieReducer from '../features/movie/movieSlice';
export const store = configureStore({
  reducer: {
    movie:movieReducer,
    user:userReducer
  },
});
