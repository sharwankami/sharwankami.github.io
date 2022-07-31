import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/app'
import '../scss/style.scss'

const container = document.getElementById('sk-app')
console.log('container', container)
if (typeof container !== 'undefined' && container !== null) {
    const root = createRoot(container)
    root.render(<App />)
}
