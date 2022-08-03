import { AppDispatch, RootState } from '../store'
import axios from 'axios'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const api = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    'Content-Type': 'application/json',
  },
})
