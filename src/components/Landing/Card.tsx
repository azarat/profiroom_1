import React, { MouseEventHandler, useState } from 'react'

//antd
import { Row, Col } from 'antd'

//types
import { CardContent } from './Types'

import Image from '../../assets/svg/shevron-blue.inline.svg'

const Card: React.FC<CardContent> = ({ id, image, title, description }): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const openCard: MouseEventHandler = (): void => {
    setIsOpen(!isOpen)
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
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={4}>
          <img src={image} alt="icon" />
        </Col>
        <Col span={16}>
          <p className="main-description__card-title">{title}</p>
        </Col>
        <Col>
          <Image
            className={
              isOpen
                ? 'main-description__card-button main-description__card-button-open'
                : 'main-description__card-button'
            }
            role="presentation"
          />
        </Col>
      </Row>
      <Row>
        <p className="main-description__card-description">{description}</p>
      </Row>
    </div>
  )
}

export default Card
