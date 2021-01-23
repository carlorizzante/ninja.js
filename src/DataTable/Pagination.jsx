import React, { useContext } from 'react'
import Page from './Page'
import AppContext from '../AppContext'

const Pagination = () => {
  const { totalNumberOfPages } = useContext(AppContext)

  const pages =
    Array
      .from(Array(totalNumberOfPages).keys())
      .map(pageNumber => {
        return <Page
          key={pageNumber}
          pageNumber={pageNumber} />
      })

  if (pages.length <= 1) {
    return null
  }

  return(
    <ul className="pagination">
      {pages}
    </ul>
  )
}

export default Pagination
