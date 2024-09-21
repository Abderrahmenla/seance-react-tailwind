import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import store from './store'
import { Provider } from 'react-redux'
import TanStackQueryClient from './providers/tanstack-query'
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <TanStackQueryClient>
      <Provider store={store}>
        <App />
      </Provider>
    </TanStackQueryClient>
  </React.StrictMode>
)

reportWebVitals()
