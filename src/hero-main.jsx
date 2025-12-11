import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './hero-index.css'
import HeroApp from './HeroApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroApp />
  </StrictMode>,
)

