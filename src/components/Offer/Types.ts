import {
  BasicTypes,
  UserTypes,
  ExtraTermsTypes,
  AverageTypes,
  OfferFaqTypes,
  ExtraChangesTypes,
  ExtraCommercialTypes,
} from '../OfferCard/Types'

export type CarouselFullProps = {
  userOffer: IUserOffer
  isFullSizeOpen: boolean
  handleFullCarousel: () => void
}

export type OfferGalleryProps = {
  userOffer: IUserOffer
  handleFullCarousel: () => void
}

interface IUserOffer {
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
}
