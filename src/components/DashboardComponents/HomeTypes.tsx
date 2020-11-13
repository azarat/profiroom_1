export type HomeTypes = {
  allDealsPerYears: number[]
  allDealsperMonths: number[]
  dealsCounts: DealsCountResponse
  pieChart: number[]
  purse: PurseTypes
  views: number
  avatar: string
  offerViews: offerView[]
  positiveCommentsFreelancer: commentsType[]
  negativeCommentsFreelancer: commentsType[]
}

export interface offerView {
  Views: number
  averageRating?: {
    averageMark: number
    politenessMark: number
    qualityMark: number
    termMark: number
  }
  id?: number
  minPrice?: number
  subCatImg: string
  title: string
}

export interface commentsType {
  author: {
    id: number
    name: string
    surname: string
    avatar: string
  }
  averageMark: string
  commentText: string
  commentator_id: number
  created_at: string
  id: 24
  laravel_through_key: 184
  offers: {
    id: number
    title: string
    description: string
    mainImage: string
    rating: null
    averageRating?: {
      averageMark: number
      politenessMark: number
      qualityMark: number
      termMark: number
    }
  }
  offers_id: number
  parent: number
  politenessMark: number
  qualityMark: number
  termMark: number
}

interface DealsCountResponse {
  EndedWorks: number
  QueuedOffers: number
  dealsAsCustomer: number
  inProgressOffers: number
}

export type DealsCountsTypes = {
  dealsCounts: DealsCountResponse
}

export type PurseTypes = {
  arbitration_count: number
  created_at: string
  customers_count: number
  deals_count: number
  deals_done_count: number
  deposited: number
  hold: number
  id: number
  summ: number
  updated_at: string
  user_id: number
  withdraw: number
  withdrawn: number
}
