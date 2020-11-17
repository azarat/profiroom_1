// import Router from 'next/router'
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
// Cookie
import nextCookie from 'next-cookies'

export const authUser: GetServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<any>> => {
  const { jwt_token } = nextCookie(context)

  if (context.req && !jwt_token) {
    context.res.writeHead(302, { Location: '/login' })
    context.res.end()
  }

  const url = `${process.env.NEXT_PUBLIC_API}api/user`
  const dashboardUrl = `${process.env.NEXT_PUBLIC_API}api/dashboard`

  try {
    const response = await fetch(url, {
      mode: 'cors',
      credentials: 'include',
      headers: {
        Authorization: `bearer ${jwt_token}`,
      },
    })
    const dashboard = await fetch(dashboardUrl, {
      headers: {
        Authorization: `bearer ${jwt_token}`,
      },
    })
    const jsonResponse = await response.json()
    const dashboardResponse = await dashboard.json()

    return {
      props: { jsonResponse, dashboardResponse },
    }
  } catch (e) {
    console.error(e.message)
  }
  return { props: { message: 'undefined token' } }
}
