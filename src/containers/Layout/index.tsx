import React from 'react'
import { Layout } from 'antd'
import NavBar from './NavBar'
import SideBar from './SideBar'
import Content from './Content'

const Root = () => (
  <Layout style={{ height: '100%' }}>
    <SideBar />
    <Layout>
      <NavBar />
      <Content />
    </Layout>
  </Layout>
)

export default Root
