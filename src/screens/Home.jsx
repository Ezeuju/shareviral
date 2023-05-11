import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../components/assets/brand.png';
import photo from '../components/assets/photo.png';
import mtn from '../components/assets/mtn.png';
import access from '../components/assets/access.png';
import airtel from '../components/assets/airtel.png';
import  africa from '../components/assets/africa.png';
import  map from '../components/assets/map.png';
import  girl from '../components/assets/girl.png';
import  youtube from '../components/assets/youtube.png';
import  twitter from '../components/assets/twitter.png';
import  facebook from '../components/assets/facebook.png';
import  Navbar from '../components/Navbar';
// import NavForSmallScreen from '../components/NavForSmallScreen';

const Home = () => {
  return (
    <div>
      <div className="header">
      <Navbar />
     
          
        <div className='first'>
        <div className='audience'>
          <div className='reach'>
            <h1 className='share'>Reach more audience<br />with ShareViral</h1>
            <p className='earn'>Become an <span className='lighter'>Advertiser</span> or <span className='lighter'>earn</span> cash when  you <span className='lighter'>share.</span></p>
            <Link to='/Faq'><span className='create-two'>Create An account</span></Link>
            <p className='trust'>Trusted by to companies</p>
            </div>
          <div className='photo'>
          <img src={photo} alt=""className='boys'/>
          </div>
        </div>
        <div className='networks'>
        <div className='mtn'><img src={mtn} alt=""className='mtn'/></div>
        <div className='access'><img src={access} alt=""className='access'/></div>
        <div className='airtel'><img src={airtel} alt=""className='airtel'/></div>
        <div className='africa'><img src={africa} alt=""className='africa'/></div>
        </div>
        </div>
      </div>
      <div className='second'>
        <div className='make'>
        <h2 className='viral'>Make your business go viral with ShareViral.</h2>
        <p>Your business/product deserves the best publicity.
          It deserves to reach as many persons as possible.
          Shareviral.com has made it so easy for you to be able to get products/service out there to your target market without putting hole in your pocket.
          </p>
          </div>
           <div className='mapper'>
           <img src={map} alt=""className='map'/>
           </div>
      </div>
      <div className='third'>
        <div className='girlie'>
      <img src={girl} alt=""className='girl'/>
      </div>
      <div className='text'>
        <h3> How does it really work</h3>
        <p className='small'>
          <p className='blue'>For Individual</p>
          <p className='grey'>For Oganization</p>
        </p>
        <p className='para'>Your business/product deserves the best publicity.
          It deserves to reach as many persons as possible.
          Shareviral.com has made it so easy for you to be able to get products/service out there to your target market without putting hole in your pocket.
          </p>
          <p className='yellow'>Learn more...</p>
      </div>
      </div>
      <div className='fourth'>
        <div className='ads'>
        <div className='flex'>
          <h4>32</h4>
          <p className='advert'>Advertizers</p>
        </div>
        <div className='flex'>
          <h4>32</h4>
          <p className='advert'>Posted ADS</p>
        </div>
        <div className='flex'>
          <h4>32</h4>
          <p className='advert'>Sharing</p>
        </div>
        <div className='flex'>
          <h4>32,000</h4>
          <p className='advert'>Payout</p>
        </div>
        </div>
      </div>
      <div className='fifth'>
        <h5>Subscribe to News Letter</h5>
        <form className="news">
      <div className='mail-input'><input type="text" className="email" placeholder="Email Address" /></div>
      <button type="submit" className='subscribe'>Subscribe</button>
    </form>
      </div>
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

export default Home
