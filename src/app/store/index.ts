import { paginationReducer } from './../features/pagination/index'
import { newsApi } from './../service/newsService'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
    pagination: paginationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
