import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import data from "./data";

function Brands() {
    return (
        <div className="brands relative p-[35px]">
            <div className="container mx-auto py-[35px]">
                <div className="top-brands mb-[20px] flex justify-between">
                    <h2 className="mb-[18px] inline-block text-[1.75vw] font-[Zodiak]">
                        Watch Brands
                    </h2>
                    <h2 className="view-title font-Lato uppercase cursor-pointer hover:underline">View all</h2>
                </div>
            </div>
            <div className="center-brands-part">
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    direction="horizontal"
                    slidesPerView={6}
                    spaceBetween={0}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper sub-container"
                >
                    {data.watchbrands.map((item, ind) => (
                        <SwiperSlide key={ind} className={`w-[14vw] ${ind === 0 ? 'first-slide' : ''} ${ind === data.watchbrands.length - 1 ? 'last-slide' : ''}`}>
                            <div className="sub-brand-part">
                                <div className="sub-brand-main w-[14vw] mx-auto">
                                    <div className="sub-brand-main-img rounded-t-lg ">
                                        <img src={item.img} alt={item.brand} />
                                    </div>
                                    <div className="sub-brand-main-title rounded-b-lg p-[6.42px] bg-black w-full text-white">
                                        <h1 className="font-Lato my-[15px] text-[16px] text-center">{item.brand}</h1>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Brands;