import React from 'react'

//components
import Message from './Message'
import File from './FileComponent'

//types
import { MessagesListProps } from './Types'

const MessagesList: React.FC<MessagesListProps> = ({
  activeMessagesList,
  messagesEndRef,
  user,
}) => {
  return (
    <div className="messages-window__messages-list">
      {activeMessagesList.map(({ author, dateTime, message, type }, index: number) => {
        let file
        let fileLink
        let typeFile
        let nameFile

        if (type === 'file') {
          file = JSON.parse(message)
          const { link, fileName, fileType } = file[0]
          fileLink = link
          typeFile = fileType
          nameFile = fileName
        }
        return (
          <div
            key={index}
            className={`${
              +author === user?.id
                ? 'messages-window__message-container-author'
                : 'messages-window__message-container-collocutor'
            }`}
          >
            {type === 'string' ? (
              <Message author={author} dateTime={dateTime} message={message} user={user} />
            ) : (
              <File index={index} fileLink={fileLink} typeFile={typeFile} nameFile={nameFile} />
            )}
          </div>
        )
      })}
      <div ref={messagesEndRef}></div>
    </div>
  )
}

export default MessagesList
