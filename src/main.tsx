import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { SnackbarProvider } from 'notistack'
import CustomQueryClientProvider from './providers/CustomQueryClientProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CustomQueryClientProvider>
      <SnackbarProvider preventDuplicate>
        <App />
      </SnackbarProvider>
    </CustomQueryClientProvider>
  </StrictMode>,
)
