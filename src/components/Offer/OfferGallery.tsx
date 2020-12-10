import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import React from 'react'
import Carousel from '../Carousel/Carousel'
import { OfferGalleryProps } from './Types'

const OfferGallery: React.FC<OfferGalleryProps> = ({
  userOffer,
  handleFullCarousel,
}): JSX.Element => {
  return (
    <div className="offer__gallery" id="portfolio">
      <div
        role="presentation"
        className="offer__fullsize-icon-wrapper"
        onClick={() => handleFullCarousel()}
      >
        <img src="/svg/full-size.svg" alt="" />
      </div>
      <Carousel
        buttonNext={<RightOutlined />}
        buttonPrev={<LeftOutlined />}
        files={userOffer.files}
      >
        {userOffer.files.map((img: string, index: number) => (
          <div className="offer__gallery-item-wrapper" key={index}>
            <img
              className="offer__gallery-img"
              src={`https://profiroom.com/Backend/public/storage/offerFiles/big/${img}`}
              alt=""
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default OfferGallery
