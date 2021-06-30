import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {client} from '../../api/client'

const initialState = {
  todos: [],
  totalCount: 0,
  pagesCount: 1,
  curPage: 1,
  status: 'idle',
  error: null,
  sortField: null,
  sortDirection: null,
}

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async ({page, sort_field, sort_direction}) => {
  const response = await client.get('/', { page, sort_field, sort_direction})
  return response
})

export const addNewTodo = createAsyncThunk(
    'todos/addNewTodo',
    async initialTodo => {
      const response = await client.post('/create', initialTodo)
      return response
    }
)

export const updateTodo = createAsyncThunk(
    'todos/updateTodo',
    async updatedTodo => {
      const response = await client.encodedPost(`/edit/${updatedTodo.id}`, {
        token: updatedTodo.token,text: updatedTodo.text, status: (updatedTodo.status) ? (updatedTodo.status) : null
      })
      response.data = {};
      response.data.id = updatedTodo.id;
      response.data.text = updatedTodo.text;
      response.data.status = updatedTodo.status;
      return response
    }
)

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setCurPage: (state, action) => {
      state.curPage = action.payload;
      state.status = 'idle'
      state.error = ''
    },
    setSortField: (state, action) => {
      state.sortField = action.payload;
      state.status = 'idle'
      state.error = ''
    },
    setSortDirection: (state, action) => {
      state.sortDirection = action.payload;
      state.status = 'idle'
      state.error = ''
    }
  },
  extraReducers: {
    [fetchTodos.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchTodos.fulfilled]: (state, action) => {
      if (action.payload.status !== 'error') {
        state.status = 'succeeded'
        state.todos = action.payload.message.tasks
        state.totalCount = Number(action.payload.message.total_task_count)
        state.pagesCount = Math.ceil(state.totalCount / 3)
      } else {
        state.status = 'failed'
        state.error = JSON.stringify(action.payload.message)
      }
    },
    [fetchTodos.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = JSON.stringify(action.error.message)
    },
    [addNewTodo.fulfilled]: (state, action) => {
      if (action.payload.status!=='error'){
        if (state.todos.length<3)
          state.todos.push(action.payload.message)
        state.totalCount = state.totalCount + 1
        state.pagesCount = Math.ceil(state.totalCount / 3)
        if (state.curPage!==state.pagesCount){
          state.status = 'idle'
          state.curPage = state.pagesCount
        }

      }
    },
    [updateTodo.fulfilled]: (state, action) => {
      if (action.payload.status==='ok'){
          const { id, text, status } = action.payload.data
          const existingTodo = state.todos.find(todo => todo.id === id)
          if (existingTodo) {
            existingTodo.text = text
            existingTodo.status = status
          }

      }
    }
  }
})

export const { todoAdded, todoUpdated, setCurPage, setSortField, setSortDirection } = todosSlice.actions

export default todosSlice.reducer

export const selectAllTodos = state => state.todos.todos
export const selectTodosCount = state => state.todos.totalCount
export const selectCurPage = state => state.todos.curPage
export const selectPagesCount = state => state.todos.pagesCount
export const selectSortField = state => state.todos.sortField
export const selectSortDirection = state => state.todos.sortDirection
