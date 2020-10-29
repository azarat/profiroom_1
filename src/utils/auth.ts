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
  // {
  //   user: {
  //     id: 87,
  //     name: 'Denis',
  //     surname: 'Davylo',
  //     nikname: '',
  //     email: 'vadrhtyelcjfkwoyjp@upived.com',
  //     checked: 0,
  //     role_id: 1,
  //     avatar: 'http://142.93.233.236/Backend//public/storage/avatar/noAva.jpg',
  //     rank_id: 0,
  //     rating: 0,
  //     country: null,
  //     city: null,
  //     description: '',
  //     gender: null,
  //     socketId: '14fa3786-fc29-457d-b3f0-1fdd79b61720',
  //     birthday: null,
  //     email_verified_at: '2020-10-19 08:51:48',
  //     inRoom: null,
  //     busy: 0,
  //     answerTime: null,
  //     levelChanged: null,
  //     created_at: '2020-10-19 08:51:00',
  //     updated_at: '2020-10-19 08:51:48',
  //     dealsCounts: {
  //       inProgressOffers: 0,
  //       QueuedOffers: 0,
  //       EndedWorks: 0,
  //       dealsAsCustomer: 0
  //     },
  //     averageRating: { freelancer: [Object], customer: [Object] },
  //     arbitration: { freelancer: 0, customer: 0, all: 0 },
  //     views: 0,
  //     online: true
  //   }
  // }

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
  //   if (!token) {
  //     Router.push('login')
  //   }
}
