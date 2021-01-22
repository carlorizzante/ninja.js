import React from 'react'

const Page = ({ pageNumber, currentPageNumber, onChange }) => {
  const isActivePage = () => currentPageNumber === pageNumber
  const renderedPageNumber = () => pageNumber + 1

  const handleClick = (event) => {
    event.preventDefault()
    onChange(pageNumber)
  }

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
