import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {client} from '../../api/client'
import Cookies from 'js-cookie';

const initialState = {
    user: null,
    isLoggedIn: false,
    token: (Cookies.get('token')) ? Cookies.get('token') : null
}

export const performLogin = createAsyncThunk('auth/login', async ({username, password}) => {
    const response = await client.encodedPost('/login', { username, password})
    response.username = username
    return response
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state, action) => {
            state.isLoggedIn = false;
            state.token = null
            Cookies.remove('token')
            state.user = null
        }
    },
    extraReducers: {
        [performLogin.fulfilled]: (state, action) => {
            if (action.payload.status !== 'error') {
                state.user = action.payload.user
                const token =  action.payload.message.token
                state.token = token
                Cookies.set('token', token, { expires: 1 });
                state.isLoggedIn = true
            } else {
                state.user = null
                state.token = null
                Cookies.remove('token')
                state.isLoggedIn = false
            }
        },
        [performLogin.rejected]: (state, action) => {
            state.user = null
            state.isLoggedIn = false
            state.token = null
            Cookies.remove('token')
        }
    }
})

export const { logout } = authSlice.actions

export default authSlice.reducer

export const selectIsLoggedIn = state => state.auth.isLoggedIn
export const selectUser = state => state.auth.user
export const selectToken = state => {
    return Cookies.get('token')
}
