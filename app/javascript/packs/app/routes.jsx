import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import People from './components/People';
import PersonForm from './components/PersonForm';

const App = (props) => (
  <Router>
    <div>
      <Route exact path='/' component={People} />
      <Route exact path='/person/edit' component={PersonForm} />
    </div>
  </Router>
)

export default App;
