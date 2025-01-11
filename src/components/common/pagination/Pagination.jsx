'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 190252
  
  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  const renderPageNumbers = () => {
    const pages = []
    let startPage = Math.max(1, currentPage - 2)
    let endPage = Math.min(startPage + 4, totalPages)

    if (endPage - startPage < 4) {
      startPage = Math.max(1, endPage - 4)
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={cn(
            "h-8 w-8 rounded-md text-sm transition-colors hover:bg-gray-100",
            currentPage === i && "bg-gray-200 font-medium"
          )}
          aria-current={currentPage === i ? "page" : undefined}
        >
          {i}
        </button>
      )
    }

    return pages
  }

  return (
    <div className="flex items-center justify-center space-x-2 py-8">
      <Button 
        variant="outline" 
        size="sm"
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        ← Previous
      </Button>
      <div className="flex items-center space-x-1">
        {renderPageNumbers()}
        {currentPage + 3 < totalPages && (
          <>
            <span className="px-2">...</span>
            <button
              onClick={() => setCurrentPage(totalPages)}
              className="h-8 w-auto px-2 rounded-md text-sm hover:bg-gray-100"
            >
              {totalPages}
            </button>
          </>
        )}
      </div>
      <Button 
        variant="outline" 
        size="sm"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next →
      </Button>
    </div>
  )
}

