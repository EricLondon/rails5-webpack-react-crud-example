import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
class PeopleTable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      people: props.people
    }
  }

  render() {
    return (
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First</th>
            <th>Last</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.state.people.map(person => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.email}</td>
              <td>{person.first_name}</td>
              <td>{person.last_name}</td>
              <td>
                <Link className="btn btn-danger" to={`/person/${person.id}/delete`}>Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

export default PeopleTable
