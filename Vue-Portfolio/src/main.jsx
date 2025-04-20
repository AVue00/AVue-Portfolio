import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import AboutMe from './components/AboutMe.jsx'
import Portfolio from './components/Portfolio.jsx'
import Contact from './components/Contact.jsx'
import Resume from './components/Resume.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        index: true,
        element: <AboutMe></AboutMe>
      },
      {
        path: 'Portfolio',
        element: <Portfolio></Portfolio>
      },
      {
        path: 'Contact',
        element: <Contact></Contact>
      },
      {
        path: 'Resume',
        element: <Resume></Resume>
      }
    ]
  }


])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
