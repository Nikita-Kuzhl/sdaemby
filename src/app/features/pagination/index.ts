import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface PaginationState {
  page: number
}

const initialState: PaginationState = {
  page: 1,
}

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    selectPage: (state: PaginationState, action: PayloadAction<number>) => {
      state.page = action.payload
    },
  },
})
export const paginationReducer = paginationSlice.reducer
export const paginationAction = paginationSlice.actions
