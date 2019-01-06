import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import { AgGridReact } from 'ag-grid-react';

import AgGridRenderActionLink from './AgGridRenderActionLink'

// TODO:
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class PeopleTable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      people: props.people,
      grid: {
        rowData: props.people,
        columnDefs: [
          {
            headerName: 'ID',
            field: 'id',
            minWidth: 50,
            sort: 'asc'
          },
          {
            headerName: 'Email',
            field: 'email',
            minWidth: 100
          },
          {
            headerName: 'First Name',
            field: 'first_name',
            minWidth: 100
          },
          {
            headerName: 'Last Name',
            field: 'last_name',
            minWidth: 100
          },
          {
            headerName: 'Edit',
            cellRendererFramework: AgGridRenderActionLink,
            autoHeight: true,
            cellStyle: {
              padding: '5px'
            }
          },
          {
            headerName: 'Delete',
            cellRendererFramework: AgGridRenderActionLink,
            autoHeight: true,
            cellStyle: {
              padding: '5px'
            }
          }
        ]
      }
    }

    this.onGridReady = this.onGridReady.bind(this)
  }

  onGridReady(params) {
    params.api.sizeColumnsToFit()

    setTimeout(function () {
      params.api.resetRowHeights()
    }, 100)
  }

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          width: '100%'
        }}
      >
        <AgGridReact
          domLayout='autoHeight'
          enableColResize={true}
          enableSorting={true}
          columnDefs={this.state.grid.columnDefs}
          rowData={this.state.grid.rowData}
          onGridReady={this.onGridReady}
        ></AgGridReact>
      </div>
    )
  }
}

export default PeopleTable
