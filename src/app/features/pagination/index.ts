import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface PaginationState {
  page: number
  pageApart: number
}

const initialState: PaginationState = {
  page: 1,
  pageApart: 1,
}

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    selectPageNews: (state: PaginationState, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    selectPageApart: (state: PaginationState, action: PayloadAction<number>) => {
      state.pageApart = action.payload
    },
  },
})
export const paginationReducer = paginationSlice.reducer
export const paginationAction = paginationSlice.actions
