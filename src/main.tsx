import React, {FC} from 'react'
import ReactDOM from 'react-dom/client'
import Window from './components/screen'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Window />
  </React.StrictMode>,
)

import load from "./onload.ts"
load()