import React, { MouseEventHandler, useState } from 'react'

// Types
import { CardContent } from '../Types'
// Svg
import Image from '../../../assets/svg/shevron-blue.inline.svg'

const Card: React.FC<CardContent> = ({ image, title, description }): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const openCard: MouseEventHandler = (): void => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div
      className={
        isOpen
          ? 'main-description__card main-description__card-open'
          : 'main-description__card main-description__card-close'
      }
      role="presentation"
      onClick={openCard}
    >
      <div className="main-description__card-header">
        <img src={image} alt="icon" />
        <p className="main-description__card-title">{title}</p>
        <Image
          className={
            isOpen
              ? 'main-description__card-button main-description__card-button-open'
              : 'main-description__card-button'
          }
          role="presentation"
        />
      </div>
      <p className="main-description__card-description">{description}</p>
    </div>
  )
}

export default Card
