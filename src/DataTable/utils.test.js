import { calculateTotalNumberOfPages, rowsInPageNumber } from './utils'

describe('calculateTotalNumberOfPages', () => {
  it('should default to 0 if no rows', () => {
    const totalNumberOfPages = calculateTotalNumberOfPages([])
    expect(totalNumberOfPages).toBe(0)
  })

  it('should default to 0 if 0 rows', () => {
    const totalNumberOfPages = calculateTotalNumberOfPages([], 0)
    expect(totalNumberOfPages).toBe(0)
  })

  it('should return correct number of pages', () => {
    const totalNumberOfPages = calculateTotalNumberOfPages([1,2,3,4,5], 2)
    expect(totalNumberOfPages).toBe(3)
  })
})

describe('rowsInPageNumber', () => {
  it('should return correct rows in page number', () => {
    const value = rowsInPageNumber(1,3)
    expect(value).toEqual([3, 6])
  })
})
