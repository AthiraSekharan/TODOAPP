import { configureStore } from '@reduxjs/toolkit';
import todosSlice from '../slice/todoslice';

 const store = configureStore({
  reducer: {
    todos: todosSlice
  },
});
export default store