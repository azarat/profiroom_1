import React from 'react'
import { Calendar, Select, Radio, Col, Row, Typography, DatePicker, Space } from 'antd'

const FinanceContainer = ({ dashboardResponse }) => {
  function onPanelChange(value, mode) {
    console.log(value, mode)
  }
  function onChange(date, dateString) {
    console.log(date, dateString)
  }

  return (
    <div>
      <div className="site-calendar-customize-header-wrapper">
        {/* <Calendar onPanelChange={onPanelChange} /> */}
        <Space direction="vertical">
          <DatePicker onChange={onChange} picker="month" />
        </Space>
      </div>
    </div>
  )
}

export default FinanceContainer
