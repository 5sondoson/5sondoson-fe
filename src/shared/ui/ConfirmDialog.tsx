import { useEffect } from 'react'

interface ConfirmDialogProps {
  open: boolean
  title: string
  description?: React.ReactNode
  confirmText?: string
  cancelText?: string
  tone?: 'default' | 'danger'
  loading?: boolean
  onConfirm: () => void
  onCancel: () => void
}

export default function ConfirmDialog({
  open,
  title,
  description,
  confirmText = '확인',
  cancelText = '취소',
  tone = 'default',
  loading = false,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !loading) onCancel()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, loading, onCancel])

  if (!open) return null

  const confirmClass =
    tone === 'danger'
      ? 'bg-red-500 hover:bg-red-600 text-white'
      : 'bg-brand hover:bg-brand-hover text-black'

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={() => !loading && onCancel()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="w-full max-w-sm rounded-3xl bg-card p-7 animate-fadeUp"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-bold text-white">{title}</h2>
        {description && (
          <div className="mt-2.5 text-sm text-gray-500 leading-relaxed">
            {description}
          </div>
        )}
        <div className="mt-7 flex flex-col gap-2">
          <button
            type="button"
            onClick={onConfirm}
            disabled={loading}
            className={`w-full py-3.5 rounded-2xl text-sm font-semibold transition-colors disabled:opacity-60 cursor-pointer ${confirmClass}`}
          >
            {loading ? '처리 중…' : confirmText}
          </button>
          <button
            type="button"
            onClick={onCancel}
            disabled={loading}
            className="w-full py-3.5 rounded-2xl text-sm font-medium text-gray-300 bg-button/80 ring-1 ring-border hover:text-white hover:ring-white/20 disabled:opacity-50 cursor-pointer transition-colors"
          >
            {cancelText}
          </button>
        </div>
      </div>
    </div>
  )
}
