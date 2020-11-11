import React from 'react'
import { Form, Input} from 'antd';
import {DeleteFilled, EditFilled} from '@ant-design/icons'; 

const Education: React.FC = (): JSX.Element => {

    const dropDownYear = (minYear: number, selector: string) : any => {
        let today = new Date(); 
        let min = minYear, 
            max= today.getFullYear(),
            box = document.querySelector(selector);

        for (let i = min; i<=max; i++) {
            let opt = document.createElement('option');
            opt.value = `${i}`; 
            opt.innerHTML = `${i}`;
            box?.appendChild(opt)
        }
    }

    return (
      <>
      <Form>
        <div className="setting__education-form-univer">
            <Form.Item 
              name="university" 
              label="Навчальний заклад" 
              className="setting__main-item"
            >
              <Input  className="setting__main-field"/>
            </Form.Item>
        </div>
        <div className="setting__button-editor setting__education-btns">
            <div className="setting__button-edit setting__education-button-edit">
                <EditFilled />
            </div>
            <div className="setting__button-delete setting__education-button-delete">
                <DeleteFilled />
            </div>
        </div>
        <div className="setting__education-form-univer-info">
            <div className="setting__education-level setting__select">
                <label>Наукова ступінь</label>
                <select>
                    <option value="Бакалавр">Бакалавр</option>
                    <option value="Магістр">Магістр</option>
                    <option value="Аспірант">Аспірант</option>
                    <option value="Кандидат наук">Кандидат наук</option>
                    <option value="Доктор наук">Доктор наук</option>
                </select>
            </div>
            <div>
                <Form.Item 
                name="specialty" 
                label="Спеціальність" 
                className="setting__main-item"
                >
                <Input  className="setting__main-field"/>
                </Form.Item>
            </div> 
            <div>
                <div className="setting__education-year setting__select">
                    <label>Рік старту</label>
                    <select id="startYear" onClick={()=>dropDownYear(1960, "startYear")}></select>
                </div>
                <div className="setting__education-year setting__select">
                    <label>Рік закінчення</label>
                    <select id="endYear"></select>
                </div>
            </div>
        </div>
      </Form>
      </>
  )
}

export default Education;