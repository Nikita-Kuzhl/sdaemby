import { favoriteReducer } from './../features/favorite/index'
import { paramReducer } from './../features/param/index'
import { authReducer } from './../features/auth/index'
import { authApi } from './../service/authService'
import { paginationReducer } from './../features/pagination/index'
import { newsApi } from './../service/newsService'
import { configureStore } from '@reduxjs/toolkit'
import { apartApi } from '../service/apartService'
import { mainReducer } from '../features/main'

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [apartApi.reducerPath]: apartApi.reducer,
    main: mainReducer,
    favorite: favoriteReducer,
    pagination: paginationReducer,
    auth: authReducer,
    param: paramReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware, authApi.middleware, apartApi.middleware),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
