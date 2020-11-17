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

export const chatProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<any>> => {
  const { jwt_token } = nextCookie(context)
  if (context.req && !jwt_token) {
    context.res.writeHead(302, { Location: '/login' })
    context.res.end()
  }
  const userUrl = `${process.env.NEXT_PUBLIC_API}/api/user`
  const checkAuthUrl = `${process.env.NEXT_PUBLIC_API}api/checkAuthorization`

  try {
    const response = await fetch(userUrl, {
      mode: 'cors',
      credentials: 'include',
      headers: {
        Authorization: `bearer ${jwt_token}`,
      },
    })
    const jsonResponse = await response.json()
    const checkAuthRes = await fetch(checkAuthUrl, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt_token}`,
      },
    })
    const { socketId } = await checkAuthRes.json()
    const classicRoomsResponse = await fetch(
      `http://test.profiroom.com/Backend/api/getChatclassicRooms`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt_token}`,
        },
      }
    )
    const classicRoomsJson = await classicRoomsResponse.json()
    const classicRooms = classicRoomsJson.sort((a: any, b: any) =>
      new Date(a.message[0]?.dateTime) > new Date(b.message[0]?.dateTime) ? -1 : 1
    )

    return {
      props: {
        jsonResponse,
        socketId,
        classicRooms,
      },
    }
  } catch (e) {
    return { props: { message: 'undefined token' } }
  }

  return { props: { message: 'undefined token' } }
}
