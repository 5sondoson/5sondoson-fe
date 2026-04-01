import { useEffect, useRef, useState } from 'react'
import ChevronDownIcon from '@/assets/icons/chevron-down.svg?react'
import { type DropdownPosition, type DropdownProps } from '@/shared/model/types'

export function Dropdown({
  options,
  value,
  onChange,
  placeholder,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState<DropdownPosition | null>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const selectedOption = options.find((o) => o.value === value)

  const calculatePosition = (): DropdownPosition | null => {
    if (!triggerRef.current) return null
    const rect = triggerRef.current.getBoundingClientRect()
    return {
      top: rect.bottom + 4,
      left: rect.left,
      width: rect.width,
    }
  }

  const toggle = () => {
    if (isOpen) {
      setIsOpen(false)
    } else {
      setPosition(calculatePosition())
      setIsOpen(true)
    }
  }

  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node
      const isInsideTrigger = triggerRef.current?.contains(target)
      const isInsideDropdown = dropdownRef.current?.contains(target)
      if (!isInsideTrigger && !isInsideDropdown) {
        setIsOpen(false)
      }
    }

    const handleScroll = () => setIsOpen(false)

    document.addEventListener('mousedown', handleClickOutside)
    window.addEventListener('scroll', handleScroll, true)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('scroll', handleScroll, true)
    }
  }, [isOpen])

  return (
    <div className="relative w-full">
      <button
        ref={triggerRef}
        type="button"
        onClick={toggle}
        className="flex w-full items-center justify-between rounded-lg bg-page px-3 py-2.5 text-sm text-white ring-1 ring-border transition-colors focus:outline-none focus:ring-brand"
      >
        <span className="flex min-w-0 items-center gap-2">
          {selectedOption?.flagUrl && (
            <img
              src={selectedOption.flagUrl}
              alt={selectedOption.label}
              className="h-3 w-4 shrink-0 object-cover"
            />
          )}
          <span className="truncate">
            {selectedOption?.label ?? placeholder}
          </span>
        </span>
        <ChevronDownIcon
          className={`ml-2 h-3.5 w-3.5 shrink-0 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && position && (
        <div
          ref={dropdownRef}
          style={{
            position: 'fixed',
            top: position.top,
            left: position.left,
            width: position.width,
          }}
          className="z-50 overflow-hidden rounded-lg bg-card ring-1 ring-border"
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value)
                setIsOpen(false)
              }}
              className={`flex w-full items-center gap-2 px-3 py-2.5 text-sm transition-colors ${
                option.value === value
                  ? 'bg-brand/10 text-brand'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              {option.flagUrl && (
                <img
                  src={option.flagUrl}
                  alt={option.label}
                  className="h-3 w-4 shrink-0 object-cover"
                />
              )}
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
