import { NextPage } from 'next'
import React from 'react'
import MainLayout from '../layouts/MainLayout'

const Index: NextPage = (props): JSX.Element => {
  return (
    <MainLayout categories={props}>
      obcaecati sequi velit in consequuntur nesciunt tempore. Eum modi porro deleniti fugit cum,
      consequatur ullam architecto deserunt laboriosam dignissimos et consectetur quidem, minima
      ipsa voluptas unde aliquid corrupti. Exercitationem sequi magni sint ipsum quisquam! Provident
      necessitatibus fugiat, iste totam ut aut vitae. Qui a officia tenetur cum labore dignissimos
      et dolorem voluptas, nesciunt iste corrupti quae laudantium numquam pariatur tempora,
      blanditiis error voluptatibus doloremque optio assumenda dolores deleniti! Aliquam recusandae,
      totam pariatur earum asperiores, nisi modi in veniam deserunt, sint magnam sit fuga! Illum,
      temporibus! Nihil eveniet quam facere molestiae, nobis voluptas, blanditiis mollitia delectus
      enim error, dolore repellendus. Facilis, sit harum aspernatur veritatis cupiditate repudiandae
      molestias voluptas ducimus sunt officia? Dolorum quis mollitia quo veniam molestias blanditiis
      ad nihil odio quaerat accusantium, illo sunt iste, dolores repudiandae et quae distinctio
      iure, nobis placeat! Enim asperiores facilis maxime aliquam ipsa sint natus quas, quia non.
      Beatae quis explicabo ducimus molestias provident maxime voluptatem obcaecati quisquam, quas
      autem, dolorum praesentium fugiat aliquid accusamus iusto neque corporis molestiae laboriosam
      vitae impedit. Eius neque totam sunt, ipsa porro quibusdam deserunt ratione expedita odio
      debitis repellat velit illum ut, incidunt, laboriosam fugiat impedit eveniet earum? Quas
    </MainLayout>
  )
}

export { getStaticProps } from '../src/utils/service'

export default Index
