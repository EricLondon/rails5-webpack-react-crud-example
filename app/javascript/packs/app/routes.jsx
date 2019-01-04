import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import People from './components/people';

const App = (props) => (
  <Router>
    <div>
      <Route exact path='/' component={People} />
    </div>
  </Router>
)

export default App;
