import { createApi } from "@reduxjs/toolkit/query/react"
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query"
import gql from "graphql-tag"

import { CategoryModel, ProductsModel } from "./types"

const categoryQuery = () => gql`
  query Category {
    categories {
      id
      name
    }
  }
`
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
const productQuery = (slug: string) => gql`
  query Products {
    products(where: { slug: "${slug}" }) {
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
    getAllCategories: builder.query<CategoryModel, void>({
      query: () => ({ document: categoryQuery() })
    }),
    getAllProducts: builder.query<ProductsModel, number>({
      query: (first: number) => ({ document: productsQuery(first) })
    }),
    getProductBySlug: builder.query<ProductsModel, string>({
      query: (slug: string) => ({ document: productQuery(slug) })
    })
  })
})

export const { useGetAllProductsQuery, useGetProductBySlugQuery, useGetAllCategoriesQuery } = productsApi
