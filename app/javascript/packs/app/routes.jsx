import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import People from './components/People';
import PersonNew from './components/PersonNew';

const App = (props) => (
  <Router>
    <div>
      <Route exact path='/' component={People} />
      <Route exact path='/person/new' component={PersonNew} />
    </div>
  </Router>
)

export default App;
