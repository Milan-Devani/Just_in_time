import React, { useEffect, useRef } from 'react'

function About() {
    const Counter = ({ start, end, duration }) => {
        const countRef = useRef(null);

        useEffect(() => {
            const counter = (start, end, duration) => {
                let current = start;
                const range = end - start;
                const increment = end > start ? 1 : -1;
                const step = Math.abs(Math.floor(duration / range));

                const timer = setInterval(() => {
                    current += increment;
                    if (countRef.current) {
                        countRef.current.textContent = current;
                    }
                    if (current === end) {
                        clearInterval(timer);
                    }
                }, step);
            };

            counter(start, end, duration);
        }, [start, end, duration]);

        return <span ref={countRef} className="display-4"></span>;
    };
    return (
        <>
            <div className='about p-[35px]'>    
                <div className='container mx-auto'>
                    <div className='about-main w-[62.5%] bg-[#F0E7DA] p-[30px]  rounded-[20px] mx-auto'>
                        <div className='about-sub px-[68.852px] bg-[#f7f2ea] rounded-xl pt-[27.525px] pb-[13.520px]'>
                            <h1 className='text-[2.196vw] mb-[27.5px] font-Zodiak-Regular' >About Just in Time</h1>
                            <div className='about-sub-main flex'>
                                <div className="about-sub-part about-sub-part-1 text-left w-[165px] fit ">
                                    <div className='count-number text-[3.294vw] text-[#98352D] font-Zodiak-Regular'>
                                        <Counter start={0} end={20} duration={3000} />
                                        +
                                    </div>
                                    <p className='count-text text-[#363535] opacity-70 text-[1.171vw] font-Lato ml-[14px] '>Years Of <br /> Legacy</p>
                                </div>
                                <div className="about-sub-part about-sub-part-2 text-center boder-part">
                                    <div className='count-number text-[3.294vw] text-[#98352D] font-Zodiak-Bold'>
                                        <Counter start={0} end={65} duration={2500} />
                                        +
                                    </div>
                                    <p className='count-text text-[#363535] opacity-70 text-[1.171vw] mx-[8px] font-Lato'>Boutiques & authorised <br /> Service Centres</p>
                                </div>
                                <div className="about-sub-part about-sub-part-3 text-right">
                                    <div className='count-number text-[3.294vw] text-[#98352D] font-Zodiak-Regular'>
                                        <Counter start={0} end={45} duration={3000} />
                                        +
                                    </div>
                                    <p className='count-text text-[#363535] opacity-70 text-center text-[1.171vw] font-Lato ml-[30px]'>Curated House <br /> of Brands</p>
                                </div>
                            </div>
                            <p className='about-more font-Lato mt-[27.523px] mb-[15.744px] text-center text-[#6F6F6F] uppercase underline underline-offset-2 text-[1.025vw] leading-[1.245vw]'>know more</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About