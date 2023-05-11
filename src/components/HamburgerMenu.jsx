import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../components/assets/brand.png';







export default function HamburgerMenu() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="flex items-center justify-between border-b border-gray-400 py-8">
      <a href="/">
        <img src="https://designbygio.it/images/logo.png" alt="logo" />
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
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
                className="h-8 w-8 text-gray-600"
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
              <li className="border-b border-gray-400 my-8 uppercase">
               <a href="/about">About</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/portfolio">Portfolio</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/contact">Contact</a>
              </li> 
               <Link to='/About'><li className="block px-4 py-2 text-sm text-white hover:bg-gray-700">About Us</li></Link>
        <Link to='/About'><li className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Contact Us</li></Link>
        <Link to='/About'><li className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Service Us</li></Link>
        <Link to='/About'><li className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Login</li></Link>
        <Link to='/About'><li className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Create an account</li></Link>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}

// function HamburgerMenu() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="fixed top-0 left-0 right-0 w-full">
//       <nav className="flex items-center justify-between px-4 py-3  w-full z-50">
      /* <Link to='/' div className="logo">
                <img src={logo} alt=""className='logos'/>
            </Link> */
//         <button
//           className="block text-gray-500 hover:text-white focus:text-white focus:outline-none md:hidden"
//           onClick={toggleMenu}
//         >
//                    {isOpen ? (
//             <svg className="h-6 w-6 fill-current right-0" viewBox="0 0 24 24 outline-pink-500">
//               <path
//                 fill-rule="evenodd"
//                 clip-rule="evenodd"
//                 d="M19.41 4.58L12 12L19.41 19.41L16 23.83L6.17 14L16 4.17L19.41 8.58L19.41 4.58Z"
//               />
//             </svg>
//           ) : (
//             <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
//               <path
//                 fill-rule="evenodd"
//                 clip-rule="evenodd"
//                 d="M4.41 4.58L12 12L4.41 19.41L7.82 23.83L17.66 14L7.82 4.17L4.41 8.58L4.41 4.58Z"
//               />
//             </svg>
//           )}
//         </button>
//         <div className="hidden md:flex md:items-center">
     
   
//         </div>
//       </nav>
//       {isOpen && (
//         <div className="md:hidden bg-gray-800">
//         <Link to='/About'><li className="block px-4 py-2 text-sm text-white hover:bg-gray-700">About Us</li></Link>
//         <Link to='/About'><li className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Contact Us</li></Link>
//         <Link to='/About'><li className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Service Us</li></Link>
//         <Link to='/About'><li className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Login</li></Link>
//         <Link to='/About'><li className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Create an account</li></Link>
//         </div>
//       )}
//     </div>
//   );
// }

// export default HamburgerMenu;



// function HamburgerMenu() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="flex items-center justify-between px-4 py-3 bg-gray-900 md:hidden">
//       <div className="text-white font-bold text-xl">My App</div>
//       <button
//         className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
//           {isOpen ? (
//             <path
//               fill-rule="evenodd"
//               clip-rule="evenodd"
//               d="M3 5h18v2H3V5zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"
//             />
//           ) : (
//             <path
//               fill-rule="evenodd"
//               clip-rule="evenodd"
//               d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
//             />
//           )}
//         </svg>
//       </button>
//       {isOpen && (
//         <div className="flex flex-col mt-2 py-2 px-4 bg-gray-800">
//         <Link to='/About'><li className="block px-4 py-2 text-sm text-white hover:bg-gray-700">About Us</li></Link>
//         <Link to='/About'><li className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Contact Us</li></Link>
//         <Link to='/About'><li className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Service Us</li></Link>
//         <Link to='/About'><li className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Login</li></Link>
//         <Link to='/About'><li className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Create an account</li></Link>
//          Home
//           </a>
//           <a
//             href="#"
//             className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
//           >
//             About
//           </a>
//           <a
//             href="#"
//             className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
//           >
//             Contact
//           </a> 
//          </div>
//       )}
//     </div>
//   );
// }

// export default HamburgerMenu; 
