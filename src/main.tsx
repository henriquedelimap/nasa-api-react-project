import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FetchProvider } from './Comon/Context/Fetch'
import theme from './Style'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FetchProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </FetchProvider>
  </React.StrictMode>
)
