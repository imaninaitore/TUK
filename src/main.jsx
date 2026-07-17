import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { AuthProvider } from './context/AuthContext'
import { ProgrammeProvider } from './context/ProgrammeContext'
import { ApplicationProvider } from './context/ApplicationContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <ProgrammeProvider>
        <ApplicationProvider>
         <App />
         </ApplicationProvider>
      </ProgrammeProvider>  
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
