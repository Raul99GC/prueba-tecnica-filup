import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './pagination.module.css'
import { GrCaretNext, GrCaretPrevious } from 'react-icons/gr'

const Pagination = ({ totalPags, onClickPagination, pagination }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (page, type) => {
    setCurrentPage(page)

    if (type === 'prev') {
      onClickPagination(pagination.prevPage)
    }
    if (type === 'next') {
      onClickPagination(pagination.nextPage)
    }
  }

  const renderPageNumbers = () => {
    const pageNumbers = []
    const totalPages = totalPags

    // Limita la cantidad de botones a mostrar a 3
    const maxButtonsToShow = 3
    const maxPages = Math.min(currentPage + Math.floor(maxButtonsToShow / 2), totalPages)

    for (let i = Math.max(1, currentPage - Math.floor(maxButtonsToShow / 2)); i <= maxPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={i === currentPage ? `${styles.active} ${styles.red}` : styles.red}
        >
          {i}
        </button>
      )
    }

    return pageNumbers
  }

  return (
    <div className={styles.paginationContainer}>
      <button onClick={() => handlePageChange(Math.max(1, currentPage - 1), 'prev')} disabled={currentPage === 1}>
        <GrCaretPrevious />
      </button>
      {renderPageNumbers()}
      <button onClick={() => handlePageChange(Math.min(currentPage + 1, totalPags), 'next')} disabled={currentPage === totalPags}>
        <GrCaretNext />
      </button>
    </div>
  )
}

Pagination.propTypes = {
  totalPags: PropTypes.number.isRequired,
  onClickPagination: PropTypes.func.isRequired,
  pagination: PropTypes.object.isRequired
}

export default Pagination
