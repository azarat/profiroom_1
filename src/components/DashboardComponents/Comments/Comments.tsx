import Link from 'next/link'
import React from 'react'
import { commentsType } from '../HomeTypes'

type CommentsType = {
  comments: commentsType[]
}

const Comments: React.FC<CommentsType> = ({ comments }) => {
  console.log(comments)

  return (
    <>
      {comments.length === 0 ? (
        <p>Відгуків немає</p>
      ) : (
        <>
          {comments.map((item, index) => (
            <div className="comments__item-wrapper" key={index}>
              <Link href="">
                <a className="comments__offer-name">{item.offers.title}</a>
              </Link>
              <div className="comments__item">
                <div className="comments__item-top">
                  <div className="comments__img-offer-wrapper">
                    <img src={item.offers.mainImage} alt="" className="comments__img-offer" />
                  </div>
                  <div className="comments__img-user-wrapper">
                    <img src={item.author.avatar} alt="" className="comments__img-user" />
                  </div>
                  <div className="comments__img-message-wrapper">
                    <img src="/assets/img/envelope.svg" alt="" className="comments__img-message" />
                  </div>
                </div>
                <div className="comments__user-comment">
                  <span className="comments__user-name">
                    {item.author.name} {item.author.surname}
                  </span>
                  <span className="comments__date">
                    {new Date(item.created_at).toLocaleDateString()}
                  </span>
                  <p className="comments__text"> {item.commentText}</p>
                </div>
                <div className="comments__rating">
                  <div className="comments__rating-item">
                    <span>Якість</span>
                    <div className="comments__rating-icon">{item.qualityMark}</div>
                  </div>
                  <div className="comments__rating-item">
                    <span>Термін</span>
                    <div className="comments__rating-icon">{item.termMark}</div>
                  </div>
                  <div className="comments__rating-item">
                    <span>Вічливість</span>
                    <div className="comments__rating-icon">{item.politenessMark}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  )
}

export default Comments
