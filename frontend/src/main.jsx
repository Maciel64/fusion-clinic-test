import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom"

import router from './router.jsx'

import { SuperiorStateBarProvider } from './contexts/SuperiorStateBarContext'
import { UserProvider } from './contexts/UserContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <SuperiorStateBarProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </SuperiorStateBarProvider>
  </UserProvider>
)
