import React, { useState, useEffect, useCallback, useRef, ChangeEvent, FormEvent } from 'react'
import { NextPage } from 'next'
import nextCookie from 'next-cookies'
import io from 'socket.io-client'

//components
import Dialog from '../../src/components/Chat/Dialog'
import Top from '../../src/components/Chat/Top'
import MessagesList from '../../src/components/Chat/MessagesList'
import Form from '../../src/components/Chat/Form'

//hooks
import useOutSideClick from '../../src/hooks/useOutsideClick'
import DashboardLayout from '../../layouts/DashboardLayout'

//types
import { MessageType, ActiveDialogType } from '../../src/components/Chat/Types'
import { ChatProps } from '../../src/common/Types'
import ColluctorInfo from '../../src/components/Chat/ColluctorInfo'
import { CollocutorType } from '../../src/components/Chat/Types'
import ChatFileUpload from '../../src/components/Chat/ChatFileUpload'

const socket = io('http://142.93.233.236:6001', {})

const Сhat: NextPage<ChatProps> = ({ jsonResponse, socketId, classicRooms }): JSX.Element => {
  const messageListRef = useRef<HTMLDivElement>(null)
  const [activeMessagesList, setActiveMessagesList] = useState<Array<MessageType>>([])
  const [fileList, setFileList] = useState<any>([])
  const [colluctor, setColluctor] = useState<CollocutorType>()
  const [activeDialog, setActiveDialog] = useState<ActiveDialogType>()
  const [isOpenDialogsPreview, setIsOpenDialogsPreview] = useState<boolean>(true)
  const [isFileUploadModalOpen, setIsFileUploadModalOpen] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')
  const [openSmiles, setOpenSmiles] = useState<boolean>(false)
  const [isColluctorClosed, setColuctorClosed] = useState<boolean>(true)

  const smilesBox = useRef<HTMLDivElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const { jwt_token } = nextCookie('ctx')

  useEffect(() => {
    socket.emit('join', 'gigroom_database_private-' + socketId)
    socket.emit('join', 'gigroom_database_private-bellRoom-' + socketId)
  }, [])

  useEffect(() => {
    if (!isColluctorClosed && isOpenDialogsPreview) setIsOpenDialogsPreview(false)
  }, [isColluctorClosed])

  useEffect(() => {
    if (!isColluctorClosed && isOpenDialogsPreview) setColuctorClosed(true)
  }, [isOpenDialogsPreview])

  useEffect(() => {
    console.log(colluctor)
  }, [colluctor])

  useEffect(() => {
    scrollToBottom()
  }, [activeDialog])

  useOutSideClick(smilesBox, () => {
    setOpenSmiles(false)
  })

  const scrollToBottom = useCallback(() => {
    messageListRef.current?.scrollTo(0, messageListRef.current.scrollHeight)
  }, [messageListRef])

  const getDialogMessages = (roomId: string, idDialog: number) => {
    fetch(`http://test.profiroom.com/Backend/api/getRoomMessages`, {
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
        if (activeDialog?.room) {
          socket.emit('leave', 'gigroom_database_private-' + activeDialog.room).off('message')
        }
        setActiveMessagesList(res[0])
        setActiveDialog({ dialog: idDialog, room: roomId })
        socket.emit('join', 'gigroom_database_private-' + roomId).on('message', (data: any) => {
          setActiveMessagesList((prev) => [...prev, data])
          scrollToBottom()
        })

        socket.on('disconnect', () => {
          return
        })

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

  const sendMessage = useCallback(
    (content: string, typeMessage: string) => {
      fetch(`http://test.profiroom.com/Backend/api/message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt_token}`,
        },
        body: JSON.stringify({
          author: jsonResponse.user.id,
          roomId: activeDialog?.room,
          chatType: 'classic',
          type: typeMessage,
          message: content,
        }),
      })
        .then((res) => res.json())
        .then(() => {
          scrollToBottom()
          setInputValue('')
        })
    },
    [activeDialog]
  )

  const fetchColluctor = useCallback(async (id: number) => {
    try {
      const colluctorRes = await fetch(
        `http://test.profiroom.com/Backend/api/getChatUser?id=${id}`,
        {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
          },
        }
      )
      const colluctorJson = await colluctorRes.json()
      setColluctor(colluctorJson.user)
    } catch (e) {
      setColluctor(undefined)
      console.log(e)
    }
  }, [])

  const openDialogsMenu = useCallback(() => {
    setIsOpenDialogsPreview((prev) => !prev)
  }, [])

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      setInputValue(event.target.value)
    },
    [inputValue]
  )

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (inputValue?.length > 0) {
      sendMessage(inputValue, 'string')
    }
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    /* 
    if (e.target.files?.length) {
      const formData = new FormData()
      formData.append('roomId', roomId)
    } */
  }

  const addEmoji = (e: any) => {
    const emoji = e.native
    setInputValue(inputValue + emoji)
  }

  const openEmoji = () => {
    setOpenSmiles(!openSmiles)
  }

  return (
    <DashboardLayout className="chat-page" userData={jsonResponse}>
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
          <div className="dialogs-preview__top-count">({classicRooms.length})</div>
        </div>
        {classicRooms.map(
          ({
            id,
            collocutorId,
            collocutorName,
            collocutorSurname,
            collocutorAva,
            roomId,
            message,
          }) => (
            <Dialog
              key={id}
              id={id}
              collocutorName={collocutorName}
              collocutorAva={collocutorAva}
              collocutorSurname={collocutorSurname}
              roomId={roomId}
              message={message}
              onClick={() => {
                fetchColluctor(collocutorId)
                getDialogMessages(roomId, id)
                setIsOpenDialogsPreview(false)
              }}
              user={jsonResponse.user}
              activeDialog={activeDialog}
            />
          )
        )}
      </div>
      <div className="messages-window">
        {activeDialog && (
          <div className="messages-window__messages-list-container">
            {colluctor && (
              <Top collocutor={colluctor} fileList={fileList} user={jsonResponse.user} />
            )}
            <MessagesList
              ref={messageListRef}
              activeMessagesList={activeMessagesList}
              messagesEndRef={messagesEndRef}
              user={jsonResponse.user}
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
              handleOpenModal={() => setIsFileUploadModalOpen(true)}
            />
          </div>
        )}
      </div>
      {colluctor && (
        <ColluctorInfo
          isClosed={isColluctorClosed}
          openColluctor={() => setColuctorClosed((prev) => !prev)}
          displayName={`${colluctor.collocutorName} ${colluctor.collocutorSurname}`}
          image={colluctor.collocutorAva}
          description={colluctor.description}
          commentsCount={colluctor.negative_comments_count + colluctor.positive_comments_count}
        />
      )}
      {isFileUploadModalOpen && activeDialog?.room && (
        <ChatFileUpload
          setIsFileUploadModalOpen={setIsFileUploadModalOpen}
          room={activeDialog?.room}
          sendMessage={sendMessage}
        />
      )}
    </DashboardLayout>
  )
}

export { chatProps as getServerSideProps } from '../../src/utils/auth'
export default Сhat
