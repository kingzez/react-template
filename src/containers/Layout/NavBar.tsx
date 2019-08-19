import React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Layout, Icon } from 'antd'
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
      boxShadow: '0 1px 4px rgba(0, 21, 41, 0.08)'
    }}>
    <Icon
      className="trigger"
      type={props.collapsed ? 'menu-unfold' : 'menu-fold'}
      onClick={props.collapsed ? props.close : props.toggle}
    />
  </Header>
)

const mapStateToProps = (state: ApplicationState) => ({
  collapsed: state.collapsed
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggle: () => dispatch(toggle()),
  close: () => dispatch(close())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)
