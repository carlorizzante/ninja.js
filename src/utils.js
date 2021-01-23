import { ROWS_PER_PAGE } from './constants'

export const calculateTotalNumberOfPages = (rows, rowsPerPage = ROWS_PER_PAGE) => {
  if (rowsPerPage === 0) return 0
  return Math.ceil(rows.length / rowsPerPage)
}

export const rowsInPageNumber = (pageNumber, rowsPerPage = ROWS_PER_PAGE) => {
  const startIndex = pageNumber * rowsPerPage
  return [startIndex, startIndex + rowsPerPage]
}
