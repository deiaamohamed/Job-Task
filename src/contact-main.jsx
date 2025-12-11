import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './contact-index.css'
import ContactApp from './ContactApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContactApp />
  </StrictMode>,
)
