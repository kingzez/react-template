import React from 'react'
import ProTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Tag } from 'antd'
import { increment, decrement } from 'actions/counter'

const Counter = props => (
  <div>
    <Tag color="blue">Counter: {props.count}</Tag>
    <Button type="primary" onClick={props.increment}>
      +
    </Button>
    <Button type="danger" onClick={props.decrement}>
      -
    </Button>
  </div>
)

Counter.propTypes = {
  count: ProTypes.number,
  increment: ProTypes.func.isRequired,
  decrement: ProTypes.func.isRequired
}

const mapStateToProps = state => ({
  count: state.count
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
