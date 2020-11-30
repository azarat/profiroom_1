// import Router from 'next/router'
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
// Cookie
import nextCookie from 'next-cookies'

export const authUser: GetServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<any>> => {
  const { jwt_token } = nextCookie(context)

  if (context.req.url?.split('?')[0] === '/login') {
    if (context.req && jwt_token) {
      context.res.writeHead(302, { Location: '/dashboard' })
      context.res.end()
    }
  } else {
    if (context.req && !jwt_token) {
      context.res.writeHead(302, { Location: '/login' })
      context.res.end()
    }
  }

  const url = `${process.env.NEXT_PUBLIC_API}/api/user`
  try {
    const response = await fetch(url, {
      mode: 'cors',
      credentials: 'include',
      headers: {
        Authorization: `bearer ${jwt_token}`,
      },
    })
    const jsonResponse = await response.json()
    return {
      props: { jsonResponse },
    }
  } catch (e) {
    console.error(e.message)
  }
  return { props: { message: 'undefined token' } }
}
