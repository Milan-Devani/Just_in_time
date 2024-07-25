import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {



    const footerdata = {
        sections: [
            {
                title: 'About Company',
                links: [
                    { text: 'About Us', url: '#' },
                    { text: 'Store Locator', url: '#' },
                    { text: 'Blogs', url: '#' },
                    { text: 'Careers', url: '#' },
                    { text: 'Annual Results', url: '#' }
                ]
            },
            {
                title: 'Online Shopping',
                links: [
                    { text: "Men's Watches", url: '#' },
                    { text: "Women's Watches", url: '#' },
                    { text: 'Smart Watches', url: '#' },
                    { text: 'Watch Offers', url: '#' }
                ]
            },
            {
                title: 'Useful Links',
                links: [
                    { text: 'Corporate Gifting', url: '#' },
                    { text: 'Track Order', url: '#' },
                    { text: 'Return Request', url: '#' },
                    { text: 'Terms and Condition', url: '#' },
                    { text: 'Cancellation Return & Refund', url: '#' },
                    { text: 'Privacy Policy', url: '#' },
                    { text: 'Shipping and Dispatch Policy', url: '#' }
                ]
            }
        ]
    };

    const [footerData, setFooterData] = useState(null);

    useEffect(() => {
        setFooterData(footerdata);
    }, []);

    if (!footerData) {
        return <div>Loading...</div>;
    }

    const Servicedata = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" id="Group_14580" data-name="Group 14580" width="34.803" height="30.793" viewBox="0 0 34.803 30.793">
                    <g id="Group_14577" data-name="Group 14577" transform="translate(1.96)">
                        <path id="Path_6878" data-name="Path 6878" d="M-857.412,509.326a14.482,14.482,0,0,1,7.39-2.015,14.55,14.55,0,0,1,14.55,14.55,14.481,14.481,0,0,1-2.015,7.389l.618.618a15.324,15.324,0,0,0,2.244-8.007,15.4,15.4,0,0,0-15.4-15.4,15.324,15.324,0,0,0-8.007,2.244Z" transform="translate(865.42 -506.465)"></path>
                        <path id="Path_6879" data-name="Path 6879" d="M-932.868,625.307a14.482,14.482,0,0,1-7.332,1.98,14.55,14.55,0,0,1-14.55-14.55,14.482,14.482,0,0,1,1.98-7.332l-.618-.618a15.324,15.324,0,0,0-2.209,7.95,15.4,15.4,0,0,0,15.4,15.4,15.324,15.324,0,0,0,7.95-2.209Z" transform="translate(955.596 -597.341)"></path>
                    </g>
                    <g id="Group_14578" data-name="Group 14578" transform="translate(0 7.086)">
                        <rect id="Rectangle_5066" data-name="Rectangle 5066" width="5.153" height="0.644" transform="translate(0 2.014) rotate(-23.013)"></rect>
                        <rect id="Rectangle_5067" data-name="Rectangle 5067" width="5.153" height="0.644" transform="translate(6.171 5.01) rotate(-113.013)"></rect>
                    </g>
                    <g id="Group_14579" data-name="Group 14579" transform="translate(28.039 18.765)">
                        <rect id="Rectangle_5068" data-name="Rectangle 5068" width="5.153" height="0.644" transform="translate(6.764 2.995) rotate(156.987)"></rect>
                        <rect id="Rectangle_5069" data-name="Rectangle 5069" width="5.153" height="0.644" transform="translate(0.593 0) rotate(66.987)"></rect>
                    </g>
                    <path id="Path_6880" data-name="Path 6880" d="M-754.674,657.367a.226.226,0,0,1-.151-.03.317.317,0,0,1-.151-.272v-9.03a.317.317,0,0,1,.151-.272l8.4-4.44a.275.275,0,0,1,.3,0,.318.318,0,0,1,.151.272l.03,8.849a.317.317,0,0,1-.151.272l-8.426,4.621a.225.225,0,0,1-.151.03Zm.3-9.151v8.336l7.822-4.259-.03-8.185Z" transform="translate(772.131 -632.916)"></path>
                    <path id="Path_6881" data-name="Path 6881" d="M-858.242,656.992a.272.272,0,0,1-.151-.03l-8.487-4.53a.283.283,0,0,1-.151-.272v-8.97a.317.317,0,0,1,.151-.272.274.274,0,0,1,.3,0l4.53,2.356,3.987,2.114a.317.317,0,0,1,.151.272v9.03a.317.317,0,0,1-.151.272.384.384,0,0,1-.181.03Zm-8.185-5.013,7.883,4.2v-8.336l-3.805-2.023-1.691-.876-2.386-1.238Z" transform="translate(875.699 -632.541)"></path>
                    <path id="Path_6882" data-name="Path 6882" d="M-858.242,591.57a.272.272,0,0,1-.151-.03l-8.487-4.47a.317.317,0,0,1-.151-.272.317.317,0,0,1,.151-.272l8.456-4.621a.274.274,0,0,1,.3,0l8.426,4.651a.317.317,0,0,1,.151.272.317.317,0,0,1-.151.272l-8.4,4.44a1.314,1.314,0,0,1-.151.03Zm-7.852-4.772,7.852,4.138,7.732-4.108-7.792-4.319Z" transform="translate(875.699 -576.149)"></path>
                    <path id="Path_6883" data-name="Path 6883" d="M-827.554,609.691a.273.273,0,0,1-.151-.03l-1.691-.876a.317.317,0,0,1-.151-.272v-2.507a.317.317,0,0,1,.151-.272l8.245-4.651a.306.306,0,0,1,.423.121.306.306,0,0,1-.121.423l-8.125,4.56v2.144l1.087.574v-2.023a.317.317,0,0,1,.151-.272l8.215-4.621a.306.306,0,0,1,.423.121.306.306,0,0,1-.121.423l-8.034,4.53v2.326a.361.361,0,0,1-.151.272.329.329,0,0,1-.151.03Z" transform="translate(841.054 -593.878)"></path>
                    <path id="Path_6884" data-name="Path 6884" d="M-732.433,718.343a.111.111,0,0,1-.091-.03l-1.51-.544h-.03c-.03-.03-.091-.06-.121-.091,0-.03-.03-.03-.03-.06a.384.384,0,0,1-.03-.181l.362-1.782a.313.313,0,0,1,.362-.242.294.294,0,0,1,.242.3v.06l-.242,1.117,2.567-1.48a1.156,1.156,0,0,1,.846-.121,1.144,1.144,0,0,1,.695.544l.966,2.023a.3.3,0,0,1-.151.393.3.3,0,0,1-.393-.151l-.966-1.993a.479.479,0,0,0-.3-.242.386.386,0,0,0-.362.06l-2.6,1.51.906.332a.314.314,0,0,1,.181.393A.354.354,0,0,1-732.433,718.343Z" transform="translate(752.97 -699.45)"></path>
                </svg>
            , Servicename: "Easy Returns"
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" width="36.38" height="24.794" viewBox="0 0 36.38 24.794">
                    <g id="Group_16157" data-name="Group 16157" transform="translate(-1012.571 -464)">
                        <path id="Path_6388" data-name="Path 6388" d="M37.294,21.514a.52.52,0,0,0-.367-.152H29.793V16.667a.52.52,0,0,0-.52-.52H5.52a.52.52,0,0,0-.52.52V36.945a.52.52,0,0,0,.52.52H9.212a3.992,3.992,0,0,0,7.916,0H31.109a3.991,3.991,0,0,0,7.916,0h1.836a.52.52,0,0,0,.52-.52V25.815a.52.52,0,0,0-.152-.368l-3.934-3.934Zm3.047,4.516v2.284H33.849V22.4h2.863l3.629,3.63ZM28.754,17.187V30.632H6.039V17.186H28.754ZM6.039,31.671H28.754v4.754H17.129a3.992,3.992,0,0,0-7.916,0H6.039Zm7.131,8.23a2.956,2.956,0,1,1,2.957-2.957A2.96,2.96,0,0,1,13.171,39.9Zm21.9,0a2.956,2.956,0,1,1,2.956-2.957A2.96,2.96,0,0,1,35.067,39.9Zm3.958-3.476a3.991,3.991,0,0,0-7.916,0H29.793V22.4h3.016v6.433a.52.52,0,0,0,.52.52h7.012v7.071Z" transform="translate(1007.571 447.853)"></path>
                    </g>
                </svg>
            , Servicename: "Free Shipping"
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" id="Group_14997" data-name="Group 14997" width="24.553" height="30.541" viewBox="0 0 24.553 30.541">
                    <g id="Group_14586" data-name="Group 14586">
                        <g id="Group_14581" data-name="Group 14581" transform="translate(1.677)">
                            <path id="Path_6885" data-name="Path 6885" d="M-1052.957,675.125a10.465,10.465,0,0,1-10.453-10.454,10.465,10.465,0,0,1,10.453-10.453,10.465,10.465,0,0,1,10.453,10.453A10.466,10.466,0,0,1-1052.957,675.125Zm0-20.373a9.93,9.93,0,0,0-9.919,9.919,9.931,9.931,0,0,0,9.919,9.919,9.93,9.93,0,0,0,9.919-9.919A9.93,9.93,0,0,0-1052.957,654.752Z" transform="translate(1063.41 -654.218)"></path>
                        </g>
                        <g id="Group_14582" data-name="Group 14582" transform="translate(4.035 2.358)">
                            <path id="Path_6886" data-name="Path 6886" d="M-1011.17,714.552a8.1,8.1,0,0,1-8.1-8.1,8.1,8.1,0,0,1,8.1-8.095,8.1,8.1,0,0,1,8.1,8.095A8.1,8.1,0,0,1-1011.17,714.552Zm0-15.656a7.569,7.569,0,0,0-7.561,7.561,7.569,7.569,0,0,0,7.561,7.561,7.569,7.569,0,0,0,7.561-7.561A7.569,7.569,0,0,0-1011.17,698.9Z" transform="translate(1019.265 -698.362)"></path>
                        </g>
                        <g id="Group_14583" data-name="Group 14583" transform="translate(0.645 17.698) rotate(3)">
                            <path id="Path_6887" data-name="Path 6887" d="M5.688,12.327l-1.517-3.9L0,10.173,4.5,0,5,.158.974,9.263l3.512-1.47,1.24,3.187L9.683,2.248l.5.161Z"></path>
                        </g>
                        <g id="Group_14584" data-name="Group 14584" transform="matrix(0.998, -0.07, 0.07, 0.998, 13.536, 18.069)">
                            <path id="Path_6888" data-name="Path 6888" d="M4.494,12.327,0,2.409l.5-.161L4.456,10.98,5.7,7.793l3.513,1.47L5.181.158,5.682,0l4.5,10.173L6.011,8.428Z"></path>
                        </g>
                        <g id="Group_14585" data-name="Group 14585" transform="translate(7.864 5.76)">
                            <path id="Path_6889" data-name="Path 6889" d="M-943.89,762.392l-.929,2.038-2.226.254a.623.623,0,0,0-.522.426.623.623,0,0,0,.172.652l1.651,1.514-.446,2.195a.623.623,0,0,0,.244.628.623.623,0,0,0,.673.038l1.95-1.1,1.95,1.1a.624.624,0,0,0,.673-.038.623.623,0,0,0,.244-.628l-.446-2.195,1.651-1.514a.623.623,0,0,0,.172-.652.623.623,0,0,0-.522-.426l-2.225-.254-.929-2.038a.622.622,0,0,0-.567-.364.623.623,0,0,0-.567.364Zm.338.154a.252.252,0,0,1,.229-.147.253.253,0,0,1,.229.147l.973,2.134a.187.187,0,0,0,.148.108l2.33.266a.252.252,0,0,1,.21.172.251.251,0,0,1-.069.263l-1.728,1.585a.187.187,0,0,0-.057.174l.467,2.3a.251.251,0,0,1-.1.253.251.251,0,0,1-.271.015l-2.041-1.154a.188.188,0,0,0-.183,0l-2.041,1.154a.252.252,0,0,1-.272-.015.25.25,0,0,1-.1-.253l.467-2.3a.187.187,0,0,0-.057-.174l-1.729-1.585a.251.251,0,0,1-.069-.263.252.252,0,0,1,.21-.172l2.33-.266a.186.186,0,0,0,.148-.108l.973-2.134Z" transform="translate(947.597 -762.028)" fill-rule="evenodd"></path>
                        </g>
                    </g>
                </svg>
            , Servicename: "100% Authentic Products"
        }
    ];

    const socialMediaIcons = [
        { icon: <i className="fa-brands fa-x-twitter" style={{ color: '#ffffff' }}></i>, url: '#' },
        { icon: <i className="fab fa-facebook-square" style={{ color: '#ffffff' }}></i>, url: '#' },
        { icon: <i className="fab fa-instagram" style={{ color: '#ffffff' }}></i>, url: '#' },
        { icon: <i className="fab fa-youtube" style={{ color: '#ffffff' }}></i>, url: '#' },
        { icon: <i className="fa-brands fa-linkedin-in" style={{ color: '#ffffff' }}></i>, url: '#' }
    ];

    return (
        <div className='footer'>
            <div className='footer-sub'>
                <div className='h-[14px] bg-[#E2A362]'></div>
                <div className='footer-services-wrp bg-black border-b-[1px] border-[#9b9b9b] h-[135px] w-full justify-evenly items-center flex'>
                    {Servicedata.map((item, ind) => {
                        return (
                            <div key={ind} className='footer-services-box flex items-center gap-[10px]'>
                                <div className='fill-white'>{item.icon}</div>
                                <p className='text-[#ffffffdb] tracking-[0] text-[1.025vw] font-Lato'>{item.Servicename}</p>
                            </div>
                        )
                    })}
                </div>
                <footer className="footer items-center py-[20px] flex">
                    <div className='container mx-auto'>

                    </div>
                    <div className="footer-content flex w-[80%] justify-between	flex-wrap gap-[10px] pt-[10px] pb-[50px]">
                        {footerData.sections.map((section, index) => (
                            <div
                                key={index}
                                className={`footer-section w-[25%] ${index === 0 ? 'footer-section-1' : ''} ${index === 1 ? 'footer-section-2' : ''} ${index === 2 ? 'footer-section-3' : ''}`}>
                                <h3 className="mb-[20px] text-[1.171vw] font-Zodiak-Bold">{section.title}</h3>
                                <ul className='list-none p-0'>
                                    {section.links.map((link, linkIndex) => (
                                        <li className="pb-[5px] mb-[5px] text-[1.025vw] text-white font-Lato opacity-[0.57]" key={linkIndex}>
                                            <Link className='no-underline text-white' to={link.url}>{link.text}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <div className="footer-social-media">
                            <ul>
                                <li><h2 className='mb-[20px] text-[1.171vw] font-Zodiak-Bold'>Social Media</h2></li>
                                <div className='flex flex-wrap gap-[20px]'>
                                    {socialMediaIcons.map((social, index) => (
                                        <li key={index}>
                                            <Link className='text-[26px] ' to={social.url}>{social.icon}</Link>
                                        </li>
                                    ))}
                                </div>
                            </ul>
                        </div>
                    </div>

                </footer>

                <div className='bg-black py-[40px] sub-footer border-t-[1.6px] border-[#ffffff14]' >
                    <p className='text-[#ffffffbf] text-[10px] text-center'>@ 2024 , Just In Time</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
