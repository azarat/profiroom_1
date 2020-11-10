export interface ICarousel {
  children: React.ReactNode[]
  infinity?: boolean
  buttonPrev?: React.ReactNode
  buttonNext?: React.ReactNode
  withDots?: boolean
  files: string[]
  open?: boolean
}

export interface IArrow {
  className?: string
}
