import React from 'react'
import { ColluctorInfoProps } from './Types'
import { StarOutlined } from '@ant-design/icons'

const ColluctorInfo: React.FC<ColluctorInfoProps> = ({
  image,
  displayName,
  commentsCount,
  description,
  isClosed,
  openColluctor,
}): JSX.Element => {
  return (
    <div className={`colluctor-info-wrapper ${isClosed ? 'colluctor-info-wrapper-closed' : ''}`}>
      <img className="colluctor-info-image" src={image} alt={displayName} />
      <h3 className="colluctor-info-name">{displayName}</h3>
      <div className="colluctor-info-stars">
        <StarOutlined />
        <StarOutlined />
        <StarOutlined />
        <StarOutlined />
        <StarOutlined />
      </div>
      <div className="colluctor-info-comments-count">({commentsCount} отзывов)</div>
      {description !== '' && (
        <>
          <hr className="colluctor-info-line" />
          <div className="colluctor-info-description">{description}</div>
        </>
      )}
      <button className="colluctor-info-button" onClick={openColluctor}></button>
    </div>
  )
}

export default ColluctorInfo
