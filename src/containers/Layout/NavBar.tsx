import React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Layout } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { ApplicationState } from 'reducers'
import { toggle, close } from 'actions/sidebar'

interface StateProps {
  collapsed: boolean
}

interface DispatchProps {
  close: () => void
  toggle: () => void
}

const { Header } = Layout

const NavBar = (props: StateProps & DispatchProps) => (
  <Header
    style={{
      background: '#fff',
      padding: 0,
      boxShadow: '0 1px 4px rgba(0, 21, 41, 0.08)',
    }}>
    <div
      className="trigger"
      onClick={props.collapsed ? props.close : props.toggle}>
      {props.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
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
