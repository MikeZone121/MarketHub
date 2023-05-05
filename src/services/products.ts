import { createApi } from "@reduxjs/toolkit/query/react"
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query"
import gql from "graphql-tag"

import { ProductsModel } from "./types"

const PRODUCTS = gql`
  query Products {
    products {
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
    getAllProducts: builder.query<ProductsModel, void>({
      query: () => ({ document: PRODUCTS })
    })
  })
})

export const { useGetAllProductsQuery } = productsApi
