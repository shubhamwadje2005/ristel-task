import React, { lazy } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
const HomePage = lazy(() => import('./components/Home/HomePage'))
const ProductFilterPage = lazy(() => import('./components/productFilterpage/ProductFilterPage'))
const ProductDetailsPage = lazy(() => import('./components/productDetailsPage/ProductDetailsPage'))

import { ErrorBoundary } from 'react-error-boundary'
import Layout from './components/Layout'
const App = () => {
  const location = useLocation()
  const ErrorFeedback = () => {
    return <div>
      <h1>something went wrong</h1>
    </div>
  }
  return <>
    <Routes>
      <Route path='/' element={<ErrorBoundary resetKeys={[location.pathname]} FallbackComponent={ErrorFeedback}><Layout /></ErrorBoundary>} >
        <Route index element={<ErrorBoundary resetKeys={[location.pathname]} FallbackComponent={ErrorFeedback}><HomePage /></ErrorBoundary>} />
        <Route path='productfilter' element={<ErrorBoundary resetKeys={[location.pathname]} FallbackComponent={ErrorFeedback}><ProductFilterPage /></ErrorBoundary>} />
        <Route path='productdetails' element={<ErrorBoundary resetKeys={[location.pathname]} FallbackComponent={ErrorFeedback}><ProductDetailsPage /></ErrorBoundary>} />
      </Route>
      <Route path='*' element={<h1>Page Not Found</h1>} />
    </Routes>
  </>
}

export default App