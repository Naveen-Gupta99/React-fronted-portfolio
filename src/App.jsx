
import Navbar from './components/Nvabar'
import './App.css'
import About from './components/About'
import User from './components/User'
import Home from './components/Home'
import SignUp from './components/SignUp'
import Footer from './components/Footer'

import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Login from './components/Login'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar /><Home/></>

    },
    {
      path: '/signup',
      element: <><Navbar /><SignUp/></>

    },
    {
      path: '/about',
      element: <><Navbar /><About/></>
    },
    {
      path:'contact',
      element: <><Navbar /><User/></>
    },
    {
      path:'/login',
      element: <><Navbar /><Login/></>
    }
  ])

  return (
<>

    <div>
    <RouterProvider router={router}/>
    </div>

<Footer/>
</>
  )
}

export default App
