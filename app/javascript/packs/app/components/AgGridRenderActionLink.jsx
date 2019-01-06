import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class AgGridRenderEditLink extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      person: props.data,
      headerName: props.colDef.headerName,
      pathSegment: props.colDef.headerName.toLowerCase(),
      buttonClass: (props.colDef.headerName == 'Delete' ? 'btn btn-danger' : 'btn btn-primary')
    }
  }

  render() {
    return (
      <Link className={this.state.buttonClass} to={`/person/${this.state.person.id}/${this.state.pathSegment}`}>{this.state.headerName}</Link>
    )
  }
}

export default AgGridRenderEditLink
