import React from 'react'
// import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types'

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
          console.log('records', records)
          this.setState({
            isLoaded: true,
            people: records
          })
        },
        (error) => {
          console.log('error', error)
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
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>First</th>
                <th>Last</th>
              </tr>
            </thead>
            <tbody>
              {people.map(person => (
                <tr key={person.id}>
                  <td>{person.id}</td>
                  <td>{person.email}</td>
                  <td>{person.first_name}</td>
                  <td>{person.last_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }
  }
}

export default People
