import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ParamState {
  area: number
  list: string
  rooms: number
  priceTo: number
  priceFrom: number
  metro: number
  sleepingPlaces: string
  sort: number
  checkbox: string[]
}
const initialState: ParamState = {
  area: sessionStorage.getItem('area') === null ? null : Number(sessionStorage.getItem('area')),
  list: sessionStorage.getItem('list'),
  rooms: sessionStorage.getItem('rooms') === null ? null : Number(sessionStorage.getItem('rooms')),
  priceTo:
    sessionStorage.getItem('priceTo') === null ? null : Number(sessionStorage.getItem('priceTo')),
  priceFrom:
    sessionStorage.getItem('priceFrom') === null
      ? null
      : Number(sessionStorage.getItem('priceFrom')),
  metro: sessionStorage.getItem('metro') === null ? null : Number(sessionStorage.getItem('metro')),
  sleepingPlaces:
    sessionStorage.getItem('sleepingPlaces') === null
      ? null
      : String(sessionStorage.getItem('sleepingPlaces')),
  sort: sessionStorage.getItem('sort') === null ? null : Number(sessionStorage.getItem('sort')),
  checkbox: JSON.parse(sessionStorage.getItem('checkbox'))
    ? JSON.parse(sessionStorage.getItem('checkbox'))
    : [],
}

export const paramSlice = createSlice({
  name: 'param',
  initialState,
  reducers: {
    selectCheckbox: (state: ParamState, action: PayloadAction<string[]>) => {
      // if (action.payload.length < 1) {
      //   sessionStorage.removeItem('checkbox')
      //   state.checkbox = []
      //   return
      // }
      state.checkbox = action.payload
      sessionStorage.setItem('checkbox', JSON.stringify(state.checkbox))
    },
    delChecbox: (state: ParamState, action: PayloadAction<string>) => {
      state.checkbox.splice(state.checkbox.indexOf(action.payload), 1)
      sessionStorage.setItem('checkbox', JSON.stringify(state.checkbox))
    },
    selectList: (state: ParamState, action: PayloadAction<boolean>) => {
      sessionStorage.setItem('list', String(action.payload))
      state.list = String(action.payload)
    },
    selectArea: (state: ParamState, action: PayloadAction<number>) => {
      // if (action.payload === undefined) {
      //   sessionStorage.removeItem('area')
      //   return (state.area = null)
      // }
      sessionStorage.setItem('area', String(action.payload))
      state.area = action.payload
    },
    selectRooms: (state: ParamState, action: PayloadAction<number>) => {
      // if (action.payload === undefined) {
      //   sessionStorage.removeItem('rooms')
      //   return (state.rooms = null)
      // }
      sessionStorage.setItem('rooms', String(action.payload))
      state.rooms = action.payload
    },
    selectPriceTo: (state: ParamState, action: PayloadAction<number>) => {
      // if (action.payload === undefined) {
      //   sessionStorage.removeItem('priceTo')
      //   return (state.priceTo = null)
      // }
      sessionStorage.setItem('priceTo', String(action.payload))
      state.priceTo = action.payload
    },
    selectPriceFrom: (state: ParamState, action: PayloadAction<number>) => {
      // if (action.payload === undefined) {
      //   sessionStorage.removeItem('priceFrom')
      //   return (state.priceFrom = null)
      // }
      sessionStorage.setItem('priceFrom', String(action.payload))
      state.priceFrom = action.payload
    },
    selectMetro: (state: ParamState, action: PayloadAction<number>) => {
      // if (action.payload === undefined) {
      //   sessionStorage.removeItem('metro')
      //   return (state.metro = null)
      // }
      sessionStorage.setItem('metro', String(action.payload))
      state.metro = action.payload
    },
    selectSleepingPlaces: (state: ParamState, action: PayloadAction<string>) => {
      // if (action.payload === undefined) {
      //   sessionStorage.removeItem('sleepingPlaces')
      //   return (state.sleepingPlaces = null)
      // }
      sessionStorage.setItem('sleepingPlaces', String(action.payload))
      state.sleepingPlaces = action.payload
    },
    selectSort: (state: ParamState, action: PayloadAction<number>) => {
      // if (action.payload === null) {
      //   sessionStorage.removeItem('sort')
      //   return (state.sort = null)
      // }
      sessionStorage.setItem('sort', String(action.payload))
      state.sort = action.payload
    },
    clearParam: (state: ParamState) => {
      sessionStorage.removeItem('area')
      sessionStorage.removeItem('rooms')
      sessionStorage.removeItem('priceTo')
      sessionStorage.removeItem('priceFrom')
      sessionStorage.removeItem('metro')
      sessionStorage.removeItem('sleepingPlaces')
      sessionStorage.removeItem('checkbox')
      state.checkbox = []
      state.area = null
      state.rooms = null
      state.priceTo = null
      state.priceFrom = null
      state.metro = null
      state.sleepingPlaces = null
    },
  },
})
export const paramReducer = paramSlice.reducer
export const paramAction = paramSlice.actions
