import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import Lista from './Lista'
import RenderCondicional from './RenderCondicional'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <hr />
    <Lista />
    <hr />
    <RenderCondicional />
  </React.StrictMode>,
)
