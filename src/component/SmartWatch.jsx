import React from 'react'
import data from './data';
import Footer from './Footer';
import bgimg from '../assets/img/smartwatch/bg-img.jpg';
import bgsub from '../assets/img/smartwatch/bg-sub-1.jpg';
import { Link } from 'react-router-dom';
function SmartWatch() {
    return (
        <div className='SmartWatch watch-box border-t-[1px] border-[#12121214]'>
            <div className='nav-route flex px-[40px] gap-[7px] items-center py-[10px] text-[1.025vw] font-Zodiak-Regular text-[#121212bf]'>
                <Link to="/" >Home</Link>
                <i class="text-[6px] fa-solid fa-angle-right"></i>
                <Link to="/SmartWatch" className='hover:underline '>Smart Watch Collection</Link>
            </div>
            <div className='watch-banner relative'>
                <img className='watch-banner-desk' src={bgimg} alt="" srcset="" />
                <img className='watch-banner-mob hidden' src={bgsub} />
                <div className='watch-banner-wrp absolute z-[5] bottom-[3vw] left-[10vw] container mx-auto'>
                    <h1 className='text-[3.66vw] leading-[4vw] font-Zodiak-Light tracking-[-2.5px] text-white mt-[38px]'>Men's Watches Showcase</h1>
                    <h4 className='leading-[1.025vw] text-[1.318vw] font-Lato opacity-70 my-[30px] text-white'>3267 Watches| 33 Brands</h4>
                </div>
            </div>

            <div className='container mx-auto py-[35px]'>
                <div className='gap-[10px] mx-auto flex flex-wrap justify-center'>
                    {data.smartwatch.map((item, ind) => {
                        return (
                            <div key={ind} className='main-wrp mb-[1.5%]'>
                                <div className='SmartWatch-main  watch-main'>
                                    <div className='relative rounded-lg overflow-hidden'>
                                        <div className='SmartWatch-main watch-img w-full h-full'>
                                            <img className='h-full' src={item.img} alt="Trending Watch" />
                                        </div>
                                        <div className='watch-main-icon absolute top-[20px] right-[20px]'>
                                            <i className="fa-regular fa-bookmark " style={{ color: '#000' }}></i>
                                        </div>
                                    </div>
                                    <div className='watch-des-box-main'>
                                        <h2 className='watch-des-brand font-Zodiak-Bold text-[1.318vw] uppercase'>{item.brand}</h2>
                                        <p className='watch-des-line leading-[19px] font-Product-Regular-all Product-Regular-all mt-[8px] mb-[12px]'>{item.des}</p>
                                        <p className='watch-des-price font-Zodiak-Bold uppercase leading-[23px] tracking-[0.72px] text-[1.318vw]'>₹ {item.amount}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default SmartWatch
