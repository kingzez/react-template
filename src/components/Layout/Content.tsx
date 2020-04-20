import React from 'react'
import { Layout } from 'antd'
import Router from 'components/Router'

const { Content } = Layout

const RootContent = () => (
  <Content
    style={{
      margin: '24px 16px',
      padding: 24,
      background: '#fff',
      minHeight: 280,
    }}>
    <Router />
  </Content>
)

export default RootContent
