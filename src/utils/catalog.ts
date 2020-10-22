import { GetStaticPaths, GetStaticProps } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { subcatalog: 'Programming' } },
      { params: { subcatalog: 'Design-Art' } },
      { params: { subcatalog: 'Audio-Video' } },
      { params: { subcatalog: 'Marketing' } },
      { params: { subcatalog: 'WorkingwithTexts' } },
      // See the "paths" section below
    ],
    fallback: false, // See the "fallback" section below
  }
}

export const getSubCatalog: GetStaticProps = async (context): Promise<any> => {
  console.log(context.params)
  const url = `http://test.profiroom.com/Backend/api/subcategories?catedory=${context.params.subcatalog}`
  const res = await fetch(url)
  const { category } = await res.json()
  return {
    props: {
      category,
    },
  }
}
