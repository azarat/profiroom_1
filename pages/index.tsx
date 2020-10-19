import React, { MouseEventHandler, useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import Link from 'next/link'

//components
import Card from '../src/components/Landing/Card'
import Slider from '../src/components/Landing/Slider'

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

//todo: relocate to new file
const data = [
  {
    id: 1,
    clientContent: 'Вивчіть профіль фрілансера, особливо приклади робіт',
    freelancerContent: 'Створіть продающий профіль та заповніть портфоліо.',
    clientImage: '/step1.svg',
    freelancerImage: '/step1.svg',
  },
  {
    id: 2,
    clientContent: 'Створіть продающий профіль та заповніть портфоліо.',
    freelancerContent: 'Почніть отримувати перші відгуки за успішно виконану роботу.',
    clientImage: '/step2.1.svg',
    freelancerImage: '/step2.svg',
  },
  {
    id: 3,
    clientContent: 'Виберіть зручний для вас пакет послуг.',
    freelancerContent:
      'Успішно завершуйте взяті проекти від замовників - це підвищує вашу репутацію на біржі.',
    clientImage: '/step3.1.svg',
    freelancerImage: '/step3.svg',
  },
  {
    id: 4,
    clientContent: `Зв'яжіться безпосередньо з фрілансером і підтвердіть співпрацю.`,
    freelancerContent:
      'Чемно спілкуйтеся, виконуйте якісно роботу в строк - це запорука успішної роботи на біржі.',
    clientImage: '/step4.1.svg',
    freelancerImage: '/step4.svg',
  },
]

export default function Index(): JSX.Element {
  const [client, setClient] = useState<boolean>(true)
  const [activeSlide, setActiveSlide] = useState<number>(0)
  const [fadeIn, setFadeIn] = useState<boolean>(false)

  const selectRole: MouseEventHandler = (event: React.MouseEvent<Element, MouseEvent>): void => {
    // const x = document.querySelector('.how-its-work__card-flipper')
    const y = document.getElementsByClassName('how-its-work__card-flipper')
    for (let i of y) {
      if (event === 'client') {
        i.style.transform = 'rotateY(0deg)'
      } else {
        i.style.transform = 'rotateY(180deg)'
      }
    }

    setClient(!client)
  }

  const nextSlide: MouseEventHandler = (event: React.MouseEvent<Element, MouseEvent>): void => {
    if (event === 'right') {
      if (activeSlide < data.length - 1) {
        setActiveSlide(activeSlide + 1)
        setFadeIn(true)
      }
    }

    if (event === 'left') {
      if (activeSlide > 0) {
        setActiveSlide(activeSlide - 1)
        setFadeIn(true)
      }
    }
  }
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
          <a className="button main-description__button">ЗАРЕЄСТРУВАТИСЯ</a>
        </p>
        <div className="main-description__card-container">
          {dataArray.map(
            ({ id, image, title, description }): JSX.Element => (
              <Card key={id} id={id} image={image} title={title} description={description} />
            )
          )}
        </div>
        <div className="how-its-work">
          <div className="how-its-work__test">
            <p className="how-its-work__subtitle">ПРАЦЮЙ З ВПЕВНЕНІСТЮ</p>
            <strong className="how-its-work__title">Як це працює?</strong>
            <Slider
              client={client}
              activeSlide={activeSlide}
              selectRole={selectRole}
              nextSlide={nextSlide}
              data={data}
              fadeIn={fadeIn}
              setFadeIn={setFadeIn}
            />
          </div>
          <div className="how-its-work__desktop">
            {data.map((el) => (
              <div className="how-its-work__test2" key={el.id}>
                <div className="how-its-work__number-card">
                  <div className="how-its-work__number-card-child">
                    <p>{el.id}</p>
                  </div>
                </div>
                <div className="how-its-work__card-container">
                  <div className="how-its-work__card-flipper">
                    <div className="how-its-work__card-front">
                      <img src={el.clientImage} width="100%" height="100%" />
                    </div>
                    <div className="how-its-work__card-back">
                      <img src={el.freelancerImage} width="100%" height="100%" />
                    </div>
                  </div>
                </div>
                <div className="how-its-work__slider-card-content">
                  {client ? el.clientContent : el.freelancerContent}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
