import { BrowserRouter } from 'react-router'
import { AppShell } from '@/widgets/app-shell'
import { AppRoutes } from './AppRoutes'

export function AppRouter() {
  return (
    <BrowserRouter>
      <AppShell>
        <AppRoutes />
      </AppShell>
    </BrowserRouter>
  )
}
