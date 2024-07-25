import React from 'react';
import img1 from "../assets/img/Fossil-New_launch_D_600x.jpg";
import img2 from "../assets/img/JIT_website_asset-mobile_new-02_1_1500x.jpg";

function NewLaunch() {
    return (
        <div className='newwatch'>
            <div className='flex container gap-[20px] mx-auto px-[145px] pt-[70px] pb-[35px] '>
                {[img1, img2].map((item) => {
                    return (
                        <div className='border newatch-sub rounded-lg overflow-hidden h-full w-[445px]'>
                            <div className='newatch-sub-part bg-[#000] py-[6.50px] font-[Lato-Bold]'><h2 className='flex items-center gap-[1%] ml-[22px] text-[#e2a362]'><i className="fa-solid fa-star" style={{ color: '##e2a362' }}></i> New Launch</h2></div>
                            <img className='rounded-b-lg h-full' src={item} alt="" srcSet="" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default NewLaunch;
