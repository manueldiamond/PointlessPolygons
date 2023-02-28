import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Counter from './Counter'
function App() {
  
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo glow" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react glow" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Redux</h1>
      <div className="card">
      <Counter/>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
