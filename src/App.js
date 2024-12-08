import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Header from './components/Header'
import { Toaster } from 'react-hot-toast'
import MyBlogPage from './pages/MyBlogPage'
import ProtectedRoute from './utils/ProtectRoutes'

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/my-blogs" element={<ProtectedRoute component={MyBlogPage} />} />
        </Routes>
        <div><Toaster/></div>
      </Router>
    </div>
  )
}

export default App;