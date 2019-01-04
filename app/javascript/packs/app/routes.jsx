import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import People from './components/People'
import PersonForm from './components/PersonForm'
import PersonDelete from './components/PersonDelete'

const App = (props) => (
  <Router>
    <div>
      <Route exact path='/' component={People} />

      <Route exact path='/person/edit' component={PersonForm} />

      <Route
        exact path="/person/:id/delete"
        render={(routeProps) => (
          <PersonDelete {...routeProps} />
        )}
      />

    </div>
  </Router>
)

export default App;
