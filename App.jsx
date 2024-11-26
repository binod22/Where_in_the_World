import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import './App.css'
import { useState } from 'react'

const App = () => {
  const [isDark, setDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')));
  return (
    <>
      <Header theme={[isDark, setDark]} />
      <Outlet context={[isDark, setDark]}/>
    </>
  )
}

export default App