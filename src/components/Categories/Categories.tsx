import React from 'react'
import Link from 'next/link'

//Antd
import { Popover } from 'antd'

const Categories: React.FC = ({ categories }): JSX.Element => {
  console.log(categories.json.category)

  //   const content = categories.json.category.map((category) => (
  //     <div key={category.id}>
  //       <h4>{category.name_uk}</h4>
  //       {category.groups.map((item, index) => (
  //         <p key={`${index}${item}`}>{item}</p>
  //       ))}
  //     </div>
  //   ))

  const content = categories.json.category.map((category) => console.log(category))

  return (
    <div className="categories">
      <div className="container">
        <div className="categories__wrapper">
          {/* TODO : Добавить ссылки в href */}
          {/* <Link href="">
            <Popover placement="bottom" trigger="hover" content={content}>
              <a className="categories__link">Програмування</a>
            </Popover>
          </Link>
          <Link href="">
            <Popover placement="bottom" trigger="hover" content={content}>
              <a className="categories__link">Дизайн/Арт</a>
            </Popover>
          </Link>
          <Link href="">
            <Popover placement="bottom" trigger="hover" content={content}>
              <a className="categories__link">Аудіо/Відео</a>
            </Popover>
          </Link>
          <Link href="">
            <Popover placement="bottom" trigger="hover" content={content}>
              <a className="categories__link">Маркетинг</a>
            </Popover>
          </Link>
          <Link href="">
            <Popover placement="bottom" trigger="hover" content={content}>
              <a className="categories__link">Робота з текстами</a>
            </Popover>
          </Link> */}
          {/* {categories.json.category.map((category) => (
            <Popover key={category.id} placement="bottom" trigger="hover" content={content}>
              <a className="categories__link">{category.name_uk}</a>
            </Popover>
          ))} */}
          {categories.json.category.map((category) => (
            <Popover key={category.id} placement="bottom" trigger="hover" content={content}>
              <a className="categories__link">{category.name_uk}</a>
            </Popover>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Categories
