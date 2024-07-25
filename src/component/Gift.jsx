import React from 'react';
import gif from '../assets/img/Gift.gif';
import gif2 from '../assets/img/mon-gif.gif';
import { Link } from 'react-router-dom';

function Gift() {
    return (
        <div className='gift py-[35px]'>
            <div className='container mx-auto'>
                <div className='gift-title mb-[23px]'>
                    <h1 className='text-[1.757vw] font-Zodiak-Regular leading-[2.1vw]'>Right Way To Find The Right Gift</h1>
                </div>
                <div className='gift-main flex rounded-l-lg mx-auto overflow-hidden w-full'>
                    <div className='gift-part-1 w-[60%]' >
                        <img className='des-gif' src={gif} alt="Gift" />
                        <img className='mob-gif hidden' src={gif2} alt="" />
                    </div>
                    <div className='gift-part-2 w-[40%] bg-black p-[5.8%] overflow-hidden rounded-r-lg'>
                        <h1 className='text-[1.5vw] leading-[1.8vw] font-Zodiak-Regular text-white'>Explore Our<br />Watch Advisor</h1>
                        <p className='text-[20px] mt-[1.05vw] mb-[1.05vw] opacity-70 text-white font-Lato'>4 - Steps to find the right watch for yourself</p>
                        <button className='font-Lato mt-[1.2vw]' type="button">
                            <Link to="/" className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:rounded-lg ease"></span>
                                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:rounded-lg ease"></span>
                                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full rounded-lg ease"></span>
                                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease rounded-lg"></span>
                                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100 rounded-lg"></span>
                                <span className="btn-text relative transition-colors duration-300 delay-200 group-hover:text-white rounded-lg ease text-[1.2vw]">Try now</span>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gift;
