export interface ReviewsModel {
  reviews: ReviewModel[]
}
export interface ReviewModel {
  id: string
  name: string
  email: string
  headline: string
  content: string
  rating: number
  createdAt: Date
}
