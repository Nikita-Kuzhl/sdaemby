import { INews, INewsItem } from './../types/newsTypes'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API,
  }),
  endpoints: (build) => ({
    getAllNews: build.query<INews, { page: number; search?: string }>({
      query: ({ page, search }) => ({
        url: `/news/?page=${page}${search ? `&search=${search}` : ''}`,
      }),
    }),
    getById: build.query<INewsItem, number>({
      query: (id) => ({ url: `/news/item/${id}` }),
    }),
    getThree: build.query<INewsItem[], null>({
      query: () => ({ url: '/news/rand/' }),
    }),
    getFive: build.query<INewsItem[], null>({
      query: () => ({ url: '/news/main' }),
    }),
  }),
})
export const { useGetAllNewsQuery, useGetByIdQuery, useGetThreeQuery, useGetFiveQuery } = newsApi
