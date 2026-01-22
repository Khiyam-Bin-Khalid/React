import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import{jsx as _jsx} from 'react/jsx-runtime'
import React from 'react'
import './index.css'
import App from './App.jsx'


let anotheruser="Rehan Bin Khalid"
//As per React.createElement
//for practice this code is written
//syntax for creating react element using React.createElement(tag, props, children)

const reactElement=React.createElement(
  'a',
  { href: 'https://www.google.com', target: '_blank' },
  'Click me to visit Google',
  //injecting variable
  anotheruser
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {reactElement}
    <App />
  </StrictMode>
)
