import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
import { routeList } from 'routes'
import logo from 'assets/logo.svg'

const { Sider } = Layout

const SideBar = props => (
  <Sider trigger={null} collapsible collapsed={props.collapsed}>
    <div className="sider-menu-logo">
      <img src={logo} alt="logo" />
      <h1>React Admin</h1>
    </div>
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['/']}>
      {routeList.map(item => (
        <Menu.Item key={item.path}>
          <Icon type={item.icon} />
          <span>{item.title}</span>
          <Link to={item.path} />
        </Menu.Item>
      ))}
    </Menu>
  </Sider>
)

SideBar.propTypes = {
  collapsed: PropTypes.bool
}

const mapStateToProps = state => ({
  collapsed: state.collapsed
})

export default connect(mapStateToProps)(SideBar)
