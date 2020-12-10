import React, { forwardRef, RefObject } from 'react'

//components
import Message from './Message'
import File from './FileComponent'

//types
import { MessagesListProps, FileType } from './Types'

const MessagesList = forwardRef<HTMLDivElement, MessagesListProps>(
  ({ activeMessagesList, messagesEndRef, user }, ref) => {
    return (
      <div
        className="messages-window__messages-list-wrapper"
        ref={ref as RefObject<HTMLDivElement>}
      >
        <div className="messages-window__messages-list">
          {activeMessagesList.map(({ author, dateTime, message, type }, index: number) => {
            let files: FileType[] = []
            if (type === 'file' && message !== '"wrong"') {
              files = JSON.parse(message)
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
                  files.length &&
                  files.map(({ id, link, fileName, fileType }) => {
                    return (
                      <File
                        key={id}
                        index={index}
                        fileLink={link}
                        typeFile={fileType}
                        nameFile={fileName}
                      />
                    )
                  })
                )}
              </div>
            )
          })}
          <div ref={messagesEndRef}></div>
        </div>
      </div>
    )
  }
)

MessagesList.displayName = 'MessagesList'
export default MessagesList
