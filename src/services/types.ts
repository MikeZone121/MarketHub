export interface AllProducts {
  products: []
  total: number
  skip: number
  limit: number
  type: string
}

export interface ProductsModel {
  products: ProductModel[]
}

export interface ProductModel {
  id: string
  name?: string
  price?: number
  salePrice?: number
  description?: string
  slug?: string
  images: ProductImage[]
  categories?: ProductCategory[]
}

export interface ProductImage {
  id?: string
  url?: string
  fileName?: string
}

export interface ProductCategory {
  id?: string
  name?: string
}
