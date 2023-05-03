import { createApi } from "@reduxjs/toolkit/query/react"
import gql from "graphql-tag"
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query"

const PRODUCTS = gql`
  query Products {
    products {
      createdAt
      name
      id
      price
      description
      slug
      images {
        id
        url
        fileName
      }
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
      query: () => ({ document: PRODUCTS })
    })
  })
})

export const { useGetAllProductsQuery } = productsApi
