import React from 'react'
import img1 from "../assets/img/Luxe1.jpg";
import img2 from "../assets/img/Luxe2.jpg"
import img3 from "../assets/img/Luxe3.png"

import subimg1 from "../assets/img/luxe-mob-bg-1.jpg"
import subimg2 from "../assets/img/luxe-mob-bg-2.jpg"
import subimg3 from "../assets/img/luxe-mob-bg-3.png"

function Luxe() {

    const luxedata = [
        {
            id: 1,
            img: img1,
            subimg : subimg1,
            brandname: "Longines",
        },
        {
            id: 2,
            img: img2,
            subimg : subimg2,
            brandname: "Rado",
        },
        {
            id: 3,
            img: img3,
            subimg : subimg3,
            brandname: "Ferragamo",
        }
    ]

    return (
        <div className='luxe bg-black px-[10%] pt-[4%] pb-[3%] h-[630px]' >
            <div className='luxe-title text-white'>
                <h3 className='font-Zodiak-Regular text-[2.196vw] mt-[34px]'>Just In Time Luxe</h3>
                < p className='text-[1.171vw] w-[40%] mt-[18px] font-Lato opacity-70 mb-[49px] leading-[1.757vw]'>Elevate your style with our collection of luxury watches from renowned international brands.</p>
            </div>
            <div className='mx-auto'>
                <div className='luxe-main-wrp flex gap-[7%] h-full'>
                    {luxedata.map((item, index) => {
                        return (
                            <div key={index} className='luxe-box-loop relative w-full'>
                                <div className={`luxe-box w-[87.5%] mr-auto ${index === 0 ? 'luxe-box-1' : ''} ${index === 1 ? 'luxe-box-2' : ''} ${index === 2 ? 'luxe-box-3' : ''} `}>
                                    <div className='luxe-img-wrp w-full rounded-lg overflow-hidden'>
                                        <img className='desk-img' src={item.img} alt={item.brandname} />
                                        <img className='mob-img hidden' src={item.subimg} alt={item.brandname}/>
                                    </div>
                                    <div className={`luxe-des-box absolute w-full bottom-[-43%] ${index === 0 ? 'luxe-des-box-1' : ''} ${index === 1 ? 'luxe-des-box-2' : ''} ${index === 2 ? 'luxe-des-box-3' : ''}`}>
                                        <div className={`luxe-wrp w-[66%] rounded-lg ml-auto bg-[#212121]`}>
                                            <div className='luxe-box-main m-auto px-[4%] py-[7.5%]'>
                                                <h4 className='font-Zodiak-Regular mb-[3%] leanding-[2.562vw] text-[2.196vw] text-white'>{item.brandname}</h4>
                                                <p className='font-Lato text-[1.025vw] leanding-[1.464vw] my-[7.3%] text-white uppercase transition-all duration-500  cursor-pointer hover:underline'>View Collection</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Luxe;