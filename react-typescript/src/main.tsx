import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import About from './Pages/About.tsx'
import NotFound from './Pages/NotFound.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

 const router = createBrowserRouter([
 {
  path: '/',
  element: <App/>,
  errorElement: <NotFound/>,
 },

 {
  path: '/About',
  element: <About/>
 },

 ])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
   </React.StrictMode>,
)
