import React, { useContext } from 'react'
import { rowsInPageNumber } from '../utils'
import AppContext from '../AppContext'
import Row from './Row'

const Table = () => {
  const {
    currentPageNumber,
    rows,
    rowsPerPage,
  } = useContext(AppContext)

  const rowsToRender = rows
    .map(row => <Row key={row.per_id} row={row} />)
    .slice(...rowsInPageNumber(currentPageNumber, rowsPerPage))

  return (
    <table>
      <tbody>
        {rowsToRender}
      </tbody>
    </table>
  )
}

export default Table
