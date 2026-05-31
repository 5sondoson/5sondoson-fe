export function AppFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2">
          <img src="/logo-light.svg" alt="Footure 로고" className="h-7 w-7" />
          <span className="text-sm font-semibold text-gray-300">Footure</span>
        </div>
        <span className="text-xs text-gray-600">© 2026 Footure</span>
      </div>
    </footer>
  )
}
