export type ExtraListTypes = {
  name: string | null
  price: number | null
}

export type CustomArrowProps = {
  className?: string
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler<any>
  currentSlide?: number
  slideCount?: number
}

export type OfferCardPropsTypes = {
  comments_count: number
  mainImage: string
  minPrice: number
  title: string
  id: number
  user: UserTypes
  averageRating: AverageTypes
}

export type OfferTypes = {
  offer: UserOfferTypes
}

export type UserOfferTypes = {
  userOffer: {
    comments_count: number
    created_at: string | null
    id: number
    mainImage: string
    minPrice: number
    title: string
    basic: BasicTypes
    description: string
    user: UserTypes
    files: string[]
    extra_changes: ExtraChangesTypes
    extra_commercial: ExtraCommercialTypes
    extra_terms: ExtraTermsTypes[]
    averageRating: AverageTypes
    offer_faq: OfferFaqTypes[]
    positive_comments_count: number
    negative_comments_count: number
    positiveComments: IComments[]
    negativeComments: IComments[]
  }
}

export type BasicTypes = {
  changes: number
  description: string
  id: number
  offers_id: number
  price: number
  term: number
  title: string
}

export type ExtraChangesTypes = {
  count: number
  id: number
  offers_id: number
  price: number
  published: number
}

export type ExtraCommercialTypes = {
  id: number
  offers_id: number
  price: number
  published: number
}

export type ExtraTermsTypes = {
  conditions: number
  count_days: number
  id: number
  offers_id: number
  package: string
  price: number
  published: number
}

export type AverageTypes = {
  averageMark: number
  politenessMark: number
  qualityMark: number
  termMark: number
}
export type OfferFaqTypes = {
  answer: string
  id: number
  offers_id: number
  question: 'string'
}

export type UserTypes = {
  avatar: string
  country: string
  description: string
  name: string
  online: boolean
  surname: string
  userOffers?: UserOffersTypes[]
}

export type UserOffersTypes = {
  comments_count: number
  id: number
  mainImage: 'https://profiroom.com/Backend/public/storage/offerFiles/big/qiASz4t4enw3fCpaf25a1f4nDCSIXEDmq1DlpxTC.jpeg'
  minPrice: number
  title: 'Test'
  averageRating: AverageTypes
}

export interface IComments {
  commentText: string
  commentator_id: number
  created_at: string
  id: number
  offers_id: number
  parent: number
  politenessMark: number
  qualityMark: number
  termMark: number
  updated_at: string
  author: {
    avatar: string
    id: number
    name: string
    online: boolean
    surname: string
    views: number
  }
  arbitration: {
    all: number
    customer: number
    freelancer: number
  }
  averageRating: {
    customer: {
      averageMark: number
      contactLevel: number
      requirementsClarity: number
      taskClarity: number
    }
    freelancer: {
      averageMark: number
      politenessMark: number
      qualityMark: number
      termMark: number
    }
  }
  dealsCounts: {
    EndedWorks: number
    QueuedOffers: number
    dealsAsCustomer: number
    inProgressOffers: number
  }
}
