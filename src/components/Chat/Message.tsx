import React from 'react'

//types
import { MessageProps } from './Types'

const Message: React.FC<MessageProps> = ({ author, user, message, dateTime }) => {
  return (
    <div
      className={` ${
        +author === user?.id ? 'messages-window__message' : 'messages-window__message-collocutor'
      }`}
    >
      {message}
      <div
        className={` ${
          +author === user?.id
            ? 'messages-window__message-time-user'
            : 'messages-window__message-time-collocutor'
        }`}
      >
        <p>
          {' '}
          {new Date(dateTime).setHours(new Date(dateTime).getHours() + new Date().getHours()) >
          new Date().getTime()
            ? undefined
            : new Date(dateTime).toLocaleDateString()}
          {` `}
          {new Date(dateTime).toTimeString().substring(0, 5)}
        </p>
      </div>
    </div>
  )
}

export default Message
