import React, { useState, useEffect, useCallback, useRef } from 'react'
import { NextPage } from 'next'
import nextCookie from 'next-cookies'
// import io from 'socket.io-client'

//components
import Dialog from '../src/components/Chat/DialogPreview'
import Top from '../src/components/Chat/Top'
import MessagesList from '../src/components/Chat/MessagesList'
import Form from '../src/components/Chat/Form'

//hooks
import useOutSideClick from '../src/hooks/useOutsideClick'

//types
import {
  RoomType,
  MessageType,
  ActiveDialogType,
  UserType,
  FileType,
} from '../src/components/Chat/Types'

// let socket: any
const socket: any = 23
// const socket: any = io('http://142.93.233.236:6001', {})

socket.on('anything')

let one: any
let newid

const Сhat: NextPage = (): JSX.Element => {
  const [isAuth, setAuth] = useState<boolean>(false)
  const [rooms, setRooms] = useState<Array<RoomType>>([])
  const [activeMessagesList, setActiveMessagesList] = useState<Array<MessageType>>([])
  const [fileList, setFileList] = useState<any>([])
  const [activeDialog, setActiveDialog] = useState<ActiveDialogType>()
  const [user, setUser] = useState<UserType>()
  const [isOpenDialogsPreview, setIsOpenDialogsPreview] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')
  const [socketId, setSocketId] = useState()
  const [file, setFile] = useState<FileType>()
  const [preview, setPreview] = useState<string>()
  const [openSmiles, setOpenSmiles] = useState<boolean>(false)
  // const [collocutorInfoOpen, setCollocutorInfoOpen] = useState<boolean>()

  const smilesBox = useRef<HTMLDivElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const { jwt_token } = nextCookie('ctx')

  useEffect(() => {
    if (isAuth) {
      // getChatDialogs()
    }
  }, [isAuth])

  useEffect(() => {
    if (!one) {
      if (jwt_token) {
        checkAuth()
      }
      one = 1
    }
    // scrollToBottom()
    // if (!socket) {
    //   socket = io('http://142.93.233.236:6001', {})
    //   socket.on('message', (data: any) => {
    //     console.log(data)
    //   })
    //   if (jwt_token) {
    //     checkAuth()
    //   }
    // rooms.forEach((el) => {
    //   //join rooms
    //   socket.emit('join', 'gigroom_database_private-' + socketId)
    //   socket.emit('join', 'gigroom_database_private-' + el.roomId)
    //   socket.emit('join', 'gigroom_database_private-' + 'classic' + socketId)
    //   //updateDialogs
    //   socket.on('collocutorsList', (data: any) => console.log(data))
    //   //typing
    //   socket.emit(user?.id, 'gigroom_database_private-' + el.roomId, user?.id)
    //   socket.on('typing', (data: any) => {
    //     console.log(data)
    //   })
    //   socket.on('stopTyping', (data: any) => {
    //     console.log(data)
    //   })
    //   //message
    //   socket.on('message', (data: any) => {
    //     console.log(data)
    //   })
    // })
    // }
  }, [])

  useOutSideClick(smilesBox, () => {
    setOpenSmiles(false)
  })

  const checkAuth = () => {
    fetch(`${process.env.NEXT_PUBLIC_API}api/checkAuthorization`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt_token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        res.auth && setAuth(true)
        getDataMin()
        const id = res.socketId
        setSocketId(id)
        newid = id
        socket.emit('join', 'gigroom_database_private-' + res.socketId)
        socket.emit('join', 'gigroom_database_private-bellRoom-' + res.socketId)
        console.log(res.socketId)
        console.log(socketId)
        getChatDialogs()
        socket.on('DealInfo', (data: any) => {
          console.log('dealData', data)
        })
      })
  }

  const getDataMin = () => {
    fetch(`${process.env.NEXT_PUBLIC_API}api/getUserMinInfo`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt_token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setUser(res)
      })
  }

  const getChatDialogs = () => {
    fetch(`https://profiroom.com/Backend/api/getChatclassicRooms`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt_token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        // res.forEach((el:) => {
        //   socket.emit('join', 'gigroom_database_private-' + el.roomId)
        //   socket.emit('join', 'gigroom_database_private-' + 'classic-' + newid) //расскоментить
        // })
        res.sort((a: any, b: any) =>
          new Date(a.message[0].dateTime) > new Date(b.message[0].dateTime) ? -1 : 1
        )
        socket.on('join', () => {
          console.log('asds')
        })
        socket.on('collocutorsList', (data: any) => {
          console.log('showNewMessage - ', data)
        })
        socket.on('message', (data: any) => {
          console.log('onMessage - ', data)
        })
        console.log(socket)
        setRooms(res)
      })
  }

  const getDialogMessages = (roomId: string, idDialog: number) => {
    fetch(`https://profiroom.com/Backend/api/getRoomMessages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt_token}`,
      },
      body: JSON.stringify({
        roomId: roomId,
        start: 0,
        chatType: 'classic',
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setActiveMessagesList(res[0])
        setActiveDialog({ dialog: idDialog, room: roomId })

        const newArr: Array<MessageType> = []
        res[0].forEach(({ type, message }: MessageType) => {
          if (type === 'file') {
            const file = JSON.parse(message)
            newArr.push(file[0])
          }
        })

        setFileList(newArr)
      })
  }

  const sendMessage = (content: string, typeMessage: string) => {
    fetch(`https://profiroom.com/Backend/api/message`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt_token}`,
      },
      body: JSON.stringify({
        author: user?.id,
        roomId: activeDialog?.room,
        chatType: 'classic',
        type: typeMessage,
        message: content,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        const newMessage: MessageType = res
        const arr = Array<MessageType>(newMessage)
        const updateArr = activeMessagesList.concat(arr)
        setActiveMessagesList(updateArr)
        setInputValue('')
      })
  }

  const openDialogsMenu = useCallback(() => {
    setIsOpenDialogsPreview(!isOpenDialogsPreview)
  }, [isOpenDialogsPreview])

  const handleChange = useCallback(
    (event: any) => {
      setInputValue(event.target.value)
    },
    [inputValue]
  )

  const handleSubmit = (event: React.FormEvent) => {
    if (inputValue?.length > 0) {
      sendMessage(inputValue, 'string')
    }
    if (file) {
      sendFile()
    }
    event.preventDefault()
  }

  const sendFile = () => {
    const data: any = new FormData()
    data.append('file', file)
    data.append('roomId', activeDialog?.room)

    fetch('https://profiroom.com/Backend/api/sendFile', {
      method: 'POST',
      body: data,
      headers: {
        Authorization: `Bearer ${jwt_token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => sendMessage(JSON.stringify(res), 'file'))
  }

  const handleImageChange = (e: any) => {
    e.preventDefault()

    const reader: any = new FileReader()
    const newFile: any = e.target.files[0]

    reader.onloadend = () => {
      setFile(newFile)
      setPreview(reader.result)
    }

    reader.readAsDataURL(newFile)
  }

  const addEmoji = (e: any) => {
    const emoji = e.native
    setInputValue(inputValue + emoji)
  }

  const openEmoji = () => {
    setOpenSmiles(!openSmiles)
  }

  // const scrollToBottom = () => {
  //   const el = messagesEndRef.current
  //   el?.scrollIntoView({ behavior: 'auto' })
  // }

  return (
    <div>
      <div
        className={`dialogs-preview
        ${isOpenDialogsPreview ? 'dialogs-preview__open' : 'dialogs-preview__close'}`}
      >
        <div
          className="dialogs-preview__open-button"
          onClick={openDialogsMenu}
          role="presentation"
        ></div>
        <div className="dialogs-preview__top">
          <div className="dialogs-preview__top-title">все сообщения</div>
          <div>({rooms.length})</div>
        </div>
        {rooms.map(({ id, collocutorName, collocutorSurname, collocutorAva, roomId, message }) => (
          <Dialog
            key={id}
            id={id}
            collocutorName={collocutorName}
            collocutorAva={collocutorAva}
            collocutorSurname={collocutorSurname}
            roomId={roomId}
            message={message}
            getDialogMessages={getDialogMessages}
            user={user}
            activeDialog={activeDialog}
          />
        ))}
      </div>
      <div className="messages-window">
        {activeDialog ? (
          <div className="messages-window__messages-list-container">
            <Top rooms={rooms} activeDialog={activeDialog} fileList={fileList} user={user} />
            <MessagesList
              activeMessagesList={activeMessagesList}
              messagesEndRef={messagesEndRef}
              user={user}
            />
            <Form
              handleSubmit={handleSubmit}
              inputValue={inputValue}
              handleChange={handleChange}
              smilesBox={smilesBox}
              openSmiles={openSmiles}
              addEmoji={addEmoji}
              handleImageChange={handleImageChange}
              openEmoji={openEmoji}
              preview={preview}
            />
          </div>
        ) : undefined}
      </div>
      {/* <div className={`collocutor ${'collocutor__close'}`}>
        <div className="collocutor__top"></div>
      </div> */}
    </div>
  )
}

export default Сhat
