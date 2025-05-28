import Navbar from './components/Nvabar'
import './App.css'
import About from './components/About'
import User from './components/User'
import Home from './components/Home'
import SignUp from './components/SignUp'


import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Login from './components/Login'
import Error404 from './components/Error404'

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
    },
    {
      path:'*',
      element:<><Navbar /><Error404/></>
    }
  ])

  return (
<>

    <div>
    <RouterProvider router={router}/>
    </div>


</>
  )
}

export default App
