export type subcatalogProps = {
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
    data: dataTypes[]
  }
}

export type dataTypes = {
  comments_count: number
  id: number
  mainImage: string
  minPrice: number
  title: string
  averageRating: averageTypes
  user?: userTypes
}

type averageTypes = {
  averageMark: number
  politenessMark: number
  qualityMark: number
  termMark: number
}

type userTypes = {
  avatar: string
  country: string
  description: string
  id: number
  name: string
  online: boolean
  rank_id: number
  surname: string
  views: number
  arbitration: arbitrationTypes
  averageRating: averageRatingTypes
  dealsCounts: dealsCountsTypes
}

type arbitrationTypes = {
  all: number
  customer: number
  freelancer: number
}

type averageRatingTypes = {
  freelancer: averageTypes
  customer: customerTypes
}

type customerTypes = {
  averageMark: number
  contactLevel: number
  requirementsClarity: number
  taskClarity: number
}

type dealsCountsTypes = {
  EndedWorks: number
  QueuedOffers: number
  dealsAsCustomer: number
  inProgressOffers: number
}
