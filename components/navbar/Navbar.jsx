"use client";
import Link from 'next/link';
import { React } from 'react';
import { IoIosSearch } from "react-icons/io";
import { usePathname } from 'next/navigation';
const Navbar = ({textColor = "text-white"}) => {
    const pathname = usePathname()
    return (
        <>
        <div className='w-[1540px] flex items-center justify-around h-[62px] text-lg mx-auto'>
            <div className={`flex items-center justify-between gap-10 ${textColor}`}>
            <div className="flex items-center gap-1">
                <div className="border-3xl w-10">
                    <img className="rounded-full" src="./images/logo.jpg" alt="logo-img" />
                </div>
                <div>
                    <p className="">Clothe Shop</p>
                </div>
            </div>
            <div>
                <ul className="flex gap-5 items-center ">
                    <li>
                        <Link href='/'
                            className={`${pathname === "/" ? "font-bold" : "font-normal"} hover:font-bold duration-300`}
                        >Home</Link>
                    </li>
                    <li>
                        <Link href="discover" 
                        className={`${pathname === "/discover" ? "font-bold" : "font-normal"} hover:font-bold duration-300`}
                        >Discover</Link>
                    </li>
                    <li>
                        <Link href="faqs"  className='hover:font-bold duration-300'>
                        FAQs
                        </Link>
                    </li>
                    <li>
                        <Link href="about" className='hover:font-bold duration-300'>
                        About Us
                        </Link>
                    </li>
                    <li>
                        <Link href="connect" className='hover:font-bold duration-300'>Connect Us</Link>
                    </li>
                </ul>
            </div>
            </div>
            <div className="flex gap-2 items-center ">
            <div className="">
                <IoIosSearch className="w-[24px]"></IoIosSearch>
            </div>
            <div>
                <span className='border-l-[.1rem] mr-3 ml-1 border-gray-400 w-[38px]'></span>
                <button className='bg-[#F2B138] text-[#ffffff] rounded-[25px] h-[33px] w-[5.9rem]'>
                    <Link href="login">Login</Link>
                </button>
            </div>
            </div>
        </div>
        {/* <div className="w-[1138px] h-[611px] bg-[#01727D] mt-[-67px] ml-[-295px] rounded-br-[171px]"></div> */}
        </>
    );
}

export default Navbar;
