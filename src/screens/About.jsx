import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import  davidOne from '../components/assets/davidOne.svg';
import  davidTwo from '../components/assets/davidTwo.svg';
import  emma from '../components/assets/emma.svg';
import  paul from '../components/assets/paul.svg';


const about = () => {
  return (
    <div>
      <div className='about-us'>
      <Navbar />
      <div className='we'>
        <h1 className='change'>We changing the narrative on<br /> how adverts are done</h1>
        <p className='platform'>ShareViral.com is the foremost networking-advertising(NedAds) platform in Africa. It helps individuals, companies and organizations reach out to their target audience</p>
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
      </div>
      <div className='white'>
        <h2>The team</h2>
        <p>We’re a diverse, close-knit team on an adventure to build something<br /> enduring, while learning something new, every day.</p>
      <div className='circles'>
        <div className='circle-one'>
        <img src={davidOne} alt=""className='david'/>
        <h5>David Harvoxx</h5>
        <h6>Software Engineer</h6>
        </div>
        <div className='circle-one'>
        <img src={davidTwo} alt=""className='david'/>
        <h5>David Harvoxx</h5>
        <h6>Software Engineer</h6>
        </div>
        <div className='circle-one'>
        <img src={emma} alt=""className='david'/>
        <h5>Emma Harvoxx</h5>
        <h6>Software Engineer</h6>
        </div>
        <div className='circle-one'>
        <img src={paul} alt=""className='david'/>
        <h5>David Harvoxx</h5>
        <h6>Software Engineer</h6>
        </div>
        </div>
      </div>
      <Footer />
      </div>
    
  )
}

export default about

