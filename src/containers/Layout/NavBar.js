import React from 'react'
import { connect } from 'react-redux'
import { Layout, Icon } from 'antd'
import { toggle, close } from 'actions/sidebar'

const { Header } = Layout

const NavBar = props => (
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

const mapStateToProps = state => ({
  collapsed: state.collapsed
})

const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(toggle()),
  close: () => dispatch(close())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)
