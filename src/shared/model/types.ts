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
