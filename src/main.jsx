import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App.jsx'
import store from './redux/store.js'
import './index.css'
import {I18nextProvider} from "react-i18next"
import i18next from 'i18next'

import global_es from './translations/es/global.json'
import global_en from './translations/en/global.json'

i18next.init({
interpolation: { escapeValue: false },
lng: 'es',
resources: {
  es: {
    global: global_es
  },
  en: {
    global: global_en
  }
}
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
    </I18nextProvider>
  </React.StrictMode>,
)

