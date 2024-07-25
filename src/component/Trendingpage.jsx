import React, { useState, useEffect } from "react";
import data from './data';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

function Trendingpage() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getDescriptionLength = () => {
        if (windowWidth < 380) {
            return 30;
        } else if (windowWidth < 576) {
            return 50;
        } else if (windowWidth < 768) {
            return 50;
        } else if (windowWidth < 1080) {
            return 80;
        } else {
            return 30;
        }
    };
    

    return (
        <div className="Trending pt-[35px] pb-[70px]">
            <div className='container mx-auto'>
                <div className='Trending-title mb-[31px]'>
                    <h2 className='font-Zodiak-Regular text-[1.757vw] leading-[2.196vw]'>Trending Timepieces</h2>
                </div>
            </div>

            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                direction="horizontal"
                slidesPerView={6}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper sub-container"
            >
                {data.Trendingwatch.map((item, ind) => {
                    return (
                        <SwiperSlide key={ind} className={`mx-[15px] ${ind === 0 ? 'first-slide' : ''} ${ind === data.Trendingwatch.length - 1 ? 'last-slide' : ''}`}>
                            <div className='w-[100%]'>
                                <div className='relative w-full rounded-lg overflow-hidden'>
                                    <div className='Trending-img w-[335px]'>
                                        <img src={item.img} alt="Trending Watch" />
                                    </div>
                                    <div className='absolute top-[20px] right-[20px]'>
                                        <i className="fa-regular fa-bookmark " style={{ color: '#000' }}></i>
                                    </div>
                                </div>
                                <div className='Trending-box-des p-[10px] pt-[18px]'>
                                    <h2 className='font-Zodiak-Bold text-[1.318vw] tracking-[.72px] uppercase'>{item.brand}</h2>
                                    <p className='Trending-des font-Product-Regular text-[1.171vw] mt-[8px]'>{item.des.substring(0, getDescriptionLength()) + " ..."}</p>
                                    <p className='Trending-price font-Zodiak-Bold text-[1.318vw] leading-[23px] tracking-[.72px] mt-[12px]'>₹ {item.amount}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
}

export default Trendingpage;