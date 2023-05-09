import { ProductCategory } from "../../../services/types"

export interface CardProps {
  id?: string
  title?: string
  subtitle?: string
  description?: string
  image?: string
  price?: string
  categories?: ProductCategory[]
}
