import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
const Footer = () => {
    return (
        <>
        <div className='w-[1540px] h-[501px] bg-[#2E2B2B] mx-auto flex flex-col items-center text-white'>
            <div className='w-[75px] h-[40px] mt-38'>
                clothe- shop
            </div>
            <div className='w-[1340px] h-[3px] bg-white/9 mt-8'></div>
            <div className='w-[216px] h-[25px] flex justify-between mt-20'>
                <ImFacebook className='w-[24px] h-[24px] cursor-pointer'></ImFacebook>
                <FaInstagram className='w-[24px] h-[24px] cursor-pointer'></FaInstagram>
                <RiTwitterXFill className='w-[24px] h-[24px] cursor-pointer'></RiTwitterXFill>
                <FaLinkedinIn className='w-[24px] h-[24px] cursor-pointer'></FaLinkedinIn>
            </div>
            <div className='w-[188px] h-[24px] mt-8'>
                © clothe-shop, Inc. 2025
            </div>
        </div>
        </>
    );
}

export default Footer;
