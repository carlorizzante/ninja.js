import React, { useContext } from 'react'
import AppContext from '../AppContext'
import { calculateTotalNumberOfPages } from '../utils'

const Search = () => {
  const {
    initialRows,
    rowsPerPage,
    setCurrentPageNumber,
    setRows,
    setTotalNumberOfPages,
  } = useContext(AppContext)

  const handleSearch = (event) => {
    const text = event.target.value
    let rowsFound

    if (text) {
      rowsFound = initialRows.filter((row) =>
        row.name1.toLowerCase().search(text.toLowerCase()) > -1 ||
        (row.email && row.email.toLowerCase().search(text.toLowerCase()) > -1))
    } else {
      rowsFound = initialRows
    }

    setRows(rowsFound)
    setCurrentPageNumber(0)
    setTotalNumberOfPages(calculateTotalNumberOfPages(rowsFound, rowsPerPage))
  }

  return (
    <div className="p-b-1">
      <input
        type="search"
        className="form-control"
        placeholder="Søg brugere"
        onChange={handleSearch} />
    </div>
  )
}

export default Search
