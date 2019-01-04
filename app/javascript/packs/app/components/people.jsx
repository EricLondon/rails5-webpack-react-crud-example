import React from 'react'
// import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types'

import PeopleTable from './PeopleTable'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class People extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      people: [],
      isLoaded: false,
      error: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/people.json')
      .then(response => response.json())
      .then(
        (records) => {
          this.setState({
            isLoaded: true,
            people: records
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  render() {
    const { error, isLoaded, people } = this.state
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div>
          <h3>People</h3>
          <PeopleTable people={people}></PeopleTable>
          <Link className="btn btn-primary" to="/person/edit">Add Person</Link>
        </div>
      )
    }
  }
}

export default People
