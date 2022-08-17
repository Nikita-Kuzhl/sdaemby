import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface MainState {
  metro: number
  area: number
}

const initialState: MainState = {
  metro: 0,
  area: 0,
}

export const mainSlice = createSlice({
  name: 'mainParam',
  initialState,
  reducers: {
    selectParamMetro: (state: MainState, action: PayloadAction<number>) => {
      state.metro = action.payload
    },
    selectParamArea: (state: MainState, action: PayloadAction<number>) => {
      state.area = action.payload
    },
  },
})
export const mainReducer = mainSlice.reducer
export const mainAction = mainSlice.actions
