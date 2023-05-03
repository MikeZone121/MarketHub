import { createApi } from "@reduxjs/toolkit/query/react"
import gql from "graphql-tag"
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query"

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
  baseQuery: graphqlRequestBaseQuery({
    url: import.meta.env.VITE_API_URL
  }),
  endpoints: builder => ({
    getAllProducts: builder.query<any, any>({
      query: () => ({ document: ASSETS })
    })
  })
})

export const { useGetAllProductsQuery } = productsApi
