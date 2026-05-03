export interface DropdownOption {
  value: string
  label: string
  flagUrl?: string
}

export interface DropdownProps {
  options: DropdownOption[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export interface DropdownPosition {
  top: number
  left: number
  width: number
}

export interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  onSearch: () => void
  isFilterOpen?: boolean
  onFilterToggle?: () => void
  showFilterButton?: boolean
  className?: string
  isSuggestionSectionOpen?: boolean
}
