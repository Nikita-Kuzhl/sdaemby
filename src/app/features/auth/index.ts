import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  token?: string
  isAuth: boolean
}

const initialState: AuthState = {
  token: localStorage.getItem('token'),
  isAuth: localStorage.getItem('token') ? true : false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addToken: (state: AuthState, action: PayloadAction<string>) => {
      localStorage.setItem('token', action.payload)
      state.token = action.payload
      state.isAuth = true
    },
    delToken: (state: AuthState) => {
      localStorage.removeItem('token')
      state.token = ''
      state.isAuth = false
    },
  },
})
export const authReducer = authSlice.reducer
export const authAction = authSlice.actions
