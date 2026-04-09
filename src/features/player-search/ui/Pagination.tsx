import ChevronLeftIcon from '@/assets/icons/chevron-left.svg?react'
import ChevronRightIcon from '@/assets/icons/chevron-right.svg?react'
import { type PaginationProps } from '../model/types'

function getPageNumbers(current: number, total: number): (number | '...')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)

  if (current <= 4) return [1, 2, 3, 4, 5, '...', total]
  if (current >= total - 3)
    return [1, '...', total - 4, total - 3, total - 2, total - 1, total]
  return [1, '...', current - 1, current, current + 1, '...', total]
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = getPageNumbers(currentPage, Math.max(totalPages, 1))

  return (
    <div className="flex items-center justify-center gap-1">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="cursor-pointer flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition-colors hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
      >
        <ChevronLeftIcon />
      </button>

      {pages.map((page, i) =>
        page === '...' ? (
          <span
            key={`ellipsis-${i}`}
            className="flex h-8 w-8 items-center justify-center text-sm text-gray-600"
          >
            ···
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`flex cursor-pointer h-8 w-8 items-center justify-center rounded-lg text-sm font-medium transition-colors ${
              page === currentPage
                ? 'bg-brand text-black font-semibold'
                : 'text-gray-500 hover:bg-white/5 hover:text-white'
            }`}
          >
            {page}
          </button>
        ),
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex cursor-pointer h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition-colors hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
      >
        <ChevronRightIcon />
      </button>
    </div>
  )
}
