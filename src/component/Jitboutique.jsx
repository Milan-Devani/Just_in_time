import React from 'react'
import img1 from '../assets/img/place/img1.png'
import img2 from '../assets/img/place/img2.png'
import img3 from '../assets/img/place/img3.png'
import img4 from '../assets/img/place/img4.png'
import img5 from '../assets/img/place/img5.png'
import img6 from '../assets/img/place/img6.png'
import img7 from '../assets/img/place/img7.png'
import img8 from '../assets/img/place/img8.png'
import { Link } from 'react-router-dom';
import img9 from '../assets/img/place/img9.png'
import Footer from './Footer'

const data = [
    {
        img: img1,
        name: 'Mumbai',
    },
    {
        img: img2,
        name: 'Pune',
    },
    {
        img: img3,
        name: 'Bengaluru',
    },
    {
        img: img4,
        name: 'Ahmedabad',
    },
    {
        img: img5,
        name: 'Vadodara',
    },
    {
        img: img6,
        name: 'Surat',
    },
    {
        img: img7,
        name: 'Rajkot',
    },
    {
        img: img8,
        name: 'Indore',
    },
    {
        img: img9,
        name: 'Raipur',
    }
]


function Jitboutique() {
    return (
        <div>
            <div className='Jitboutique watch-box border-t-[1px] border-[#12121214]'>
            <div className='Jitboutique-nav nav-route flex px-[40px] border-b-[1px] border-[#12121214] gap-[7px] items-center py-[10px] text-[1.025vw] font-Zodiak-Regular text-[#121212bf]'>
                <Link className='a' to="/" >Home</Link>
                    <i class="text-[6px] fa-solid fa-angle-right"></i>
                <Link to="/womenwatch" className='a hover:underline '>Find Stores</Link>
            </div>
            <div className='container mx-auto'>
                <div className='container-padiing py-[76px] px-[61px]'>
                    <div className='Jitboutique-title-box'>
                        <h2 className='leading-[35px] text-[#363535] text-[30px] font-Zodiak-Regular my-[25px]'>Find a JIT Boutique</h2>
                        <p className='text-[#6F6F6F] leading-[20px] opacity-70 font-Lato text-[1.025vw] mb-[30px] mt-[10px] '>We are available in 9 Cities across India. Select your city to locate a store</p>
                    </div>

                    <div className='flex flex-wrap justify-center gap-[15px]'>
                        {data.map((item, ind) => {
                            return (
                                <div key={ind} className='Jitboutique-box-main relative'>
                                    <div className='Jitboutique-bg-img overflow-hidden rounded-xl w-[348px]'>
                                        <img src={item.img} alt="" srcset="" />
                                    </div>
                                    <div className='Jitboutique-bg-text absolute top-0 left-[30px] bottom-0 flex items-center justify-center'>
                                        <h2 className='leanding-[24px] font-Zodiak-Light uppercase text-[24px]'>{item.name}</h2>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default Jitboutique