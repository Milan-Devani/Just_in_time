import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import img1 from '../assets/img/watch_Offers_img1.png';
import img2 from '../assets/img/watch_Offers_img2.png';
import img3 from '../assets/img/watch_Offers_img3.png';
import img4 from '../assets/img/watch_Offers_img4.png';
import img5 from '../assets/img/watch_Offers_img5.png';
import img6 from '../assets/img/watch_Offers_img6.png';
import img7 from '../assets/img/watch_Offers_img7.png';
import img8 from '../assets/img/watch_Offers_img8.png';
import img9 from '../assets/img/watch_Offers_img9.png';
import img10 from '../assets/img/watch_Offers_img10.png';
import img11 from '../assets/img/watch_Offers_img11.png';
import img12 from '../assets/img/watch_Offers_img12.png';
import img13 from '../assets/img/watch_Offers_img13.png';
import img14 from '../assets/img/watch_Offers_img14.png';

function Offers() {

    const imageArray = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14];

    return (
        <div className='offers'>
            <div className='py-[35px]'>
                <div className='offers-title mx-auto mb-[30px]'>
                    <h1 className='font-Zodiak-Regular ml-[9.5vw] text-[1.757vw]'>Watch Offers For You</h1>
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
                    {imageArray.map((item, ind) => {
                        return (
                            <SwiperSlide key={ind} className={`mx-[15px] ${ind === 0 ? 'first-slide' : ''} ${ind === imageArray.length - 1 ? 'last-slide' : ''}`}> 
                                <div className='w-[353px]'>
                                    <img src={item} alt="" srcset="" />
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default Offers
