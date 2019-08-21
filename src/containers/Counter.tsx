import React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Button, Tag } from 'antd'
import { RouteComponentProps } from 'react-router'
import { increment, decrement } from 'actions/counter'
import { ApplicationState } from 'reducers'

interface StateProps {
  count: number
}

interface DispatchProps {
  increment: () => void
  decrement: () => void
  incrementAsync: () => void
}

const Counter = (
  props: RouteComponentProps<any> & StateProps & DispatchProps
) => (
  <div>
    <Tag color="blue">Counter: {props.count}</Tag>
    <Button type="primary" onClick={props.increment}>
      +
    </Button>
    <Button type="danger" onClick={props.decrement}>
      -
    </Button>
    <Button type="primary" onClick={props.incrementAsync}>
      async +
    </Button>
  </div>
)

const mapStateToProps = (state: ApplicationState) => ({
  count: state.count
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  incrementAsync: () => dispatch({ type: 'INCREMENT_ASYNC' })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
