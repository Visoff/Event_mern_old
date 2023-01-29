import React, {FC, useContext} from 'react'
import ReactDOM from 'react-dom/client'
import Window from './components/screen'
import './index.css'

const currentFrame = React.createContext()
console.log(currentFrame)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Window />
  </React.StrictMode>,
)