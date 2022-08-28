import { IApartArea, IApartCity, IApartMetro, IApartReq, IApartRes } from './../types/apartTypes'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const apartApi = createApi({
  reducerPath: 'apartApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API,
  }),
  endpoints: (build) => ({
    getApart: build.query<IApartRes, IApartReq>({
      query: ({
        page,
        limit,
        city,
        area,
        metro,
        sleep,
        priceFrom,
        priceTo,
        rooms,
        sort,
        checkbox,
      }) => ({
        url: `/apart/?limit=${limit}&page=${page}&city=${city}${area ? `&area=${area}` : ''}${
          metro ? `&metro=${metro}` : ''
        }${sleep ? `&sleep=${sleep}` : ''}${priceFrom ? `&price_from=${priceFrom}` : ''}${
          priceTo ? `&price_to=${priceTo}` : ''
        }${rooms ? `&rooms=${rooms}` : ''}${sort ? `&sort=${sort}` : ''}${
          checkbox
            ? checkbox.map((i) => {
                return `&${i}=1`
              })
            : ''
        }`.replace(/[\s.,%]/g, ''),
      }),
    }),
    getCity: build.query<IApartCity[], null>({
      query: () => ({
        url: '/apart/city',
      }),
    }),
    getArea: build.query<IApartArea[], number>({
      query: (id) => ({
        url: `/apart/area/${id}`,
      }),
    }),
    getMetro: build.query<IApartMetro[], number>({
      query: (id) => ({
        url: `/apart/metro/${id}`,
      }),
    }),
  }),
})
export const { useGetApartQuery, useGetAreaQuery, useGetCityQuery, useGetMetroQuery } = apartApi
