import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import img1 from "../assets/img/collections_img1.png";
import img2 from "../assets/img/collections_img2.jpg";
import img3 from "../assets/img/collections_img3.png"
import img4 from "../assets/img/collections_img4.jpg"
function Collections() {
    const collectionsdata = [
        {
            id: 1,
            name1: "Dainty Dial",
            name2: "Dainty",
            img: img1
        },
        {
            id: 2,
            name1: "Vintage",
            name2: "Vibes",
            img: img2
        },
        {
            id: 3,
            name1: "analog",
            name2: "eleganceedit",
            img: img3
        },
        {
            id: 4,
            name1: "smart",
            name2: "essentials",
            img: img4
        }
    ];

    return (
        <div>
            <div className="collections py-[35px]">
                <div className="collections-title mx-auto">
                    <h2 className="font-Zodiak-Regular ml-[9.5vw] text-[1.757vw] leading-[2.1vw] mb-[23.5px]">Our Curated Collections</h2>
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
                    className="mySwiper sub-container"
                >
                    {collectionsdata.map((item, ind) => (
                        <SwiperSlide key={ind} className={`${ind === 0 ? 'first-slide' : ''} ${ind === collectionsdata.length - 1 ? 'last-slide' : ''}`}>
                            <div key={ind} className="relative">
                                <div className="collections-main w-[444px] rounded-lg overflow-hidden">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className={`collections-sub absolute flex items-center bottom-[-9.5%] left-[52%] z-[18] bg-[#212121] w-[250px] h-[135px] rounded-lg  ${ind === 1 ? 'collections-sub-1' : ind === 3 ? 'collections-sub-3' : ''}`}>
                                    <div className="flex justify-evenly	relative w-full h-full top-[25%]" style={{ marginLeft: ind === 1 || ind === 3 ? '-25px' : '0' }}>
                                        <div>
                                            <h1 className="inline-block align-middle capitalize text-[#fff] font-Zodiak-Light text-[2.2vw] text-left tracking-[-1.5px] m-0 leading-[2.5vw]">
                                                {item.name1}<br />{item.name2}
                                            </h1>
                                        </div>
                                        <div style={{ display: ind === 1 || ind === 3 ? 'none' : 'block' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20.584" height="20.584" viewBox="0 0 20.584 20.584">
                                                <g id="Group_13559" data-name="Group 13559" transform="translate(1.768 2.5)">
                                                    <path id="Path_6411" data-name="Path 6411" d="M60.724,17.382,77.041,1.066V15.679" transform="translate(-60.724 -1.066)" fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="5"></path>
                                                    <path id="Path_6412" data-name="Path 6412" d="M63.46,1.065H78.467" transform="translate(-62.151 -1.065)" fill="none" stroke="#fff" stroke-width="5"></path>
                                                </g>
                                            </svg>
                                        </div>
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

export default Collections;
