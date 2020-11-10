export type CategoriesProps = {
  categories: {
    json: jsonTypes
  }
}

export type jsonTypes = {
  category: categoryTypes[]
}

type categoryTypes = {
  [key: string]: any
  description: string
  groups: string[]
  id: number
  link: string
  name_en: string
  name_ru: string
  name_uk: string
  sub_categories: subCategriesTypes[]
}

export type subCategriesTypes = {
  [key: string]: any
  category_id: number
  description: string
  group: string
  id: number
  img: string
  link: string
  name_en: string
  name_ru: string
  name_uk: string
}
