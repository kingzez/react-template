import React from 'react'
import { Dispatch } from 'redux'
import { connect, useSelector, useDispatch } from 'react-redux'
import { Layout, Avatar, Menu, Dropdown, message } from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
import { ApplicationState } from 'reducers'
import { toggle, close } from 'actions/sidebar'
import * as userAction from 'actions/user'
import styles from './Layout.module.scss'

interface StateProps {
  collapsed: boolean
}

interface DispatchProps {
  close: () => void
  toggle: () => void
}

const { Header } = Layout

const NavBar = (props: StateProps & DispatchProps) => {
  const dispatch = useDispatch()
  const userState = useSelector((state: any) => state.user)
  const { username } = userState.user
  console.log(userState)

  const menuClick = ({ key }: { key: string }) => {
    if (key === 'logout') {
      dispatch(userAction.logout())
    }
    if (key === 'person') {
      message.info(`todo go ${key}`)
    }
  }

  const menu = (
    <Menu style={{ width: 120 }} onClick={menuClick}>
      <Menu.Item key="person">
        <UserOutlined />
        个人中心
      </Menu.Item>
      <Menu.Item key="logout">
        <LogoutOutlined />
        退出登录
      </Menu.Item>
    </Menu>
  )

  return (
    <Header
      className={styles.header}
      style={{
        background: '#fff',
        padding: 0,
        boxShadow: '0 1px 4px rgba(0, 21, 41, 0.08)',
      }}>
      <div
        className={styles.trigger}
        onClick={props.collapsed ? props.close : props.toggle}>
        {props.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      <div className={styles.headerRight}>
        <Avatar size="small" icon={<UserOutlined />} />
        <Dropdown overlay={menu}>
          <span className={styles.username}>{username}</span>
        </Dropdown>
      </div>
    </Header>
  )
}

const mapStateToProps = (state: ApplicationState) => ({
  collapsed: state.collapsed,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggle: () => dispatch(toggle()),
  close: () => dispatch(close()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
