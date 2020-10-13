import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Link from 'next/link'

//antd

//types

//components
import Card from '../src/components/Landing/Card'

//todo: relocate to new file
const dataArray = [
  {
    id: 1,
    title: 'Захист платежів',
    image: '/payment-protection.svg',
    description:
      'Зарезервуйте кошти на біржі до успішного виконання проекту в повному обсязі. Вибирайте безпечну угоду для отримання якісного результату в строк',
  },
  {
    id: 2,
    title: 'Прозорість',
    image: '/opacity.svg',
    description:
      'На біржі немає прихованих платежів. Ми не продаємо рейтинги і платні статуси користувачам. Біржа заробляє тільки на комісії за операцію.',
  },
  {
    id: 3,
    title: 'Швидкі виплати',
    image: '/quick-payouts.svg',
    description:
      'Фрілансер отримує кошти на свій рахунок на протязі 1 години після успішного складання проекту.',
  },
  {
    id: 4,
    title: 'Кешбек',
    image: '/cashback.svg',
    description:
      'Виконуйте успішно проекти без арбітражу, і отримуйте на рахунок в сервісі відсоток.',
  },
  {
    id: 5,
    title: 'Зручна система',
    image: '/convenient-system.svg',
    description:
      'Виконуйте успішно проекти без арбітражу, і отримуйте на рахунок в сервісі відсоток.',
  },
]

export default function Index(): JSX.Element {
  return (
    <MainLayout>
      <div className="wrapper container">
        <h5 className="wrapper__title">PROFIROOM ДЛЯ БІЗНЕСУ - БІРЖА ФРІЛАНСУ</h5>
        <strong className="wrapper__description">
          Найміть фрілансера швидко з будь-якої точки по оптимальній для вас ціні
        </strong>
        <Link href="/">
          <a className="button wrapper__button">ПЕРЕЙТИ ДО КАТАЛОГУ</a>
        </Link>
      </div>
      <div className="main-description">
        <p className="main-description__subtitle">ПЕРЕВАГИ</p>
        <strong className="main-description__title">Чому Profiroom?</strong>
        <p className="main-description__description">
          Біржа фрілансерів допомагає замовнику заощадити час і гроші для свого бізнесу. Адже
          розробник, дизайнер або копірайтер, творець графіки / аудіо або відео, перекладач або
          диктор зроблять роботу якісно, швидко і вам не потрібно облаштовувати робоче місце зі
          сплатою податків і внесків до фондів.
        </p>
        {dataArray.map(
          ({ id, image, title, description }): JSX.Element => (
            <Card key={id} id={id} image={image} title={title} description={description} />
          )
        )}
      </div>
    </MainLayout>
  )
}
