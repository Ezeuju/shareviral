import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../components/assets/brand.png';





// full code link: https://codesandbox.io/s/tailwind-react-hamburger-menu-tjhfyx

import { useState } from "react"; // import state

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="flex items-center justify-between  pt-4 w-full relative">
       <Link to='/' div className="logo ml-8 w-60">
          <img src={logo} alt=""className='logos'/>
          </Link>
    
    <nav>
        
        <section className="MOBILE-MENU flex lg:hidden ">
          <div
            className="HAMBURGER-ICON space-y-2 absolute top-0 right-0 mt-8 mr-8"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>  
          <div className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase text-white">
                <a href="/about">About Us</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase text-white">
                <a href="/contact">Contact Us</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase text-white">
                <a href="/service">Service</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase text-white">
                <a href="/welcomeN">Login</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase text-white">
                <a href="/signin">Create An account</a>
              </li>
            </ul>
          </div>
        </section>

        <ul>
          <Link to='/About'><li>About us</li></Link>
          <Link to='/Contact'><span className='contact'><li>Contact Us</li></span></Link>
          <Link to='/Service'><li>Service</li></Link>             <Link to='/SignIn'><span className='login'><li>Login</li></span></Link>
          < Link to='/NewR' span className='create'><li>Create An account</li></Link>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        // display: block;
        // position: absolute;
        // width: 100%;
        // min-height: 100vh;
        // top: 0;
        // left: 0;
        // background: #293A96;;
        // z-index: 10;
        // display: flex;
        // flex-direction: column;
        // justify-content: space-evenly;
        // align-items: center;
        
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #293A96;; 
          z-index: 9999; 
          display: flex;
          align-items: center;
          justify-content: center;
        
      }
    `}</style>
    </div>
  );
}
// const navbar = () => {
//   return (
    
//             <nav className='sm:hidden md:flex'>
//             <Link to='/' div className="logo sm:hidden">
//                 <img src={logo} alt=""className='logos sm:hidden'/>
//             </Link>
//             <ul>
//                 <Link to= '/About'><li>About us</li></Link>
//                 <Link to='/Contact'><span className='contact'><li>Contact Us</li></span></Link>
//                 <Link to='/Service'><li>Service</li></Link>
//                <Link to='/SignIn'><span className='login'><li>Login</li></span></Link>
//                 < Link to= '/NewR'span className='create'><li>Create An account</li></Link>
//             </ul>
//           </nav>
      
  
//   )
// }

// export default navbar
