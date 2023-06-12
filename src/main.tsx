import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App.tsx'
import { ThemaStorage } from './context/ThemeContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemaStorage>
    <App />
  </ThemaStorage>,
)
