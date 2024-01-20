import { useState } from 'react'
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom'
import './App.css'
import LoginPage from './Loginpage'
import RegistrationPage from './RegistrationPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/registration'
            element={<RegistrationPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
