import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ComponentUseRef from './ComponentUseRef'
import './index.css'
import ComponentUseMemo from './ComponentUseMemo.jsx'
import ComponentUseContext from './ComponentUseContext.jsx'
import ComponentUseReducer from './ComponentUseReducer.jsx'
import ComponentUseCallback from './ComponentUseCallback.jsx'
import CustomHooks from './CustomHooks.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
     <hr></hr>
    <ComponentUseRef />
     <hr></hr>
    <ComponentUseMemo />
    <hr></hr>
    <ComponentUseContext />
    <hr></hr>
    <ComponentUseReducer />
    <hr></hr>
    <ComponentUseCallback />
    <hr></hr>
    <CustomHooks step={1} />
     <hr></hr>
    <CustomHooks step={3} />
  </React.StrictMode>,
)
