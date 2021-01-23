import React, { useState } from 'react';
import './App.css';
import { calculateTotalNumberOfPages } from './utils'
import { ROWS_PER_PAGE } from './constants'
import AppContext from './AppContext'
import data from './data.json'
import DataTable from './DataTable';

const App = () => {
  const [currentPageNumber, setCurrentPageNumber] = useState(0)
  const [locale, setLocale] = useState('da')
  const [rows, setRows] = useState(data)
  const [rowsPerPage, setRowsPerPage] = useState(ROWS_PER_PAGE)
  const [totalNumberOfPages, setTotalNumberOfPages] = useState(calculateTotalNumberOfPages(rows))

  const context = {
    currentPageNumber,
    initialRows: data,
    locale, setLocale,
    rows, setRows,
    rowsPerPage,
    setCurrentPageNumber,
    setRowsPerPage,
    setTotalNumberOfPages,
    totalNumberOfPages,
  }

  return (
    <AppContext.Provider value={context}>
      <div className="container mt-3">
        <DataTable />
      </div>
    </AppContext.Provider>
  );
}

export default App;
