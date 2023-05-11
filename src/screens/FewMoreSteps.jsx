import React from 'react'
import {Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from '../components/assets/brand.png';
import userTwo from '../components/assets/userTwo.svg';
import mail from '../components/assets/mail.svg';
import lock from '../components/assets/lock.svg';
import smilePhoto from '../components/assets/smilePhoto.png';
// import { FaBeer } from 'react-icons/fa';

const FewMoreSteps = () => {

    const navigate = useNavigate();

  const saveItem = () => {
   navigate('/LastStep')
  }

  return (
    <div>
        <div className='happyForm'>
          <div className='newUserForm'>
      <div className='newUser'>
      <div className='logo'><Link to='/' div className="logo">
                <img src={logo} alt=""className='logos'/>
            </Link></div>
          <p>Few more step to go</p>
        <div className='newForm'>
            <h6>Gender</h6>
      <form className="Userform">
      <div className='user-input'>
      <img src={userTwo} alt=""className='userTwo'/>
        <input type="text" className="name" placeholder="Select Gender" />
        </div>
      </form>
      </div>
        <div className='newForm'>
            <h6>Occupation</h6>
      <form className="Userform">
      <div className='user-input'>
      <img src={mail} alt=""className='userTwo'/>
        <input type="text" className="name" placeholder="Enter Phone number" />
        </div>
      </form>
      </div>
        <div className='newForm'>
            <h6>Phone number</h6>
      <form className="Userform">
      <div className='user-input'>
      <img src={lock} alt=""className='userTwo'/>
        <input type="text" className="name" placeholder="Enter Phone number" />
        </div>
      </form>
      <div className='checkboxes'>
      <label class="inline-flex items-center">
        <input type="checkbox" className="form-checkbox h-9 w-9 border-1 border-[#293A96]"/>
        <span class="ml-4 text[10px] text-[#293A96]">I agree to all Terms & Conditions</span>
        </label>
      </div>
      <div className='reg'><input type="submit" className='register' value="Finish" onClick={saveItem} /></div>
      
      </div>
      </div>
      
        <div className='newPhoto'>
        <img src={smilePhoto} alt=""className='smilePhoto'/>
          </div>
        </div>
        </div>
    </div>
  )
}

export default FewMoreSteps
