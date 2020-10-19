import Router from 'next/router'
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
// Cookie
import nextCookie from 'next-cookies'

export const authUser: GetServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<any>> => {
  const { jwt_token } = nextCookie(context)
  console.log(jwt_token)

  if (context.req && !jwt_token) {
    context.res.writeHead(302, { Location: '/login' })
    context.res.end()
  }
  

  //   if (!token) {
  //     Router.push('login')
  //   }
  return {
    props: { jwt_token },
  }
}
