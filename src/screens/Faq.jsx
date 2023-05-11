import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import blogger from "../components/assets/blogger.svg"
import Learnmore from "../components/assets/Learnmore.svg"


const Faq = () => {
  return (
    <div>
       <div className='sign'>
        <Navbar />
        <div className='privacy'>
        <h1>Our Service</h1>
        <p>Learn more about the services we offer and how we can help you reach your target aludence</p>
        </div> 
    </div>
    <div className='grid-box'>
    <div className='gridOne bg-[#8C95A4]'>
        <img src={blogger} alt=""className='blogger'/>
        <h3 class='mt-12'>Blogging</h3>
        <img src={Learnmore} alt=""className='Learnmore mt-10'/>
        </div>
    <div className='gridOne bg-[#FFD064]'>
        <img src={blogger} alt=""className='blogger'/>
        <h3 class='mt-12'>Marketing and sales consulting</h3>
        <img src={Learnmore} alt=""className='Learnmore mt-10'/>
        </div>
    <div className='gridOne bg-[#43809F]'>
        <img src={blogger} alt=""className='blogger'/>
        <h3 class='mt-12'>Blogging</h3>
        <img src={Learnmore} alt=""className='Learnmore mt-10'/>
        </div>
    <div className='gridOne bg-[#E55648]'>
        <img src={blogger} alt=""className='blogger'/>
        <h3 class='mt-12'>Blogging</h3>
        <img src={Learnmore} alt=""className='Learnmore mt-10'/>
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default Faq
