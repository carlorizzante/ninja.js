import React, { useContext } from 'react'
import AppContext from '../AppContext'

const Page = ({ pageNumber }) => {
  const {
    currentPageNumber,
    setCurrentPageNumber,
  } = useContext(AppContext)

  const handleClick = (event) => {
    event.preventDefault()
    setCurrentPageNumber(pageNumber)
  }

  const isActivePage = () => currentPageNumber === pageNumber
  const renderedPageNumber = () => pageNumber + 1

  if (isActivePage()) {
    return (
      <li className="page-item mr-1">
        <button className="page-link button-outline" onClick={handleClick} >{renderedPageNumber()}</button>
      </li>
    )
  }

  return (
    <li className="page-item mr-1">
      <button className="page-link" onClick={handleClick} >{renderedPageNumber()}</button>
    </li>
  )
}

export default Page
