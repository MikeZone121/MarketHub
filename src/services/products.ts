import { createApi } from "@reduxjs/toolkit/query/react"
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query"
import gql from "graphql-tag"

import { ProductsModel } from "./types"

const productsQuery = (first: number) => gql`
  query Products {
    products(first: ${first}) {
      createdAt
      name
      id
      price
      description
      slug
      salePrice
      images {
        id
        url
        fileName
      }
      categories {
        id
        name
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
    getAllProducts: builder.query<ProductsModel, number>({
      query: (first: number) => ({ document: productsQuery(first) })
    })
  })
})

export const { useGetAllProductsQuery } = productsApi
