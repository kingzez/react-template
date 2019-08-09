import React from 'react'
import ProTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import routes from './routes'

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    { routes }
  </ConnectedRouter>
)

App.ProTypes = {
  history: ProTypes.object
}

export default App