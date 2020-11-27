import React from 'react'

import { Checkbox, Switch } from 'antd'

const Notification: React.FC = (): JSX.Element => {
  //function onChange(e) {
  //console.log(`checked = ${e.target.checked}`)
  //}

  return (
    <div className="notification-wrapper">
      <section className="notification-all">
        <div>
          <p>ВСІ СПОВІЩЕННЯ ПО ЕЛЕКТРОННІЙ ПОШТІ</p>
        </div>
        <div>
          <div>
            <p>
              Підпишіться на електронні листи, щоб дізнаватися що відбувається, коли ви перебуваєте
              не в мережі. Розсилку можна змінити в будь-який час.
            </p>
          </div>
          <div>
            <Switch defaultChecked />
          </div>
        </div>
      </section>
      <section>
        <div>
          <p>БАЗОВІ СПОВІЩЕННЯ</p>
        </div>
        <div>
          <div>
            <Checkbox>Нові приватні повідомлення</Checkbox>
          </div>
          <div>
            <Checkbox>Нові замовлення</Checkbox>
          </div>
          <div>
            <Checkbox>Зміна рівня</Checkbox>
          </div>
          <div>
            <Checkbox>Сервісні сповіщення</Checkbox>
          </div>
        </div>
      </section>
      <section>
        <div>
          <p>ПРОЕКТНІ СПОВІЩЕННЯ</p>
        </div>
        <div>
          <div>
            <Checkbox>Нові повідомлення в активному проекті</Checkbox>
          </div>
          <div>
            <Checkbox>Зміна статусу проекту</Checkbox>
          </div>
          <div>
            <Checkbox>Провалені терміни</Checkbox>
          </div>
          <div>
            <Checkbox>Відгук до замовлення</Checkbox>
          </div>
        </div>
      </section>
      <section></section>
    </div>
  )
}

export default Notification
