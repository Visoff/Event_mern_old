import React, {FC} from 'react'
import ReactDOM from 'react-dom/client'
import fullscreen from './components/screen'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <fullscreen />
  </React.StrictMode>,
)
