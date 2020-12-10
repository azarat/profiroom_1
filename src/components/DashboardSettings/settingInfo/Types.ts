import { UserType } from '../../Chat/Types'
export interface ILanguageProps {
  deleteComponent: () => void
  id: number
}

export interface IEducationProps {
  deleteComponent: () => void
  id: number
}

export interface IComplEducProps {
  deleteComponent: () => void
}

export interface IBasicComponentProps {
  user: UserType
}
