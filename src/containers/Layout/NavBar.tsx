import React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Layout, Avatar, Menu, Dropdown } from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { ApplicationState } from 'reducers'
import { toggle, close } from 'actions/sidebar'
import styles from './Layout.module.scss'

interface StateProps {
  collapsed: boolean
}

interface DispatchProps {
  close: () => void
  toggle: () => void
}

const { Header } = Layout
const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
)

const NavBar = (props: StateProps & DispatchProps) => (
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
      <Avatar icon={<UserOutlined />} />
      <Dropdown overlay={menu}>
        <span className={styles.username}>王泽知</span>
      </Dropdown>
    </div>
  </Header>
)

const mapStateToProps = (state: ApplicationState) => ({
  collapsed: state.collapsed,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggle: () => dispatch(toggle()),
  close: () => dispatch(close()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
