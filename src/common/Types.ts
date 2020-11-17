import { JsonResponseType } from '../components/Header/DashboardHeader/Types'
import { UserType } from '../components/Chat/Types'

export type DashboardProps = {
  jsonResponse: JsonResponseType
}

export type ChatProps = {
  socketId: string
  classicRooms: any[]
  jsonResponse: {
    user: UserType
  }
}

export type DashboardLayoutProps = {
  className?: string
  children: React.ReactNode
  title?: string
  userData: any
}
