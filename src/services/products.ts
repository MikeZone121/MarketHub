import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import gql from "graphql-tag"

const ASSETS = gql`
  query Assets {
    assets {
      createdAt
      id
      publishedAt
      fileName
      url
      updatedAt
    }
  }
`
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL
  }),
  endpoints: builder => ({
    getAllProducts: builder.query<any, any>({
      query: () =>
        `?query=query Assets %7Bassets %7B createdAt id publishedAt fileName url updatedAt%7D%7D&operationName=Assets`
    })
  })
})

export const { useGetAllProductsQuery } = productsApi
