import React from 'react'
import { NavLink } from 'react-router-dom'
import { ToastContainer , toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Nvabar = () => {
     const navigate = useNavigate()

  const handleLogout = () => {
    const existingToken = localStorage.getItem("Token");
    if (!existingToken) {
      toast.info("No current login");
    return;
  }
  else{
    localStorage.removeItem("Token"); // Remove the token
    toast.success("Logged out successfully");
    navigate("/login"); // Redirect to login (or any route you want)
  }
};

  
  return (
    <>
    <div>
      <nav>

        <NavLink className={(e) => { return e.isActive ? "navred" : "" }} to="/"><li>Home</li></NavLink>
        <NavLink className={(e) => { return e.isActive ? "navred" : "" }} to="/about"><li>About</li></NavLink>
        <NavLink className={(e) => { return e.isActive ? "navred" : "" }} to="/contact"><li>Contact</li></NavLink>
        <NavLink className={(e) => { return e.isActive ? "navred" : "" }} to="/login"><li>Login</li></NavLink>
        <NavLink onClick={handleLogout} ><li>Logout</li></NavLink>

        <svg onClick={() => window.open("https://github.com/Naveen-Gupta99", "_blank")} className="github" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="github">
          <path fill="#00020c" fillRule="evenodd" d="m60,12c0-4.42-3.58-8-8-8H12c-4.42,0-8,3.58-8,8v40c0,4.42,3.58,8,8,8h40c4.42,0,8-3.58,8-8V12h0Z"></path>
          <path fill="#fff" fillRule="evenodd" d="m26.73,47.67c0,1.1-.01,2.3-.01,3.4,0,.26-.13.51-.34.67-.21.16-.49.2-.74.13-8.4-2.7-14.49-10.58-14.49-19.87,0-11.51,9.34-20.85,20.85-20.85s20.85,9.34,20.85,20.85c0,9.28-6.08,17.15-14.46,19.85-.25.08-.53.03-.74-.13-.21-.16-.34-.4-.34-.67-.02-2.45-.03-5.34-.03-6.65s-1.28-2.39-1.28-2.39c0,0,9.45-1.16,9.45-9.34,0-5.19-2.06-6.94-2.06-6.94.44-1.86.38-3.63-.1-5.31-.07-.24-.31-.4-.56-.38-2.01.18-3.85.91-5.52,2.24,0,0-2.95-.81-5.2-.81h0c-2.25,0-5.2.81-5.2.81-1.67-1.32-3.52-2.06-5.52-2.24-.25-.02-.49.14-.56.38-.48,1.68-.54,3.45-.11,5.31,0,0-2.05,1.75-2.05,6.94,0,8.18,9.45,9.34,9.45,9.34,0,0-1.28,1.08-1.28,2.39v.3c-.72.26-1.7.5-2.8.43-2.99-.2-3.39-3.42-4.62-3.94-.9-.38-1.78-.43-2.45-.37-.2.02-.36.16-.41.35-.05.19.02.39.18.51.81.55,1.89,1.33,2.19,1.9.81,1.52,2.06,3.93,3.67,4.19,1.96.32,3.36.13,4.25-.12h0Z"></path>
        </svg>

        <svg onClick={() => window.open('https://www.linkedin.com/in/naveen-kumar-gupta-510190336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', "_blank")} className="linkedIn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112.196 112.196" id="linkedin">
          <circle cx="56.098" cy="56.097" r="56.098" fill="#007ab9"></circle>
          <path fill="#f1f2f2" d="M89.616 60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118-3.705 0-5.906 2.491-6.878 4.903-.353.862-.444 2.059-.444 3.268v22.524h-13.41s.18-36.546 0-40.329h13.411v5.715c-.027.045-.065.089-.089.132h.089v-.132c1.782-2.742 4.96-6.662 12.085-6.662 8.822 0 15.436 5.764 15.436 18.149zm-54.96-36.642c-4.587 0-7.588 3.011-7.588 6.967 0 3.872 2.914 6.97 7.412 6.97h.087c4.677 0 7.585-3.098 7.585-6.97-.089-3.956-2.908-6.967-7.496-6.967zm-6.791 59.77H41.27v-40.33H27.865v40.33z"></path>
        </svg>


        <svg onClick={() => window.open('https://www.youtube.com/@MrCode99', "_blank")} className="youtub" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48" id="youtube">
          <rect width="48" height="48" fill="red" rx="24"></rect>
          <path fill="#fff" fillRule="evenodd" d="M35.7379 14.1401C37.0229 14.486 38.0361 15.4992 38.3821 16.7842C39.0246 19.1318 38.9999 24.0247 38.9999 24.0247C38.9999 24.0247 38.9999 28.8929 38.3821 31.2405C38.0361 32.5255 37.0229 33.5387 35.7379 33.8846C33.3903 34.5024 23.9999 34.5024 23.9999 34.5024C23.9999 34.5024 14.6342 34.5024 12.2619 33.8599C10.9769 33.5139 9.96375 32.5008 9.61779 31.2158C9 28.8929 9 24 9 24C9 24 9 19.1318 9.61779 16.7842C9.96375 15.4992 11.0016 14.4613 12.2619 14.1153C14.6095 13.4976 23.9999 13.4976 23.9999 13.4976C23.9999 13.4976 33.3903 13.4976 35.7379 14.1401ZM28.8187 24L21.0098 28.4975V19.5025L28.8187 24Z" clipRule="evenodd"></path>
        </svg>


        <svg onClick={() => window.open('https://www.instagram.com/naveen___9161/', "_blank")} className='insta' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" id='insta'>
          <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fd5"></stop><stop offset=".328" stopColor="#ff543f"></stop><stop offset=".348" stopColor="#fc5245"></stop><stop offset=".504" stopColor="#e64771"></stop><stop offset=".643" stopColor="#d53e91"></stop><stop offset=".761" stopColor="#cc39a4"></stop><stop offset=".841" stopColor="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#4168c9"></stop><stop offset=".999" stopColor="#4168c9" stopOpacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
        </svg>


      </nav>
    </div>

    <ToastContainer/>
    </>
  )
}

export default Nvabar

