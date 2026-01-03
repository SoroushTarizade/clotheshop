import React, { useEffect } from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";5
import 'aos';
const Header = () => {
    useEffect()
    return (
        <>
            <div className='flex items-center w-[1200px] m-auto justify-between  px-10 relative'>
            <div
            data-aos="fade-right"
            className="w-[1138px] h-[611px] bg-[#01727D] absolute top-[-67px] left-[-500px] rounded-br-[171px] z-[-1]"
            ></div>
                <div className='text-[#FDF6F6] z-100'>
                    <h1 className='font-700 text-[64px] mb-10'>
                        How to Rent?
                    </h1>
                    <p className='w-[613px] h-[66px] text-left text-justify text-balance mb-5'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <button className='bg-[#F2B138] w-[140px] h-[38px] rounded-[28px] flex items-center gap-3 px-[22px] py-[10px] text-[15px] font-500 cursor-pointer hover:font-bold duration-300'>
                        See More
                        <span>
                            <IoIosArrowRoundForward className='w-[14px]'></IoIosArrowRoundForward>
                        </span>
                    </button>
                </div>
                <div>
                    <img src="./images/header-img.jpg" alt="header-img" className='w-[342px] h-[532px] rounded-t-[171px]'/>
                </div>
            </div>

        </>
    );
}

export default Header;
