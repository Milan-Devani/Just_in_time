import React, { useState } from "react";
import { Link} from "react-router-dom";
import logo from '../assets/img/logo.png';
import '../css/Navbar.css';

function Navbar() {
  const [showmobile, setShowMobile] = useState(false);

  const route = [
    { title: "Home", path: "/" },
    { title: "Men's Watch", path: "/menwatch" },
    { title: "Women's Watch", path: "/womenwatch" },
    { title: "Smart Watch", path: "/SmartWatch" },
    { title: "Watch Offers", path: "/offerspage" },
    { title: "JIT Boutique", path: "/jitboutique" }
  ]

  const icons = [
    <svg
      fill="#000000"
      width="22.167"
      height="24.517"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 488.4 488.4"
      xml:space="preserve"
      stroke="#000000"
      stroke-width="13.6752"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <g>
            {" "}
            <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"></path>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>,
    <svg
      key="person"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="23.675"
      height="26.318"
      viewBox="0 0 23.675 26.318"
    >
      <defs>
        <clipPath id="clipPath">
          <rect
            id="Rectangle_3815"
            data-name="Rectangle 3815"
            width="23.675"
            height="26.318"
            stroke="#000"
            strokeWidth="1"
          ></rect>
        </clipPath>
      </defs>
      <g id="Group_15327" data-name="Group 15327" transform="translate(2 5)">
        <g
          id="Group_12193"
          data-name="Group 12193"
          transform="translate(-2 -5)"
          clipPath="url(#clipPath)"
        >
          <path
            id="Path_5856"
            data-name="Path 5856"
            d="M31.748,10.1A5.051,5.051,0,1,1,36.8,5.051,5.057,5.057,0,0,1,31.748,10.1m0-9.519a4.468,4.468,0,1,0,4.468,4.468A4.473,4.473,0,0,0,31.748.583"
            transform="translate(-19.91 3.999)"
            stroke="#000"
            strokeWidth="1"
          ></path>
          <path
            id="Path_5857"
            data-name="Path 5857"
            d="M20.476,67.387H0V66.174a10.238,10.238,0,1,1,20.476,0ZM.583,66.8H19.893v-.63a9.655,9.655,0,0,0-19.311,0Z"
            transform="translate(1.6 -41.069)"
            stroke="#000"
            strokeWidth="1"
          ></path>
        </g>
      </g>
    </svg>,
    <svg
      key="bookmark"
      xmlns="http://www.w3.org/2000/svg"
      width="24.543"
      height="24.543"
      viewBox="0 0 10.947 17.172"
    >
      <path
        id="Icon_ionic-ios-bookmark"
        data-name="Icon ionic-ios-bookmark"
        d="M9,4.618V19.383a.155.155,0,0,0,.249.124l4.538-3.575a.315.315,0,0,1,.373,0L18.7,19.507a.155.155,0,0,0,.249-.124V4.618A1.242,1.242,0,0,0,17.7,3.375h-7.46A1.242,1.242,0,0,0,9,4.618Z"
        transform="translate(-8.5 -2.875)"
        fill="none"
        stroke="#070101"
        strokeWidth="1"
      ></path>
    </svg>,
    <svg
      key="shopping-bag"
      xmlns="http://www.w3.org/2000/svg"
      width="22.167"
      height="24.517"
      viewBox="0 0 22.167 24.517"
    >
      <g
        id="Icon_feather-shopping-bag"
        data-name="Icon feather-shopping-bag"
        transform="translate(0.5 0.5)"
      >
        <g id="Group_10684" data-name="Group 10684" transform="translate(0 0)">
          <path
            id="Path_93"
            data-name="Path 93"
            d="M8.028,3,4.5,7.7V24.165a2.352,2.352,0,0,0,2.352,2.352H23.314a2.352,2.352,0,0,0,2.352-2.352V7.7L22.138,3Z"
            transform="translate(-4.5 -3)"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          ></path>
          <path
            id="Path_94"
            data-name="Path 94"
            d="M4.5,9H25.665"
            transform="translate(-4.499 -4.297)"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          ></path>
          <path
            id="Path_95"
            data-name="Path 95"
            d="M21.407,15A4.7,4.7,0,0,1,12,15"
            transform="translate(-6.12 -5.593)"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          ></path>
        </g>
      </g>
    </svg>,
  ];

  const handleMobileToggle = () => {
    setShowMobile(!showmobile);
  };

  const handleCloseMobileMenu = () => {
    setShowMobile(false);
  };

  return (
    <div className="bg-white">
      <div className="border-b border-[#cdc6c6]">
        <div className="nav-container flex justify-between items-center py-[12px] px-[50px] w-[1200px] mx-auto">
          <div
            className="w-[50px] h-[50px] items-center hidden nav-bar-toggle-icon"
            onClick={handleMobileToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-hamburger"
              width="23.098"
              height="13.628"
              viewBox="0 0 23.098 13.628"
            >
              <g
                id="Group_16114"
                data-name="Group 16114"
                transform="translate(-5071.5 -1073.286)"
              >
                <line
                  id="Line_3078"
                  data-name="Line 3078"
                  x2="22.098"
                  transform="translate(5072 1073.786)"
                  fill="none"
                  stroke="#060101"
                  strokeLinecap="round"
                  strokeWidth="1"
                ></line>
                <line
                  id="Line_3079"
                  data-name="Line 3079"
                  x2="11.049"
                  transform="translate(5083.049 1080.1)"
                  fill="none"
                  stroke="#060101"
                  strokeLinecap="round"
                  strokeWidth="1"
                ></line>
                <line
                  id="Line_3080"
                  data-name="Line 3080"
                  x2="22.098"
                  transform="translate(5072 1086.414)"
                  fill="none"
                  stroke="#060101"
                  strokeLinecap="round"
                  strokeWidth="1"
                ></line>
              </g>
            </svg>
          </div>
          <div className="navbar-img">
            <Link to='/'><img src={logo} alt="Logo" /></Link>
          </div>
          <div className="navbar-social-icon">
            <ul className="flex gap-[45px] items-center">
              {icons.map((item, ind) => (
                <li key={ind} className={`${ind === 1 ? 'nav-icon-2' : ''}`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className=" bg-white navbar-sub overflow-hidden h-[40px]">
        <div className="nav-container z-[10] relative w-[1200px] mx-auto">
          <ul className={`navbar-desktop ${showmobile ? 'mobile-open' : ''}`}>
            {route.map((items, ind) => (
              <li key={ind} className={`font-Zodiak-Regular ${ind === 0 ? 'xyz' : ''}`}>
                <Link className="nav-link text-[1.025vw]" to={items.path} onClick={handleCloseMobileMenu}>
                  {items.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;