import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import React from 'react'
import Carousel from '../Carousel/Carousel'
import { CarouselFullProps } from './Types'

const CarouselFull: React.FC<CarouselFullProps> = ({
  userOffer,
  isFullSizeOpen,
  handleFullCarousel,
}): JSX.Element => {
  return (
    <div className={`offer__fullsize ${isFullSizeOpen ? 'offer__fullsize--open' : ''}`}>
      <div className="offer__fullsize-wrapper">
        <div
          className="offer__fullsize-close-icon"
          role="presentation"
          onClick={() => handleFullCarousel()}
        ></div>
        <Carousel
          buttonNext={<RightOutlined />}
          buttonPrev={<LeftOutlined />}
          files={userOffer.files}
          open={isFullSizeOpen}
        >
          {userOffer.files.map((img: string, index: number) => (
            <div className="offer__gallery-item-wrapper--full" key={index}>
              <img
                className="offer__gallery-img--full"
                src={`https://profiroom.com/Backend/public/storage/offerFiles/big/${img}`}
                alt=""
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default CarouselFull
