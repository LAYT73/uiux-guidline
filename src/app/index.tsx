import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppProviders } from './lib/providers'
import { AppRouter } from './router'
import './styles/index.css'

const root = document.getElementById('root')

if (!root) {
  throw new Error('Root element #root was not found')
}

createRoot(root).render(
  <StrictMode>
    <AppProviders>
      <AppRouter />
    </AppProviders>
  </StrictMode>,
)
