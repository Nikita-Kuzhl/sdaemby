import { IAuthResp, IAuthReq, IRegReq, IUserInfo } from './../types/authTypes'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API,
  }),
  endpoints: (build) => ({
    signIn: build.mutation<IAuthResp, IAuthReq>({
      query: (data) => ({
        url: '/auth/signin',
        method: 'POST',
        body: data,
      }),
    }),
    signUp: build.mutation<IAuthResp, IRegReq>({
      query: (data) => ({
        url: '/auth/signup',
        method: 'POST',
        body: data,
      }),
    }),
    getInfoUser: build.query<IUserInfo, null>({
      query: () => ({
        url: '/auth/',
        headers: {
          Authorization: localStorage.getItem('token') || '',
        },
      }),
    }),
  }),
})
export const { useSignInMutation, useSignUpMutation, useGetInfoUserQuery } = authApi
