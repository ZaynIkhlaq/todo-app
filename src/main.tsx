import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// The ! after getElementById is called a "non-null assertion"
// It tells TypeScript: "I'm 100% sure this element exists, don't worry about null"
// This is safe because we know index.html has a <div id="root"> element
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

