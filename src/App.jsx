import React from 'react';
import './css/media.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import LocomotiveScroll from 'locomotive-scroll';
import { Route, Routes } from 'react-router-dom';
import Menwatch from './component/Menwatch';
import Home_mian from './component/Home_mian';
import Navbar from './component/Navbar';
import Womenwatch from './component/Womenwatch';
import SmartWatch from './component/SmartWatch';
import Offerspage from './component/Offerspage';
import Jitboutique from './component/Jitboutique';

function App() {

const locomotiveScroll = new LocomotiveScroll();


  return (
    <div className='w-full min-h-screen'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home_mian/>}/>
        <Route path="/menwatch" element={<Menwatch />} />
        <Route path='/womenwatch' element={<Womenwatch/>}/>
        <Route path='/SmartWatch' element={<SmartWatch/>}/>
        <Route path='/offerspage' element={<Offerspage/>} />
        <Route path='/jitboutique' element={<Jitboutique/>} />
      </Routes>
    </div>
  );
}

export default App;
