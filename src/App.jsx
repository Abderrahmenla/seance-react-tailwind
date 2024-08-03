import './App.css'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages'
import Contact from './pages/contact'
import About from './pages/about'
import NotFound from './pages/not-found'
import Signup from './pages/sign-up'
function App() {
  return (
    <React.Suspense fallback={null}>
      <BrowserRouter>
        <Routes>
          <Route
            path={`${process.env.PUBLIC_URL + '/'}`}
            exact
            element={<Home />}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/about'}`}
            element={<About />}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/contact'}`}
            element={<Contact />}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/signup'}`}
            element={<Signup />}
          />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  )
}

export default App
