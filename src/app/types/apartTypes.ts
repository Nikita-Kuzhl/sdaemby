export interface IApartReq {
  page: number
  limit: number
  city?: number
  area?: number
  metro?: number
  sleep?: string
  priceFrom?: number
  priceTo?: number
  rooms?: number
  sort?: number
  checkbox?: string[]
}

export interface IApartUser {
  name: string
  email: string
  telephone: string
  avatar: string
}

export interface IApartCity {
  id: number
  name: string
}

export interface IApartMetro {
  id: number
  name: string
}

export interface IApartArea {
  id: number
  name: string
}

export interface IApartment {
  id: number
  img: string | string[]
  outside: string
  price: number
  rooms: number
  square: number
  description: string
  sleepingPlaces: string
  user: IApartUser
  city: IApartCity
  metro: IApartMetro
  area: IApartArea
  status: string
  gas_stove: string
  oven: string
  coffee_maker: string
  microwave: string
  tableware: string
  dishwasher: string
}

export interface IApartRes {
  totalItems: number
  totalPages: number
  currentPage: number
  apartment: IApartment[]
}
