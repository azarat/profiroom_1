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
  avatar: string
  id?: number
  name: string
  rank_id: number
  rating: number
  role_id: number
  surname: string
}

export type TopProps = {
  rooms: Array<RoomType>
  activeDialog: ActiveDialogType
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
  getDialogMessages: (roomId: string, id: number) => void
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
  handleSubmit: (e: React.FormEvent) => void
  inputValue: string
  handleChange: (e: React.FormEvent) => void
  smilesBox: any
  openSmiles: boolean
  addEmoji: (e: any) => void
  handleImageChange: (e: React.FormEvent) => void
  openEmoji: () => any
  preview?: string
}
