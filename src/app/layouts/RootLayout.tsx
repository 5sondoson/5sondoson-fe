import { Outlet } from 'react-router'
import { useHeaderVisibility } from '@/shared/lib/useHeaderVisibility'
import { AppHeader } from '@/widgets/header'
import { AppFooter } from '@/widgets/footer'

export function RootLayout() {
  const isHeaderVisible = useHeaderVisibility()

  return (
    <>
      <AppHeader isVisible={isHeaderVisible} />
      <Outlet />
      <AppFooter />
    </>
  )
}
