import React, { useMemo } from 'react'

//types
import { MessageProps } from './Types'

const Message: React.FC<MessageProps> = ({ author, user, message, dateTime }) => {
  const date = useMemo<Date>(() => new Date(dateTime), [])
  const currentDate = useMemo<number>(() => new Date().getTime(), [])
  return (
    <>
      <div
        className={` ${
          +author === user?.id ? 'messages-window__message' : 'messages-window__message-collocutor'
        }`}
      >
        {message}
      </div>
      <div className="messages-window__message-date">
        {date.getTime() > currentDate + 1000 * 60 * 60 * 24
          ? `${date.toLocaleDateString()}`
          : `${date.toLocaleTimeString().slice(0, -3)}`}
      </div>
    </>
  )
}

export default Message
