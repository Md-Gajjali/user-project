import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeContext from './Context/ThemeContext.jsx'
import UseContext from './Context/UseContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseContext>
      <ThemeContext>
        <App />
      </ThemeContext>
    </UseContext>
  </StrictMode>,
)
