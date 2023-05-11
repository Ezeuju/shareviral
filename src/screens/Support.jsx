import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import search from '../components/assets/search.svg'
import faq from '../components/assets/faq.svg'
import consupport from '../components/assets/consupport.svg'
import Toyman from '../components/assets/Toyman.svg'
import question from '../components/assets/question.svg'
// import { IoIosArrowForward } from "@react-icons/all-files/fa/IoIosArrowForward";


const Support = () => {
  return (
    <div>
      <div className='support'>
        <Navbar />
        <h1>We’re happy to help!</h1>
        <p>Need a quick answer? Enter your question below for instant responses.</p>
        <div className='like'>
            <h4>What would you like to ask</h4>
            <div className='user-input'>
      <img src={search} alt=""className='search'/>
        <input type="text" className="name" placeholder="What is shareviral" />
        </div>
        </div>
      </div>
      <div className='twoBoxes'>
        <div className='boxOne'>
        <img src={Toyman} alt=""className='Toyman'/>
        <h3>General Support</h3>
        <p>Do you have general enquiries or need support? Please send us a quick email.</p>
        <img src={consupport} alt=""className='cosupport'/>
        </div>
        <div className='boxTwo'>
        <img src={question} alt=""className='question'/>
        <h3>FAQ</h3>
        <p>Do you have general enquiries or need support? Please send us a quick email.</p>
        <img src={faq} alt=""className='faqq'/>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Support

