import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Chat from './components/Chat/Chat'
import Join from './components/Join/Join'
import ErrorScreen from './components/Error/ErrorScreen'

import './App.css'
import LoadingPage from './components/LoadingPage/LoadingPage'


const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Join />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/error" element={<ErrorScreen />} />
            <Route path="*" element={<Join />} />
            <Route path="/loading" element={<LoadingPage />} />
        </Routes>
    </Router>
  )
}

export default App