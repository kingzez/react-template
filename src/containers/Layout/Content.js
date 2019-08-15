import React from 'react'
import { Layout } from 'antd'
import routes from 'routes'

const { Content } = Layout

const RootContent = () => (
  <Content
    style={{
      margin: '24px 16px',
      padding: 24,
      background: '#fff',
      minHeight: 280
    }}>
    {routes}
  </Content>
)

export default RootContent
