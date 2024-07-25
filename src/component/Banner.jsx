import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";


function Banner() {
  useEffect(() => {
    const swiper = new Swiper(".MBSwiper", {
      lazy: true,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      speed: 3500,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    return () => {
      swiper.destroy(true, true);
    };
  }, []);

  return (
    <div className="banner">
      <div className="MB_main-container">
        <div className="MB_sub-container">
          <div className="swiper swiper-container MBSwiper" id="com">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <Link >
                  <div className="MB_banner-images">
                    <div className="MB_desk-banner">
                      <img
                        alt=""
                        className="desk_img-fluid"
                        height="774"
                        loading="eager"
                        sizes="100vw"
                        src="//justintime.in/cdn/shop/files/Desktop_HP_1500x.png?v=1719571109"
                        srcset="//justintime.in/cdn/shop/files/Desktop_HP_165x.png?v=1719571109 165w,//justintime.in/cdn/shop/files/Desktop_HP_360x.png?v=1719571109 360w,//justintime.in/cdn/shop/files/Desktop_HP_535x.png?v=1719571109 535w,//justintime.in/cdn/shop/files/Desktop_HP_750x.png?v=1719571109 750w,//justintime.in/cdn/shop/files/Desktop_HP_1070x.png?v=1719571109 1070w,//justintime.in/cdn/shop/files/Desktop_HP_1500x.png?v=1719571109 1500w,//justintime.in/cdn/shop/files/Desktop_HP.png?v=1719571109 1921w
                             "
                        width="1921"
                      />
                    </div>
                    <div className="MB_mob-banner">
                      <img
                        alt=""
                        className="mob_img-fluid"
                        height="908"
                        loading="eager"
                        sizes="100vw"
                        src="//justintime.in/cdn/shop/files/Mobile_HP_1_1500x.png?v=1719571108"
                        srcset="//justintime.in/cdn/shop/files/Mobile_HP_1_165x.png?v=1719571108 165w,//justintime.in/cdn/shop/files/Mobile_HP_1_360x.png?v=1719571108 360w,//justintime.in/cdn/shop/files/Mobile_HP_1_535x.png?v=1719571108 535w,//justintime.in/cdn/shop/files/Mobile_HP_1.png?v=1719571108 601w
                             "
                        width="601"
                      />
                    </div>
                  </div>
                  <div className="banner_content">
                    <div className="banner_head">
                      <div className="rd_banner_head">
                        <p></p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="swiper-slide">
                <Link >
                  <div class="MB_banner-images">
                    <div class="MB_desk-banner">
                      <img
                        alt=""
                        class="desk_img-fluid"
                        height="1650"
                        loading="lazy"
                        sizes="100vw"
                        src="//justintime.in/cdn/shop/files/rado_homepage_banner_1500x.png?v=1714375687"
                        srcset="//justintime.in/cdn/shop/files/rado_homepage_banner_165x.png?v=1714375687 165w,//justintime.in/cdn/shop/files/rado_homepage_banner_360x.png?v=1714375687 360w,//justintime.in/cdn/shop/files/rado_homepage_banner_535x.png?v=1714375687 535w,//justintime.in/cdn/shop/files/rado_homepage_banner_750x.png?v=1714375687 750w,//justintime.in/cdn/shop/files/rado_homepage_banner_1070x.png?v=1714375687 1070w,//justintime.in/cdn/shop/files/rado_homepage_banner_1500x.png?v=1714375687 1500w,//justintime.in/cdn/shop/files/rado_homepage_banner.png?v=1714375687 4098w
                             "
                        width="4098"
                      />
                    </div>
                    <div class="MB_mob-banner">
                      <img
                        alt=""
                        class="mob_img-fluid"
                        height="1941"
                        loading="lazy"
                        sizes="100vw"
                        src="//justintime.in/cdn/shop/files/Rado_mobile_1500x.png?v=1714378368"
                        srcset="//justintime.in/cdn/shop/files/Rado_mobile_165x.png?v=1714378368 165w,//justintime.in/cdn/shop/files/Rado_mobile_360x.png?v=1714378368 360w,//justintime.in/cdn/shop/files/Rado_mobile_535x.png?v=1714378368 535w,//justintime.in/cdn/shop/files/Rado_mobile_750x.png?v=1714378368 750w,//justintime.in/cdn/shop/files/Rado_mobile_1070x.png?v=1714378368 1070w,//justintime.in/cdn/shop/files/Rado_mobile.png?v=1714378368 1281w
                             "
                        width="1281"
                      />
                    </div>
                  </div>
                  <div class="banner_content">
                    <div class="banner_head">
                      <div class="rd_banner_head">
                        <p></p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="swiper-slide">
                <Link >
                  <div className="MB_banner-images">
                    <div className="MB_desk-banner">
                      <img
                        alt=""
                        className="desk_img-fluid"
                        height="1100"
                        loading="lazy"
                        sizes="100vw"
                        src="//justintime.in/cdn/shop/files/Guess_Homepage_D_4e5379be-fe1f-47f0-831a-5950938df211_1500x.png?v=1713879008"
                        srcset="//justintime.in/cdn/shop/files/Guess_Homepage_D_4e5379be-fe1f-47f0-831a-5950938df211_165x.png?v=1713879008 165w,//justintime.in/cdn/shop/files/Guess_Homepage_D_4e5379be-fe1f-47f0-831a-5950938df211_360x.png?v=1713879008 360w,//justintime.in/cdn/shop/files/Guess_Homepage_D_4e5379be-fe1f-47f0-831a-5950938df211_535x.png?v=1713879008 535w,//justintime.in/cdn/shop/files/Guess_Homepage_D_4e5379be-fe1f-47f0-831a-5950938df211_750x.png?v=1713879008 750w,//justintime.in/cdn/shop/files/Guess_Homepage_D_4e5379be-fe1f-47f0-831a-5950938df211_1070x.png?v=1713879008 1070w,//justintime.in/cdn/shop/files/Guess_Homepage_D_4e5379be-fe1f-47f0-831a-5950938df211_1500x.png?v=1713879008 1500w,//justintime.in/cdn/shop/files/Guess_Homepage_D_4e5379be-fe1f-47f0-831a-5950938df211.png?v=1713879008 2732w
                             "
                        width="2732"
                      />
                    </div>
                    <div className="MB_mob-banner">
                      <img
                        alt=""
                        className="mob_img-fluid"
                        height="1294"
                        loading="lazy"
                        sizes="100vw"
                        src="//justintime.in/cdn/shop/files/Guess_Homepage_M_1500x.png?v=1713879007"
                        srcset="//justintime.in/cdn/shop/files/Guess_Homepage_M_165x.png?v=1713879007 165w,//justintime.in/cdn/shop/files/Guess_Homepage_M_360x.png?v=1713879007 360w,//justintime.in/cdn/shop/files/Guess_Homepage_M_535x.png?v=1713879007 535w,//justintime.in/cdn/shop/files/Guess_Homepage_M_750x.png?v=1713879007 750w,//justintime.in/cdn/shop/files/Guess_Homepage_M.png?v=1713879007 854w
                             "
                        width="854"
                      />
                    </div>
                  </div>
                  <div className="banner_content">
                    <div className="banner_head">
                      <div className="rd_banner_head">
                        <p></p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
