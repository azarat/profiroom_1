import { GetStaticPaths, GetStaticPathsResult, GetStaticProps, GetStaticPropsContext } from 'next'

export async function getStaticProps(): Promise<any> {
  const res = await fetch('http://test.profiroom.com/Backend/api/categories')
  const json = await res.json()

  return {
    props: {
      json,
    },
  }
}

export const getSubCatalogPaths: GetStaticPaths = async () => {
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

export const getSubCatalogProps: GetStaticProps = async (
  context: GetStaticPropsContext
): Promise<any> => {
  const url = `http://test.profiroom.com/Backend/api/subcategories?catedory=${
    context.params && context.params.subcatalog
  }`
  const res = await fetch(url)
  const subcatalog = await res.json()
  const { props: categories } = await getStaticProps()
  return {
    props: {
      subcatalog,
      categories,
    },
  }
}
