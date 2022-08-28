import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ParamState {
  favorites: Array<number>
}
const initialState: ParamState = {
  favorites: JSON.parse(localStorage.getItem('favorite')) || [],
}
export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state: ParamState, action: PayloadAction<number>) => {
      state.favorites.push(action.payload)
      localStorage.setItem('favorite', JSON.stringify(state.favorites))
    },
    delFavorite: (state: ParamState, action: PayloadAction<number>) => {
      state.favorites.splice(state.favorites.indexOf(action.payload), 1)
      localStorage.setItem('favorite', JSON.stringify(state.favorites))
    },
  },
})
export const favoriteReducer = favoriteSlice.reducer
export const favoriteAction = favoriteSlice.actions
