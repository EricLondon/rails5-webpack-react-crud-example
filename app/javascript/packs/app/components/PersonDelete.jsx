import React from 'react'
import { Route, Redirect } from 'react-router'

class PersonDelete extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      person_id: props.match.params.id,
      redirect: null
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/people/${this.state.person_id}`, {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' }
    })
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

  render() {
    if (this.state.redirect) {
      return (
        <Redirect to={this.state.redirect} />
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default PersonDelete
