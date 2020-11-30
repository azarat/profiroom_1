// import Router from 'next/router'
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
// Cookie
import nextCookie from 'next-cookies'

export const authUser: GetServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<any>> => {
  const { jwt_token } = nextCookie(context)
  if (context.resolvedUrl.split('?')[0] === '/login') {
    if (jwt_token) {
      context.res.writeHead(302, { Location: '/dashboard' })
      context.res.end()
    }
  } else {
    if (!jwt_token) {
      context.res.writeHead(302, { Location: '/login' })
      context.res.end()
    }
  }

  if (jwt_token) {
    const url = `${process.env.NEXT_PUBLIC_API}api/user`
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${jwt_token}`,
        },
      })
      const jsonResponse = await response.json()
      return {
        props: { jsonResponse },
      }
    } catch (e) {
      console.error(e.message)
    }
  } else {
    return {
      props: {},
    }
  }

  return { props: { message: 'undefined token' } }
}
