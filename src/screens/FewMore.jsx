import React from 'react'
import {Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import mail from '../components/assets/mail.svg';
import logo from '../components/assets/brand.png';
import userTwo from '../components/assets/userTwo.svg';
import lock from '../components/assets/lock.svg';
import google from '../components/assets/google.png';
import facebookTwo from '../components/assets/facebookTwo.png';
import smilePhoto from '../components/assets/smilePhoto.png';

const FewMore = () => {
    const navigate = useNavigate();

    const saveItem = () => {
     navigate('/FewMoreSteps')
    }
  return (
    <div>
            <div className='happyTwo'>
      <div className='newUserForm'>
      <div className='newUser'>
      <div className='logo'><Link to='/' div className="logo">
                <img src={logo} alt=""className='logos'/>
            </Link></div>
            <h5>Welcome back! </h5>
          <p>Happy to see you again</p>
          <div className='users'>
            <h3>Users</h3>
            <h4>Company</h4>
            </div>
        <div className='newForm'>
            <h6>Username</h6>
      <form className="Userform">
      <div className='user-input'>
      <img src={userTwo} alt=""className='userTwo'/>
        <input type="text" className="name" placeholder="Name" />
        </div>
      </form>
      </div>
        <div className='newForm'>
            <h6>Email</h6>
      <form className="Userform">
      <div className='user-input'>
      <img src={mail} alt=""className='userTwo'/>
        <input type="text" className="name" placeholder="Email" />
        </div>
      </form>
      </div>
        <div className='newForm'>
            <h6>Password</h6>
      <form className="Userform">
      <div className='user-input'>
      <img src={lock} alt=""className='userTwo'/>
        <input type="text" className="name" placeholder="Password" />
        </div>
      </form>
      <div className='checkboxes'>
      <label class="inline-flex items-center">
        <input type="checkbox" className="form-checkbox h-9 w-9 border-1 border-[#293A96]"/>
        <span class="ml-4 text[10px] text-[#293A96] pr-40">Keep me signed</span>
        <span>Forget Password</span>
        </label>
      </div>
      <div className='reg'><input type="submit" className='register' value="Register" onClick={saveItem} /></div>
      <div className='icons'>
      <div className='googleIcon'><img src={google} alt=""className='google'/></div>
      <div className='facebookIcon'><img src={facebookTwo} alt=""className='facebookTwo'/></div>
      </div>
      <p>Dont have an account?<span className='account'>create</span></p>
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

export default FewMore
