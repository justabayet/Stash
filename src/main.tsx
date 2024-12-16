import ReactDOM from 'react-dom/client'

import App from './index'

import './index.css'

import { BrowserRouter } from 'react-router'

const root = ReactDOM.createRoot(document.querySelector('#root')!)

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
