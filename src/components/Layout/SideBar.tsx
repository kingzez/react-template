import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { Icon } from '@ant-design/compatible'
import { routes } from 'components/Router'
import { ApplicationState } from 'reducers'
import Logo from './Logo'

interface StateProps {
  collapsed: boolean
}

const { Sider } = Layout
const { SubMenu } = Menu

// todo haspermission
// const hasPermission = (auth: string) => {
//   console.log(auth)
//   return true
// }
// https://github.com/jsmanifest/modern-sidebar/blob/master/src/Sidebar.js
const SideBarItem = ({ item, ...rest }: { item: any }) => {
  const { title, path, icon, children } = item
  console.log(item)
  return (
    <React.Fragment>
      {Array.isArray(children) ? (
        <SubMenu
          key={title}
          title={
            <span>
              <Icon type={icon} />
              <span>{title}</span>
            </span>
          }
          {...rest}>
          {children.map((subItem: any) => (
            // ToDo fix
            // <SideBarItem item={subItem} key={title} />
            <Menu.Item key={subItem.title} {...rest}>
              <Icon type={subItem.icon} />
              <span>{subItem.title}</span>
              <Link to={subItem.path} />
            </Menu.Item>
          ))}
        </SubMenu>
      ) : (
        <Menu.Item key={title} {...rest}>
          <Icon type={icon} />
          <span>{title}</span>
          <Link to={path} />
        </Menu.Item>
      )}
    </React.Fragment>
  )
}

const SideBar = (props: StateProps) => (
  <Sider trigger={null} collapsible collapsed={props.collapsed} width="240">
    <Logo />
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['/']}>
      {routes.map((item) => (
        <SideBarItem item={item} key={item.path} />
      ))}
    </Menu>
  </Sider>
)

const mapStateToProps = (state: ApplicationState) => ({
  collapsed: state.collapsed,
})

export default connect(mapStateToProps)(SideBar)
