import React from 'react'

//types
import { DialogPreviewProps } from './Types'

const Dialog: React.FC<DialogPreviewProps> = ({
  id,
  activeDialog,
  collocutorAva,
  message,
  collocutorName,
  collocutorSurname,
  user,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      role="presentation"
      className={`dialogs-preview__dialog ${
        activeDialog?.dialog === id ? 'dialogs-preview__dialog-active' : ''
      }`}
    >
      <div className="dialogs-preview__image-container">
        <img src={collocutorAva} className="dialogs-preview__image" alt="ava" />
      </div>
      <div className="dislogs-preview__info">
        <p className="dialogs-preview__date">
          {new Date(message[0]?.dateTime).setHours(
            new Date(message[0]?.dateTime).getHours() + new Date().getHours()
          ) > new Date().getTime()
            ? undefined
            : new Date(message[0]?.dateTime).toLocaleDateString()}
          {` `}
          {new Date(message[0]?.dateTime).toTimeString().substring(0, 5)}
        </p>
        <div className="dialogs-preview__username-container">
          <p className="dialogs-preview__username">{collocutorName}</p>
          <p className="dialogs-preview__username">{collocutorSurname}</p>
        </div>
        <div className="dialogs-preview__last-message">
          {user && +message[0]?.author === user.id ? (
            <p>
              Вы:{' '}
              {message[0]?.message.length > 15
                ? message[0]?.message.substring(0, 15) + `...`
                : message[0]?.message}
            </p>
          ) : (
            <p>
              {message[0]?.message.length > 15
                ? message[0]?.message.substring(0, 15) + `...`
                : message[0]?.message}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dialog
