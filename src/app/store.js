import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todoList/todosSlice';
import modals from '../features/modals/modalsSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todosReducer,
    modals
  },
});
