import React from 'react'
import { Route, Redirect } from 'react-router'

class PersonNew extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      person: {
        id: {
          value: this.getPersonId(props),
          error: ''
        },
        first_name: {
          value: '',
          error: ''
        },
        last_name: {
          value: '',
          error: ''
        },
        email: {
          value: '',
          error: ''
        }
      },
      redirect: null
    }

    this.setFirstName = this.setFirstName.bind(this)
    this.setLastName = this.setLastName.bind(this)
    this.setEmail = this.setEmail.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    if (this.state.person.id.value) {
      fetch(`http://localhost:3000/api/people/${this.state.person.id.value}`, {
        method: 'get',
        headers: { 'Content-Type': 'application/json' }
      })
        .then(response => response.json())
        .then(
          (response) => {
            this.setState({
              person: {
                id: {
                  value: response.id,
                  error: ''
                },
                first_name: {
                  value: response.first_name,
                  error: ''
                },
                last_name: {
                  value: response.last_name,
                  error: ''
                },
                email: {
                  value: response.email,
                  error: ''
                }
              }
            })
          },
          (error) => {
            // TODO
            console.log('error', error)
          }
        )
    }
  }

  getPersonId(props) {
    try {
      return props.match.params.id
    } catch (error) {
      return null
    }
  }

  setFirstName(event) {
    let newVal = event.target.value || ''
    let errorMessage = ''
    this.setFieldState('first_name', newVal, errorMessage)
  }

  setLastName(event) {
    let newVal = event.target.value || ''
    let errorMessage = ''
    this.setFieldState('last_name', newVal, errorMessage)
  }

  setEmail(event) {
    let newVal = event.target.value || ''
    let errorMessage = ''
    this.setFieldState('email', newVal, errorMessage)
  }

  setFieldState(field, newVal, errorMessage = '') {
    this.setState((prevState) => {
      let newState = prevState
      newState.person[field] = {
        value: newVal,
        error: errorMessage
      }
      return newState
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    // TODO: check for form errors

    let body = {
      person: {
        email: this.state.person.email.value,
        first_name: this.state.person.first_name.value,
        last_name: this.state.person.last_name.value
      }
    }

    if (this.state.person.id.value) {

      // update person
      fetch(`http://localhost:3000/api/people/${this.state.person.id.value}`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
        .then(response => response.json())
        .then(
          (response) => {
            this.setState({
              redirect: '/'
            })
          },
          (error) => {
            // TODO
            console.log('error', error)
          }
        )

    } else {

      // new person
      fetch('http://localhost:3000/api/people', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
        .then(response => response.json())
        .then(
          (response) => {
            this.setState({
              redirect: '/'
            })
          },
          (error) => {
            // TODO
            console.log('error', error)
          }
        )

    }

  }

  render() {
    if (this.state.redirect) {
      return (
        <Redirect to={this.state.redirect} />
      )
    } else {
      return (
        <div>
          <h3>Add Person</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={this.state.person.email.value}
                onChange={this.setEmail}
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                className="form-control"
                id="first_name"
                placeholder="Enter first name"
                value={this.state.person.first_name.value}
                onChange={this.setFirstName}
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="last_name"
                placeholder="Enter last name"
                value={this.state.person.last_name.value}
                onChange={this.setLastName}
              ></input>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
            >Submit</button>
          </form>
        </div>
      )
    }
  }
}

export default PersonNew
