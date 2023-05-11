import { createApi } from "@reduxjs/toolkit/query/react"
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query"
import gql from "graphql-tag"

import { CategoryModel, FilterModel, ProductsModel } from "./types"

const categoryFragment = gql`
  fragment Category_category on Category {
    id
    name
  }
`
const reviewFragment = gql`
  fragment Review_review on Review {
    id
    name
    email
    headline
    content
    rating
    createdAt
  }
`
const productFragment = gql`
  fragment Product_product on Product {
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
  }
`
const categoryQuery = () => gql`
  query Category {
    categories {
      ...Category_category
    }
  }
  ${categoryFragment}
`

const productsQuery = (query: string) => gql`
  query Products {
    products(
     ${query}
    ) {
   ...Product_product
      categories {
        ...Category_category
      }
    }
  }
  ${productFragment}
  ${categoryFragment}
`
const productQuery = (slug: string) => gql`
  query Products {
    products(where: { slug: "${slug}" }) {
      ...Product_product
      categories {
        ...Category_category
      }
      reviews( orderBy: publishedAt_DESC) {
        ...Review_review
      }
    }
  }
  ${reviewFragment}
  ${productFragment}
  ${categoryFragment}
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
    getAllProducts: builder.query<ProductsModel, FilterModel>({
      query: ({ first, categories, minPrice = 0, maxPrice = 10000, orderBy = "publishedAt_DESC" }: FilterModel) => {
        const query = `
            where: { 
              ${
                categories && categories?.length > 0 ? `categories_every: { id_in: ${JSON.stringify(categories)}}` : ""
              }, AND:{price_gte: ${minPrice}, price_lte: ${maxPrice}}
          }
        first: ${first}
        orderBy: ${orderBy}
        `
        return { document: productsQuery(query) }
      }
    }),
    getProductBySlug: builder.query<ProductsModel, string>({
      query: (slug: string) => ({ document: productQuery(slug) })
    })
  })
})

export const { useGetAllProductsQuery, useGetProductBySlugQuery, useGetAllCategoriesQuery } = productsApi
