import React from 'react'
import MainLayout from '../layouts/MainLayout'

import { NextPage } from 'next'
import LandingContainer from '../src/containers/LandingContainer'

const index: NextPage = (props): JSX.Element => {
  const [client, setClient] = useState<boolean>(true)
  const [activeSlide, setActiveSlide] = useState<number>(0)
  const [fadeIn, setFadeIn] = useState<boolean>(false)
  const [activeButton, setActiveButton] = useState<number>()

  const selectRole = (str: string): void => {
    const y = document.querySelectorAll('.how-its-work__card-flipper')
    y.forEach((i) => {
      const t = i as HTMLElement
      if (str === 'client') {
        t.style.transform = 'rotateY(0deg)'
      } else {
        t.style.transform = 'rotateY(180deg)'
      }
    })

    setClient(!client)
    setActiveButton(undefined)
  }

  const nextSlide = (str: string): void => {
    if (str === 'right') {
      if (activeSlide < sliderCardContent.length - 1) {
        setActiveSlide(activeSlide + 1)
        setFadeIn(true)
      }
    }

    if (str === 'left') {
      if (activeSlide > 0) {
        setActiveSlide(activeSlide - 1)
        setFadeIn(true)
      }
    }
  }

  const selectActiveButton = (num: number): void => {
    if (activeButton === num) {
      setActiveButton(undefined)
    } else {
      setActiveButton(num)
    }
  }

  return (
    <MainLayout categories={props}>
      <LandingContainer />
    </MainLayout>
  )
}

export { getStaticProps } from '../src/utils/service'

export default index
