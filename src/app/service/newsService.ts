import { INews } from './../types/newsTypes'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API,
  }),
  endpoints: (build) => ({
    getAllNews: build.query<INews, number>({
      query: (page) => ({ url: `/news/?page=${page}` }),
    }),
    getById: build.query<INews, number>({
      query: (id) => ({ url: `/news/${id}` }),
    }),
  }),
})
export const { useGetAllNewsQuery, useGetByIdQuery } = newsApi
