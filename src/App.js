import React from 'react';
import './App.css';
import Home from './screens/Home';
import SignIn from './screens/SignIn';
import NewR from './screens/NewR';
import About from './screens/About';
import WelcomeN from './screens/WelcomeN';
import FewMore from './screens/FewMore';
import FewMoreSteps from './screens/FewMoreSteps';
import Contact from './screens/Contact';
import { Route, Routes } from 'react-router-dom';
import Service from './screens/Service';
import Support from './screens/Support';
import Faq from './screens/Faq';
import NavForSmallScreen from './components/NavForSmallScreen';








function App() {
  return (
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/SignIn' element={<SignIn />}/>
    <Route path='/NewR' element= {<NewR/>}/>
    <Route path='/About' element={<About />}/>
    <Route path='/WelcomeN' element={<WelcomeN/>}/>
    <Route path='/FewMore' element={<FewMore/>}/>
    <Route path='/FewMoreSteps' element={<FewMoreSteps/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Service' element={<Service/>}/>
    <Route path='/Support' element={<Support/>}/>
    <Route path='/Faq' element={<Faq/>}/>
    <Route path='/NavForSmallScreen' element={<NavForSmallScreen/>}/>
    
    
    
  </Routes>

  );
}

export default App;
