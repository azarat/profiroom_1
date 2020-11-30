export type MobileMenuProps = {
  isOpenMenu: boolean
  userData: any
  openMenu: () => void
}

export type SwitchProps = {
  isClient: boolean
  selectRole: () => void
}

export type Response = {
  answerTime: any
  arbitration: any
  avatar: string
  averageRating: any
  birthday: string
  busy: number
  checked: number
  city: string
  country: string
  created_at: string
  dealsCounts: any
  description: string
  email: string
  email_verified_at: string
  gender: string
  id: number
  inRoom: string
  levelChanged: any
  name: string
  nikname: string
  online: boolean
  rank_id: number
  rating: number
  role_id: number
  socketId: string
  surname: string
  updated_at: string
  views: number
}

export type JsonResponseType = {
  jsonResponse: Response
}

export type DashboardHeaderProps = {
  userData: Response
}
