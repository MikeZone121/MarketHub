import { ReviewModel } from "../components/Organisms/Review/types"

export interface FilterModel {
  first?: number
  categories?: string[]
  search?: string
  orderBy?: "publishedAt_ASC" | "publishedAt_DESC" | string
  minPrice?: number
  maxPrice?: number
}

export interface AllProducts {
  products: []
  total: number
  skip: number
  limit: number
  type: string
}
export interface CategoryModel {
  categories: ProductCategory[]
}
export interface ProductsModel {
  products: ProductModel[]
}

export interface ProductModel {
  id: string
  name?: string
  price: number
  salePrice?: number
  description?: string
  slug?: string
  images: ProductImage[]
  categories?: ProductCategory[]
  reviews?: ReviewModel[]
}

export interface ProductImage {
  id?: string
  url?: string
  fileName?: string
}

export interface ProductCategory {
  id: string
  name?: string
  slug?: string
}

export interface CartItem extends ProductModel {
  cartQuantity: number
}

export interface CartState {
  cartItems: CartItem[]
  cartTotalQuantity: number
  cartTotalAmount: number
  cartPopUpIsOpen: boolean
}

export const initialCartState: CartState = {
  cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")!) : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  cartPopUpIsOpen: false
}

export interface WishlistItem extends ProductModel {
  wishlistQuantity: number
}

export interface WishlistState {
  wishlistItems: WishlistItem[]
  wishlistTotalQuantity: number
  wishlistTotalAmount: number
}

export const initialWishlistState: WishlistState = {
  wishlistItems: localStorage.getItem("wishlistItems") ? JSON.parse(localStorage.getItem("wishlistItems")!) : [],
  wishlistTotalQuantity: 0,
  wishlistTotalAmount: 0
}
