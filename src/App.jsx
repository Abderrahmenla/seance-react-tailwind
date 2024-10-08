import './App.css'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages'
import Contact from './pages/contact'
import About from './pages/about'
import NotFound from './pages/not-found'
import Signup from './pages/sign-up'
import FAQ from './pages/faq'
import Signin from './pages/sing-in'
import Blog from './pages/blog'
import Dashboard from './pages/dashboard'
import PrivateRoutesLayout from './layouts'
import BlogDetail from './pages/blog-detail'
import ReactState from './pages/react-state'
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
          <Route
            path={`${process.env.PUBLIC_URL + '/signin'}`}
            element={<Signin />}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/faq'}`}
            element={<FAQ />}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/blog'}`}
            element={<Blog />}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/blog-detail'}`}
            element={<BlogDetail />}
          />
          <Route
            path={`${process.env.PUBLIC_URL + '/react-state'}`}
            element={<ReactState />}
          />

          <Route exact path="*" element={<NotFound />} />
          {/* private routes */}
          <Route element={<PrivateRoutesLayout />}>
            <Route
              path={`${process.env.PUBLIC_URL + '/dashboard'}`}
              element={<Dashboard />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  )
}

export default App
