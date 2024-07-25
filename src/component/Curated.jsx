import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import img1 from '../assets/img/Curated1.jpg';
import img2 from '../assets/img/Curated2.jpg';
import img3 from '../assets/img/Curated3.jpg';
import img4 from '../assets/img/Curated4.jpg';

import mob_img1 from '../assets/img/Curated-mob1.jpg';
import mob_img2 from '../assets/img/Curated-mob2.jpg';
import mob_img3 from '../assets/img/Curated-mob3.jpg';
import mob_img4 from '../assets/img/Curated-mob4.jpg';

function Curated() {
    const [isMobileView, setIsMobileView] = useState(false);

    const handleResize = () => {
        setIsMobileView(window.innerWidth <= 600);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const Curateddata = [
        {
            id: 1,
            img: img1,
            mob_img: mob_img1,
            type: 'Swiss/Automatic',
            type1: "Swiss",
            type2: 'Automatic'
        },
        {
            id: 2,
            img: img2,
            mob_img: mob_img2,
            type: 'Minimal Inspired'
        },
        {
            id: 3,
            img: img3,
            mob_img: mob_img3,
            type: 'Chronograph'
        },
        {
            id: 4,
            img: img4,
            mob_img: mob_img4,
            type: 'Vintage'
        }
    ];

    return (
        <div className='curated'>
            <div className='pt-[70px] pb-[40px]'>
                <div className='curated-contaier pt-[80px] pb-[30px]'>
                    <div className='mx-auto container'>
                        <div className="curated-title">
                            <h2 className='font-Zodiak-Regular text-[2.196vw] leading-[2.196vw] tracking-[-1.5px]'>Curated By Style</h2>
                            <p className='text-[1.171vw] w-[40%] font-Lato opacity-70 mt-[1.2%] mb-[1%] leading-[1.757vw]'>
                                Discover your perfect match with our stylish watch 
                                collection. From minimalist to bold designs, we offer the 
                                ideal accessory for any outfit.
                            </p>
                        </div>
                    </div>

                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={{ clickable: true }}
                        mousewheel={true}
                        keyboard={true}
                        direction="horizontal"
                        slidesPerView={2}
                        spaceBetween={0}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper sub-container "
                    >
                        {Curateddata.map((item, ind) => (
                            <SwiperSlide key={ind} className={`mx-[15px] ${ind === 0 ? 'first-slide' : ''} ${ind === Curateddata.length - 1 ? 'last-slide' : ''}`}>
                                <div className='relative'>
                                    <div className='curated-img w-[444px] h-[300px] rounded-lg overflow-hidden'>
                                        <img className="img1 block" src={item.img} alt="" />
                                        <img className="img2 hidden" src={item.mob_img} alt="" />
                                    </div>
                                    <div
                                        className='curated-des-box bg-[#212121] z-[10] absolute top-[226px] pt-[25px] px-[25px] pb-[15px] rounded-lg overflow-hidden w-[340px]'
                                        style={{
                                            right: (ind === 1 || ind === 3) ? '0px' : '-49px',
                                            left: (ind === 1 || ind === 3) ? '-47px' : 'auto'
                                        }}
                                    >
                                        <h4 className={`curated-des-text1 ${isMobileView && ind === 0 ? 'hidden' : 'block'} leading-[2.562vw] text-[2.196vw] mb-[10px] text-white font-Zodiak-Regular ${isMobileView && ind === 2 ? 'text-[3.5vw]' : ''}`}>{item.type}</h4>
                                        <h4 className={`curated-des-text2 ${isMobileView && ind === 0 ? 'block' : 'hidden'} leading-[2.562vw] text-[2.196vw] mb-[10px] text-white font-Zodiak-Regular`}>{item.type1} <br /> {item.type2} </h4>
                                        <p className='leading-[1.464vw] text-[1.025vw] text-white font-Lato uppercase transition-all duration-500  cursor-pointer hover:underline'>View Collection</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Curated;