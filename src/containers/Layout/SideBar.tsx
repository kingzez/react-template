import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
import { routeList } from 'routes'
import { ApplicationState } from 'reducers'
import logo from 'assets/logo.svg'

interface StateProps {
  collapsed: boolean
}

const { Sider } = Layout
const { SubMenu } = Menu

const SideBar = (props: StateProps) => (
  <Sider trigger={null} collapsible collapsed={props.collapsed}>
    <div className="sider-menu-logo">
      <img src={logo} alt="logo" />
      <h1>React Admin</h1>
    </div>
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['/']}>
      {routeList.map(item =>
        item.children && item.children.length > 0 ? (
          <SubMenu
            key={item.path}
            title={
              <span>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </span>
            }>
            {item.children.map(subItem => (
              <Menu.Item key={subItem.path}>
                <Icon type={subItem.icon} />
                <span>{subItem.title}</span>
                <Link to={subItem.path} />
              </Menu.Item>
            ))}
          </SubMenu>
        ) : (
          <Menu.Item key={item.path}>
            <Icon type={item.icon} />
            <span>{item.title}</span>
            <Link to={item.path} />
          </Menu.Item>
        )
      )}
    </Menu>
  </Sider>
)

const mapStateToProps = (state: ApplicationState) => ({
  collapsed: state.collapsed
})

export default connect(mapStateToProps)(SideBar)
