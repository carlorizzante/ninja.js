import React, { useState } from 'react'
import Pagination from './Pagination'
import Row from './Row'
import Search from './Search'

const ROWS_PER_PAGE = 4

const calculateTotalNumberOfPages = (rows, rowsPerPage = ROWS_PER_PAGE) => {
  if (rowsPerPage === 0) return 0
  return Math.ceil(rows.length / rowsPerPage)
}

const rowsInPageNumber = (pageNumber, rowsPerPage = ROWS_PER_PAGE) => {
  const startIndex = pageNumber * rowsPerPage
  return [startIndex, startIndex + rowsPerPage]
}

const DataTable = ({ rows: passedRows, rowsPerPage }) => {
  const [rows, setRows] = useState(passedRows)
  const [currentPageNumber, setCurrentPageNumber] = useState(0)
  const [totalNumberOfPages, setTotalNumberOfPages] = useState(calculateTotalNumberOfPages(rows))

  const handleSearch = (event) => {
    const text = event.target.value
    let rowsFound

    if (text) {
      rowsFound = passedRows.filter((row) =>
        row.name1.toLowerCase().search(text.toLowerCase()) > -1 ||
        (row.email && row.email.toLowerCase().search(text.toLowerCase()) > -1))
    } else {
      rowsFound = passedRows
    }

    setRows(rowsFound)
    setCurrentPageNumber(0)
    setTotalNumberOfPages(calculateTotalNumberOfPages(rowsFound, rowsPerPage))
  }

  const handleChangePage = (pageNumber) => {
    setCurrentPageNumber(pageNumber)
  }

  const rowsToRender = rows
    .map(row => <Row key={row.per_id} row={row} />)
    .slice(...rowsInPageNumber(currentPageNumber, rowsPerPage))

  return (
    <div>
      <Search onSearch={handleSearch} />
      <table>
        <tbody>
          {rowsToRender}
        </tbody>
      </table>
      <Pagination
        currentPageNumber={currentPageNumber}
        totalNumberOfPages={totalNumberOfPages}
        onChange={handleChangePage} />
    </div>
  )
}

export default DataTable
