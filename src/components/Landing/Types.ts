export type CardContent = {
  id: number
  title: string
  image: string
  description: string
}

export type SliderData = {
  id: number
  clientContent: string
  freelancerContent: string
  clientImage: string
  freelancerImage: string
}

export type SliderProps = {
  client: boolean
  selectRole: (str: string) => void
  activeSlide: number
  nextSlide: (str: string) => void
  data: Array<SliderData>
  fadeIn: boolean
  setFadeIn: React.Dispatch<React.SetStateAction<boolean>>
}
