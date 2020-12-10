import { JsonResponseType } from '../Header/DashboardHeader/Types'

export type DashboardFinanceProps = {
  userFinanceResponse: UserFinanceResponseTypes
  jsonResponse: JsonResponseType
  userFinanceGraphResponse: { graph: GraphTypes[] }[]
}

type UserFinanceResponseTypes = {
  history: HistoryTypes[]
  purse: PurseTypes
}

export type HistoryTypes = {
  amount: number
  created_at: string
  trnsactonType: string
  isoDate: string
  sender: SenderTypes
  OffersTitle: string
  deal_id: number
  dealer_id: number
  income: number
  recipient: number
}

type SenderTypes = {
  avatar: string
  name: string
  surname: string
}

type PurseTypes = {
  arbitration_count: number
  created_at: string
  dealers_count: number
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

export type UserFinanceGraphResponseTypes = {
  graph: { graph: GraphTypes[] }
}
type GraphTypes = {
  down: number
  up: number
}

export type GraphicProps = {
  history: HistoryTypes[]
}
export type PaymenHistoryProps = {
  history: HistoryTypes[]
  openHistory: (arg0: boolean) => void
  isHistoryOpen: boolean
}
export type FinanceContainerProps = {
  userFinanceResponse: UserFinanceResponseTypes
  userFinanceGraphResponse: { graph: GraphTypes[] }[]
}
