import { authReducer } from './../features/auth/index'
import { authApi } from './../service/authService'
import { paginationReducer } from './../features/pagination/index'
import { newsApi } from './../service/newsService'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    pagination: paginationReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware, authApi.middleware),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
