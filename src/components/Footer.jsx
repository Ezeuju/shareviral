import React from 'react'
import  youtube from '../components/assets/youtube.png';
import  twitter from '../components/assets/twitter.png';
import  facebook from '../components/assets/facebook.png';

const footer = () => {
  return (
    <div>
        <div className='footer'>
      <ul className='footer-ul'>
                <li>About us</li>
                <li>Contact Us</li>
                <li>Service</li>
                <li>Login</li>
                </ul>
                <p className='footer-p'>All trademarks, service marks, trade names, product names, logos and trade dress appearing on our website are the property of their respective owners. Adobe,</p>
                <div className='socials'>
                <img src={youtube} alt=""className='youtube'/>
                <img src={twitter} alt=""className='twitter'/>
                <img src={facebook} alt=""className='facebook'/>
                </div>
      </div>
    </div>
  )
}

export default footer
