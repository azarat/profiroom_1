import { ChangeEvent, FormEvent, RefObject } from 'react'

export type MessageType = {
  author: string
  authorAva: string
  dateTime: string
  message: string
  type: string
  chatType?: string
  roomId?: string
}

export type ActiveDialogType = {
  dialog?: number
  room?: string | undefined
}

export type RoomType = {
  collocutorAva: string
  collocutorId: number
  collocutorName: string
  collocutorOnline: boolean
  collocutorSurname: string
  created_at: string
  id: number
  message: Array<MessageType>
  roomId: string
  status: string
  unread: string
  updated_at: string
}

export type FileType = {
  created_at: string
  fileName: string
  fileType: string
  id: number
  link: string
  size: number
  updated_at: string
}

export type UserType = {
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

export type TopProps = {
  collocutor: CollocutorType
  fileList: Array<FileType>
  user?: UserType
}

export type FileComponentProps = {
  index: number
  fileLink: string
  typeFile: string
  nameFile: string
}

export type DialogPreviewProps = {
  id: number
  roomId: string
  activeDialog?: ActiveDialogType
  collocutorAva: string
  message: Array<MessageType>
  collocutorName: string
  collocutorSurname: string
  user: UserType | undefined
  onClick: () => void
}

export type MessageProps = {
  author: string
  user: UserType | undefined
  message: string
  dateTime: string
}

export type MessagesListProps = {
  activeMessagesList: Array<MessageType>
  messagesEndRef: any
  user?: UserType
}

export type FormProps = {
  handleSubmit: (e: FormEvent) => void
  inputValue: string
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  smilesBox: RefObject<HTMLDivElement>
  openSmiles: boolean
  addEmoji: (e: any) => void
  handleImageChange: (e: ChangeEvent<HTMLInputElement>) => void
  openEmoji: () => any
}

export type ColluctorInfoProps = {
  image: string
  displayName: string
  commentsCount: number
  isClosed: boolean
  description: string
  openColluctor: () => void
}

export type CollocutorType = {
  arbitration: { freelancer: number; customer: number; all: number }
  avatar: string
  averageRating: {
    freelancer: { averageMark: number; qualityMark: number; termMark: number; politenessMark: 0 }
    customer: {
      averageMark: number
      requirementsClarity: number
      taskClarity: number
      contactLevel: 0
    }
  }
  collocutorAva: string
  collocutorId: number
  collocutorName: string
  collocutorOnline: false
  collocutorSurname: string
  comments_customer_count: number
  comments_freelancer_count: number
  country: null
  dealsCounts: {
    inProgressOffers: number
    QueuedOffers: number
    EndedWorks: number
    dealsAsCustomer: number
  }
  description: string
  id: number
  name: string
  negative_comments_count: number
  online: boolean
  positive_comments_count: number
  rating: number
  roomId: string
  surname: string
  views: number
}

export interface IChatFileUploadProps {
  setIsFileUploadModalOpen: (arg0: boolean) => void
  room: string
  sendMessage: (content: string, type: string) => void
}
