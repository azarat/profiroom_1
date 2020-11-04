export type SubcatalogProps = {
  catalog: {
    current_page: number
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string
    next_page_url: string
    path: string
    per_page: number
    prev_page_url: string
    to: number
    total: number
    data: DataTypes[]
  }
}

export type DataTypes = {
  comments_count: number
  id: number
  mainImage: string
  minPrice: number
  title: string
  averageRating: AverageTypes
  user: UserTypes
}

type AverageTypes = {
  averageMark: number
  politenessMark: number
  qualityMark: number
  termMark: number
}

type UserTypes = {
  avatar: string
  country: string
  description: string
  id: number
  name: string
  online: boolean
  rank_id: number
  surname: string
  views: number
  arbitration: ArbitrationTypes
  averageRating: AverageRatingTypes
  dealsCounts: DealsCountsTypes
}

type ArbitrationTypes = {
  all: number
  customer: number
  freelancer: number
}

type AverageRatingTypes = {
  freelancer: AverageTypes
  customer: CustomerTypes
}

type CustomerTypes = {
  averageMark: number
  contactLevel: number
  requirementsClarity: number
  taskClarity: number
}

type DealsCountsTypes = {
  EndedWorks: number
  QueuedOffers: number
  dealsAsCustomer: number
  inProgressOffers: number
}
