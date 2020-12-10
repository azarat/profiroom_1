import React from 'react'
//ant
import { Calendar, Select, Col, Row } from 'antd'

const CalendarHah: React.FC = (): JSX.Element => {
  return (
    <div className="finance__calendar calendar">
      <Calendar
        fullscreen={false}
        headerRender={({ value, onChange }) => {
          const year = value.year()
          const options = []
          for (let i = year - 10; i < year + 10; i += 1) {
            options.push(
              <Select.Option key={i} value={i} className="year-item">
                {i}
              </Select.Option>
            )
          }
          return (
            <div style={{ padding: 8 }}>
              <Row gutter={8}>
                <Col>
                  <Select
                    size="small"
                    dropdownMatchSelectWidth={false}
                    className="my-year-select"
                    onChange={(newYear) => {
                      const now = value.clone().year(+newYear)
                      onChange(now)
                    }}
                    value={String(year)}
                  >
                    {options}
                  </Select>
                </Col>
              </Row>
            </div>
          )
        }}
      />
    </div>
  )
}

export default CalendarHah
