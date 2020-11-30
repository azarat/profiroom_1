import React from 'react'

import { Form, Checkbox, Switch } from 'antd'

const Notification: React.FC = (): JSX.Element => {
  //function onChange(e) {
  //console.log(`checked = ${e.target.checked}`)
  //}

  return (
    <div className="notification">
      <Form className="notification__wrapper">
        <section className="notification__all notification__block">
          <div className="notification__title">
            <h3>ВСІ СПОВІЩЕННЯ ПО ЕЛЕКТРОННІЙ ПОШТІ</h3>
          </div>
          <div className="notification__all-info notification__block-info">
            <div>
              <p>
                Підпишіться на електронні листи, щоб дізнаватися що відбувається, коли ви
                перебуваєтене в мережі. Розсилку можна змінити в будь-який час.
              </p>
            </div>
            <div className="notification__all-info-switch">
              <Switch defaultChecked />
            </div>
          </div>
        </section>
        <section className="notification__maim notification__block">
          <div className="notification__title">
            <h3>БАЗОВІ СПОВІЩЕННЯ</h3>
          </div>
          <div className="notification__maim-info notification__block-info">
            <div className="notification__checkbox">
              <Checkbox>Нові приватні повідомлення</Checkbox>
            </div>
            <div className="notification__checkbox">
              <Checkbox>Нові замовлення</Checkbox>
            </div>
            <div className="notification__checkbox">
              <Checkbox>Зміна рівня</Checkbox>
            </div>
            <div className="notification__checkbox">
              <Checkbox>Сервісні сповіщення</Checkbox>
            </div>
          </div>
        </section>
        <section className="notification__project notification__block">
          <div className="notification__title">
            <h3>ПРОЕКТНІ СПОВІЩЕННЯ</h3>
          </div>
          <div className="notification__project-info notification__block-info">
            <div className="notification__checkbox">
              <Checkbox>Нові повідомлення в активному проекті</Checkbox>
            </div>
            <div className="notification__checkbox">
              <Checkbox>Зміна статусу проекту</Checkbox>
            </div>
            <div className="notification__checkbox">
              <Checkbox>Провалені терміни</Checkbox>
            </div>
            <div className="notification__checkbox">
              <Checkbox>Відгук до замовлення</Checkbox>
            </div>
          </div>
        </section>
        <section className="notification__button">
          <div className="setting__save">
            <button className="setting__save-btn">зберегти і продовжити</button>
          </div>
        </section>
      </Form>
    </div>
  )
}

export default Notification
