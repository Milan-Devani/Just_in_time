import React from "react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

function WatchJournal() {
    return (
        <div className="watchjournal">
            <div className="watchjournal-main-warp bg-img-wj px-[10%] py-[4%]">
                <div>
                    <div className="container mx-auto">
                        <div className="watchjournal-title-box">
                            <h4 className="text-[white] text-[2.2vw] leading-[2.1vw] font-Zodiak-Regular mb-[11.5px]">
                                The Watch Journal
                            </h4>
                            <p to="/" className="text-[white] uppercase text-[1vw] leading-[1.4vw] opacity-70 transition-all duration-500  cursor-pointer hover:underline">
                                read more
                            </p>
                        </div>



                        {/* <div className="watchjournal-card-main flex mt-[36.5px] gap-[30px]">
                            {[
                                "How to Choose the Best Waterproof Watch for Monsoon...",
                                "How to Repair a Water-Damaged Watch: A Step-by-Step...",
                                "Why Your Waterproof Watch Might Not Be as Water-Resist...",
                            ].map((item, ind) => {
                                return (
                                    <div
                                        key={ind}
                                        className="watchjournal-card bg-[#F0F0F0] w-[25.8vw] rounded-lg p-[30.8px]"
                                    >
                                        <div className="text-white">
                                            <div className="watchjournal-cards-title text-[#E2A362] font-Lato-Bold uppercase leading-[1vw] text-[0.9vw]">
                                                {" "}
                                                <span>FEATURED</span> <span>Watch Care</span>{" "}
                                                <span>watch service</span>
                                            </div>
                                            <div className="watchjournal-cards-des w-[75%]">
                                                <p className="text-[1.4vw] leading-[2vw] font-Zodiak-Regular my-[21px] text-[#080101]">
                                                    {item}
                                                </p>
                                            </div>
                                            <p className="more-view text-[#080101] uppercase underline text-[1vw] leading-[1.4vw] opacity-70">
                                                read more
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div> */}
                    </div>
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        direction="horizontal"
                        slidesPerView={3}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper sub-container m-0 mt-[3%]"
                    >
                        <div className="watchjournal-card-main flex mt-[36.5px]">
                            {[
                                "How to Choose the Best Waterproof Watch for Monsoon...",
                                "How to Repair a Water-Damaged Watch: A Step-by-...",
                                "Why Your Waterproof Watch Might Not Be as Water-Resist...",
                            ].map((item, ind, arr) => {
                                return (
                                    <SwiperSlide key={ind} className={` ${ind === 0 ? 'first-slide' : ''} ${ind === arr.length - 1 ? 'last-slide' : ''}`}>
                                        <div key={ind} className="watchjournal-card bg-[#F0F0F0] rounded-lg p-[30.8px]">
                                            <div className="text-white">
                                                <div className="watchjournal-cards-title text-[#E2A362] font-Lato-Bold uppercase leading-[1vw] text-[0.9vw]">
                                                    {" "}
                                                    <span>FEATURED</span> <span>Watch Care</span>{" "}
                                                    <span>watch service</span>
                                                </div>
                                                <div className="watchjournal-cards-des w-[75%]">
                                                    <p className="text-[1.4vw] leading-[2vw] font-Zodiak-Regular my-[21px] text-[#080101]">
                                                        {item}
                                                    </p>
                                                </div>
                                                <p className="more-view text-[#080101] uppercase text-[1vw] leading-[1.4vw] opacity-70 transition-all duration-500  cursor-pointer hover:underline">
                                                    read more
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default WatchJournal;


