import React from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import arrow from "../components/assets/arrow.png";
import Footer from '../components/Footer'

const Contact = () => {
  const navigate = useNavigate();

  const saveItem = () => {
   navigate('/Support')
  }
return (
    <div>
      <div className="contact">
        <Navbar />
        <h1>Contact Support</h1>
        <p>We're available around the clock.<br /> Let us know how we can help!</p>
        <div className="realborder">
        <div className="border">
          <div className="borderForm">
          <div className="newForm">
                <h6>Full Name</h6>
                <form className="Userform">
                  <div className="user-input">
                    <input
                      type="text"
                      className="name"
                      placeholder='e.g john doe'
                    />
                  </div>
                </form>
              </div>
              <div className="newForm">
                <h6>What’s your phone number?</h6>
                <form className="Userform">
                  <div className="user-input">
                    <input
                      type="text"
                      className="name"
                      placeholder="08**********"
                    />
                  </div>
                </form>
              </div>
              <div className="newForm">
                <h6>Email</h6>
                <form className="Userform">
                  <div className="user-input">
                    <input
                      type="text"
                      className="name"
                      placeholder="jhon@deo.com"
                    />
                  </div>
                </form>
              </div>
              <div className="newForm">
                <h6>Message</h6>
                <form className="Userform">
                  <div className="user-input">
                    <input
                      type="text"
                      className="name"
                      placeholder="Let us know how we can help you"
                    />
                  </div>
                </form>
              </div>
              <div className="checkboxes">
                <label class="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-9 w-9 border-1 border-[#293A96]"
                  />
                  <span class="ml-4 text[10px] text-[black]">
                  Send me occational email and update from shareviral
                  </span>
                </label>
              </div>
              <div className="reg">
                <input type="submit" className="register" value="Send Message" onClick={saveItem} />
              </div>
            </div>
        
          <div className="arrowKite">
            <img src={arrow} alt="" className="arrow" />
          </div>
          
          </div>
         
        </div>
        <Footer />
        </div>
       
      </div>

  );
};

export default Contact;
