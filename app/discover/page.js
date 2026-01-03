import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import React from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { GiRoundStar } from "react-icons/gi";
import { LuClock5 } from "react-icons/lu";
import { PiHouseLineLight } from "react-icons/pi";
import { CiChat1 } from "react-icons/ci";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
const Page = () => {
    return (
        <>
            <Navbar textColor='text-black'></Navbar>
            <div className='w-[1540px] h-[241px] relative mx-auto'>
                <img src='./images/discover-img.jpg' className='w-full h-full object-cover object-[50%_15%]' />
                <div className='w-[457px] h-[66px] absolute text-white font-bold text-[38px] absolute top-20 left-51'>
                <h2>Summer Sales</h2>
                <div className='w-[94px] h-[6px] bg-white rounded-[6px]'>
                </div>
                </div>
            </div>
                <div className='w-[1138px] h-375 mt-5 mx-auto'>
                    <div className='w-full grid grid-cols-4 gap-4'>
                        <div className=' bg-white border-[#BFBFBF80] border-[1px] h-[950px] col-span-1 mt-1 rounded-[6px] ml-1'>
                            <div className='w-[87px] h-[333px] text-[14px] mt-10 ml-5 flex flex-col gap-[3px]'>
                                <h3 className=''>
                                    Products
                                </h3>
                                <div className=''>
                                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 border border-full rounded-3xl bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"></input>
                                    <label htmlFor="default-checkbox" className="select-none ms-2 text-sm font-medium text-heading">View All</label>
                                </div>
                                <div className=''>
                                    <input id="tops-checkbox" type="checkbox" value="" className="w-4 h-4 border  rounded-full bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"></input>
                                    <label htmlFor="tops-checkbox" className="select-none ms-2 text-sm font-medium text-heading">Tops</label>
                                </div>
                                <div className=''>
                                    <input id="bottoms-checkbox" type="checkbox" value="" className="w-4 h-4 border border-full rounded-3xl bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"></input>
                                    <label htmlFor="bottoms-checkbox" className="select-none ms-2 text-sm font-medium text-heading">Bottoms</label>
                                </div>
                                <div className=''>
                                    <input id="dresses-checkbox" type="checkbox" value="" className="w-4 h-4 border border-full rounded-3xl bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"></input>
                                    <label htmlFor="dresses-checkbox" className="select-none ms-2 text-sm font-medium text-heading">Dresses</label>
                                </div>
                                <div className=''>
                                    <input id="shirts-checkbox" type="checkbox" value="" className="w-4 h-4 border border-full rounded-3xl bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"></input>
                                    <label htmlFor="shirts-checkbox" className="select-none ms-2 text-sm font-medium text-heading">Shirts</label>           
                                </div>
                                <div className=''>
                                    <input id="blouses-checkbox" type="checkbox" value="" className="w-4 h-4 border border-full rounded-3xl bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"></input>
                                    <label htmlFor="blouses-checkbox" className="select-none ms-2 text-sm font-medium text-heading">Blouses</label>     
                                </div>
                                <div className=''>
                                    <input id="trousers-checkbox" type="checkbox" value="" className="w-4 h-4 border border-full rounded-3xl bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"></input>
                                    <label htmlFor="trousers-checkbox" className="select-none ms-2 text-sm font-medium text-heading">Trousers</label>               
                                </div>
                                <div className=''>
                                    <input id="jeans-checkbox" type="checkbox" value="" className="w-4 h-4 border border-full rounded-3xl bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"></input>
                                    <label htmlFor="jeans-checkbox" className="select-none ms-2 text-sm font-medium text-heading">Jeans</label>             
                                </div>
                                <div className=''>
                                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 border border-full rounded-3xl bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"></input>
                                    <label htmlFor="default-checkbox" className="select-none ms-2 text-sm font-medium text-heading">View All</label>
                                </div>
                                <div>
                                </div>
                            </div>
                            <div className='w-[109px] h-[245px] text-[14px] mt-10 ml-5 flex flex-col gap-[3px]'>
                                <h3 className=''>
                                    Categories
                                </h3>

                                <div className=''>
                                    <input id="categories-checkbox" type="checkbox" value="" className="w-4 h-4 border border-full rounded-3xl bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"></input>
                                    <label htmlFor="categories-checkbox" className="select-none ms-2 text-sm font-medium text-heading">View All</label>
                                </div>
                                <div className=''>
                                    <input id="casual-checkbox" type="checkbox" value="" className="w-4 h-4 border border-full rounded-3xl bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"></input>
                                    <label htmlFor="casual-checkbox" className="select-none ms-2 text-sm font-medium text-heading">Casual</label>
                                </div>
                                <div className='flex'>
                                    <input id="office-checkbox" type="checkbox" value="" className="w-4 h-4 border  rounded-full bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"></input>
                                    <label htmlFor="office-checkbox" className="select-none ms-2 text-sm font-medium text-heading">Office Wear</label>
                                </div>
                                <div className='flex'>
                                    <input id="streetwear-checkbox" type="checkbox" value="" className="w-4 h-4 border border-full rounded-3xl bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"></input>
                                    <label htmlFor="streetwear-checkbox" className="select-none ms-2 text-sm font-medium text-heading">Streetwear</label>
                                </div>
                                <div className='flex'>
                                    <input id="graduation-checkbox" type="checkbox" value="" className="w-4 h-4 border border-full rounded-3xl bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"></input>
                                    <label htmlFor="graduation-checkbox" className="select-none ms-2 text-sm font-medium text-heading">Graduation</label>
                                </div>
                                <div className='flex'>
                                    <input id="summery-checkbox" type="checkbox" value="" className="w-4 h-4 border border-full rounded-3xl bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"></input>
                                    <label htmlFor="summery-checkbox" className="select-none ms-2 text-sm font-medium text-heading">Summery</label>           
                                </div>
                                <div>
                                </div>
                            </div>
                            <div className='w-[118px] h-[219px] text-[14px] mt-10 ml-5 flex flex-col gap-[3px]'>
                                <h3 className=''>
                                    Location
                                </h3>
                                <div className=''>
                                    <input id="jabodetabek-checkbox" type="checkbox" value="" className="w-4 h-4 border border-full rounded-3xl bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"></input>
                                    <label htmlFor="jabodetabek-checkbox" className="select-none ms-2 text-sm font-medium text-heading">Jabodetabek</label>
                                </div>
                                <div className=''>
                                    <input id="jawa-barat-checkbox" type="checkbox" value="" className="w-4 h-4 border border-full rounded-3xl bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"></input>
                                    <label htmlFor="jawa-barat-checkbox" className="select-none ms-2 text-sm font-medium text-heading">Jawa Barat</label>
                                </div>
                                <div className='flex'>
                                    <input id="dki-jakarta-checkbox" type="checkbox" value="" className="w-4 h-4 border  rounded-full bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"></input>
                                    <label htmlFor="dki-jakarta-checkbox" className="select-none ms-2 text-sm font-medium text-heading">DKI Jakarta</label>
                                </div>
                                <div className='flex'>
                                    <input id="jawa-timur-checkbox" type="checkbox" value="" className="w-4 h-4 border border-full rounded-3xl bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"></input>
                                    <label htmlFor="jawa-timur-checkbox" className="select-none ms-2 text-sm font-medium text-heading">Jawa Timur</label>
                                </div>
                                <div className='flex'>
                                    <input id="jawa-tengah-checkbox" type="checkbox" value="" className="w-4 h-4 border border-full rounded-3xl bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"></input>
                                    <label htmlFor="jawa-tengah-checkbox" className="select-none ms-2 text-sm font-medium text-heading">Jawa Tengah</label>
                                </div>
                                <div>
                                </div>
                            </div>
                            <div ></div>
                        </div>
                        <div className='h-[39px] col-span-3'>
                            <div className='relative'>
                                <input className='pl-3 w-full h-[38px] border-[1px] border-[#D8D6DE] rounded-[6px] outline-none' placeholder='Search'/>
                                <IoSearchOutline className='w-[20px] h-[20px] absolute right-2 top-2'></IoSearchOutline>
                            </div>
                            <div className='grid grid-cols-9 gap-11  mx-auto border-[#D8D6DE] w-[839px] bg-white mt-8' >
                                <div className='col-span-3 w-[248px] h-[418px] bg-white flex flex-col justify-between border-[.82px] rounded-[6px] border-[#DFDFDF]'>
                                                                <div>
                                                                    <div></div>
                                                                    <img src="./images/product-img8.jpg" alt="" className='w-[205px] h-[254px] object-cover rounded-[6px] mx-auto pt-2'/>
                                                                </div>
                                                                <div className='w-[205px] h-[108px]  mx-auto mt-1 flex flex-col justify-between'>
                                                                    <div className='flex items-center justify-between text-[13px] text-[#5E5873]'>
                                                                        <p>Vintage Cardigan</p>
                                                                        <div className='flex items-center gap-1'>
                                                                            <p>4.5</p>
                                                                            <GiRoundStar  className='text-[#FFBA01]'/>
                                                                        </div>
                                                                    </div>
                                                                    <div className='flex items-center justify-between text-[#5E5873]'>
                                                                        <div className='flex items-center gap-3 font-bold text-[14.5px]'>
                                                                            <span>$</span>
                                                                            <p>350</p>
                                                                        </div>
                                                                        <div className='text-[11px]'>(15)</div>
                                                                    </div>
                                                                    <div className='flex items-center gap-2 text-[11px] text-[#5E5873]'>
                                                                        <LuClock5 />
                                                                        <p>5 <span>days</span></p>
                                                                    </div>
                                                                    <div className='flex items-center gap-2 text-[11px] text-[#5E5873]'>
                                                                        <PiHouseLineLight />
                                                                        <p>Jakarta Barat</p>
                                                                    </div>
                                                                </div>
                                                                <div className='h-[41px] bg-[#FDF6F6] flex justify-between'>
                                                                    <div className=' my-auto mx-auto '>
                                                                        <CiChat1 className='text-[20px]'/>
                                                                    </div>
                                                                    <div className='text-[11px]'>
                                                                        <button className='bg-[#388186] cursor-pointer text-white w-[195px] h-[41px] duration-300 hover:text-black rounded-br-[6px]'>
                                                                            Wishlist
                                                                        </button>
                                                                    </div>
                                                                </div>
                                </div>
                                <div className='col-span-3 w-[248px] h-[418px] bg-white flex flex-col justify-between border-[.82px] rounded-[6px] border-[#DFDFDF]'>
                                                                <div>
                                                                    <div></div>
                                                                    <img src="./images/product-img9.jpg" alt="" className='w-[205px] h-[254px] object-cover rounded-[6px] mx-auto pt-2'/>
                                                                </div>
                                                                <div className='w-[205px] h-[108px]  mx-auto mt-1 flex flex-col justify-between'>
                                                                    <div className='flex items-center justify-between text-[13px] text-[#5E5873]'>
                                                                        <p>Vintage Cardigan</p>
                                                                        <div className='flex items-center gap-1'>
                                                                            <p>4.5</p>
                                                                            <GiRoundStar  className='text-[#FFBA01]'/>
                                                                        </div>
                                                                    </div>
                                                                    <div className='flex items-center justify-between text-[#5E5873]'>
                                                                        <div className='flex items-center gap-3 font-bold text-[14.5px]'>
                                                                            <span>$</span>
                                                                            <p>350</p>
                                                                        </div>
                                                                        <div className='text-[11px]'>(15)</div>
                                                                    </div>
                                                                    <div className='flex items-center gap-2 text-[11px] text-[#5E5873]'>
                                                                        <LuClock5 />
                                                                        <p>5 <span>days</span></p>
                                                                    </div>
                                                                    <div className='flex items-center gap-2 text-[11px] text-[#5E5873]'>
                                                                        <PiHouseLineLight />
                                                                        <p>Jakarta Barat</p>
                                                                    </div>
                                                                </div>
                                                                <div className='h-[41px] bg-[#FDF6F6] flex justify-between'>
                                                                    <div className=' my-auto mx-auto '>
                                                                        <CiChat1 className='text-[20px]'/>
                                                                    </div>
                                                                    <div className='text-[11px]'>
                                                                        <button className='bg-[#388186] cursor-pointer text-white w-[195px] h-[41px] duration-300 hover:text-black rounded-br-[6px]'>
                                                                            Wishlist
                                                                        </button>
                                                                    </div>
                                                                </div>
                                </div>
                                <div className='col-span-3 w-[248px] h-[418px] bg-white flex flex-col justify-between border-[.82px] rounded-[6px] border-[#DFDFDF]'>
                                                                <div>
                                                                    <div></div>
                                                                    <img src="./images/product-img1.jpg" alt="" className='w-[205px] h-[254px] object-cover rounded-[6px] mx-auto pt-2'/>
                                                                </div>
                                                                <div className='w-[205px] h-[108px]  mx-auto mt-1 flex flex-col justify-between'>
                                                                    <div className='flex items-center justify-between text-[13px] text-[#5E5873]'>
                                                                        <p>Vintage Cardigan</p>
                                                                        <div className='flex items-center gap-1'>
                                                                            <p>4.5</p>
                                                                            <GiRoundStar  className='text-[#FFBA01]'/>
                                                                        </div>
                                                                    </div>
                                                                    <div className='flex items-center justify-between text-[#5E5873]'>
                                                                        <div className='flex items-center gap-3 font-bold text-[14.5px]'>
                                                                            <span>$</span>
                                                                            <p>350</p>
                                                                        </div>
                                                                        <div className='text-[11px]'>(15)</div>
                                                                    </div>
                                                                    <div className='flex items-center gap-2 text-[11px] text-[#5E5873]'>
                                                                        <LuClock5 />
                                                                        <p>5 <span>days</span></p>
                                                                    </div>
                                                                    <div className='flex items-center gap-2 text-[11px] text-[#5E5873]'>
                                                                        <PiHouseLineLight />
                                                                        <p>Jakarta Barat</p>
                                                                    </div>
                                                                </div>
                                                                <div className='h-[41px] bg-[#FDF6F6] flex justify-between'>
                                                                    <div className=' my-auto mx-auto '>
                                                                        <CiChat1 className='text-[20px]'/>
                                                                    </div>
                                                                    <div className='text-[11px]'>
                                                                        <button className='bg-[#388186] cursor-pointer text-white w-[195px] h-[41px] duration-300 hover:text-black rounded-br-[6px]'>
                                                                            Wishlist
                                                                        </button>
                                                                    </div>
                                                                </div>
                                </div>
                                <div className='col-span-3 w-[248px] h-[418px] bg-white flex flex-col justify-between border-[.82px] rounded-[6px] border-[#DFDFDF]'>
                                                                <div>
                                                                    <div></div>
                                                                    <img src="./images/product-img2.jpg" alt="" className='w-[205px] h-[254px] object-cover rounded-[6px] mx-auto pt-2'/>
                                                                </div>
                                                                <div className='w-[205px] h-[108px]  mx-auto mt-1 flex flex-col justify-between'>
                                                                    <div className='flex items-center justify-between text-[13px] text-[#5E5873]'>
                                                                        <p>Vintage Cardigan</p>
                                                                        <div className='flex items-center gap-1'>
                                                                            <p>4.5</p>
                                                                            <GiRoundStar  className='text-[#FFBA01]'/>
                                                                        </div>
                                                                    </div>
                                                                    <div className='flex items-center justify-between text-[#5E5873]'>
                                                                        <div className='flex items-center gap-3 font-bold text-[14.5px]'>
                                                                            <span>$</span>
                                                                            <p>350</p>
                                                                        </div>
                                                                        <div className='text-[11px]'>(15)</div>
                                                                    </div>
                                                                    <div className='flex items-center gap-2 text-[11px] text-[#5E5873]'>
                                                                        <LuClock5 />
                                                                        <p>5 <span>days</span></p>
                                                                    </div>
                                                                    <div className='flex items-center gap-2 text-[11px] text-[#5E5873]'>
                                                                        <PiHouseLineLight />
                                                                        <p>Jakarta Barat</p>
                                                                    </div>
                                                                </div>
                                                                <div className='h-[41px] bg-[#FDF6F6] flex justify-between'>
                                                                    <div className=' my-auto mx-auto '>
                                                                        <CiChat1 className='text-[20px]'/>
                                                                    </div>
                                                                    <div className='text-[11px]'>
                                                                        <button className='bg-[#388186] cursor-pointer text-white w-[195px] h-[41px] duration-300 hover:text-black rounded-br-[6px]'>
                                                                            Wishlist
                                                                        </button>
                                                                    </div>
                                                                </div>
                                </div>
                                <div className='col-span-3 w-[248px] h-[418px] bg-white flex flex-col justify-between border-[.82px] rounded-[6px] border-[#DFDFDF]'>
                                                                <div>
                                                                    <div></div>
                                                                    <img src="./images/product-img3.jpg" alt="" className='w-[205px] h-[254px] object-cover rounded-[6px] mx-auto pt-2'/>
                                                                </div>
                                                                <div className='w-[205px] h-[108px]  mx-auto mt-1 flex flex-col justify-between'>
                                                                    <div className='flex items-center justify-between text-[13px] text-[#5E5873]'>
                                                                        <p>Vintage Cardigan</p>
                                                                        <div className='flex items-center gap-1'>
                                                                            <p>4.5</p>
                                                                            <GiRoundStar  className='text-[#FFBA01]'/>
                                                                        </div>
                                                                    </div>
                                                                    <div className='flex items-center justify-between text-[#5E5873]'>
                                                                        <div className='flex items-center gap-3 font-bold text-[14.5px]'>
                                                                            <span>$</span>
                                                                            <p>350</p>
                                                                        </div>
                                                                        <div className='text-[11px]'>(15)</div>
                                                                    </div>
                                                                    <div className='flex items-center gap-2 text-[11px] text-[#5E5873]'>
                                                                        <LuClock5 />
                                                                        <p>5 <span>days</span></p>
                                                                    </div>
                                                                    <div className='flex items-center gap-2 text-[11px] text-[#5E5873]'>
                                                                        <PiHouseLineLight />
                                                                        <p>Jakarta Barat</p>
                                                                    </div>
                                                                </div>
                                                                <div className='h-[41px] bg-[#FDF6F6] flex justify-between'>
                                                                    <div className=' my-auto mx-auto '>
                                                                        <CiChat1 className='text-[20px]'/>
                                                                    </div>
                                                                    <div className='text-[11px]'>
                                                                        <button className='bg-[#388186] cursor-pointer text-white w-[195px] h-[41px] duration-300 hover:text-black rounded-br-[6px]'>
                                                                            Wishlist
                                                                        </button>
                                                                    </div>
                                                                </div>
                                </div>
                                <div className='col-span-3 w-[248px] h-[418px] bg-white flex flex-col justify-between border-[.82px] rounded-[6px] border-[#DFDFDF]'>
                                                                <div>
                                                                    <div></div>
                                                                    <img src="./images/product-img4.jpg" alt="" className='w-[205px] h-[254px] object-cover rounded-[6px] mx-auto pt-2'/>
                                                                </div>
                                                                <div className='w-[205px] h-[108px]  mx-auto mt-1 flex flex-col justify-between'>
                                                                    <div className='flex items-center justify-between text-[13px] text-[#5E5873]'>
                                                                        <p>Vintage Cardigan</p>
                                                                        <div className='flex items-center gap-1'>
                                                                            <p>4.5</p>
                                                                            <GiRoundStar  className='text-[#FFBA01]'/>
                                                                        </div>
                                                                    </div>
                                                                    <div className='flex items-center justify-between text-[#5E5873]'>
                                                                        <div className='flex items-center gap-3 font-bold text-[14.5px]'>
                                                                            <span>$</span>
                                                                            <p>350</p>
                                                                        </div>
                                                                        <div className='text-[11px]'>(15)</div>
                                                                    </div>
                                                                    <div className='flex items-center gap-2 text-[11px] text-[#5E5873]'>
                                                                        <LuClock5 />
                                                                        <p>5 <span>days</span></p>
                                                                    </div>
                                                                    <div className='flex items-center gap-2 text-[11px] text-[#5E5873]'>
                                                                        <PiHouseLineLight />
                                                                        <p>Jakarta Barat</p>
                                                                    </div>
                                                                </div>
                                                                <div className='h-[41px] bg-[#FDF6F6] flex justify-between'>
                                                                    <div className=' my-auto mx-auto '>
                                                                        <CiChat1 className='text-[20px]'/>
                                                                    </div>
                                                                    <div className='text-[11px]'>
                                                                        <button className='bg-[#388186] cursor-pointer text-white w-[195px] h-[41px] duration-300 hover:text-black rounded-br-[6px]'>
                                                                            Wishlist
                                                                        </button>
                                                                    </div>
                                                                </div>
                                </div>
                                <div className='col-span-3 w-[248px] h-[418px] bg-white flex flex-col justify-between border-[.82px] rounded-[6px] border-[#DFDFDF]'>
                                                                <div>
                                                                    <div></div>
                                                                    <img src="./images/product-img5.jpg" alt="" className='w-[205px] h-[254px] object-cover rounded-[6px] mx-auto pt-2'/>
                                                                </div>
                                                                <div className='w-[205px] h-[108px]  mx-auto mt-1 flex flex-col justify-between'>
                                                                    <div className='flex items-center justify-between text-[13px] text-[#5E5873]'>
                                                                        <p>Vintage Cardigan</p>
                                                                        <div className='flex items-center gap-1'>
                                                                            <p>4.5</p>
                                                                            <GiRoundStar  className='text-[#FFBA01]'/>
                                                                        </div>
                                                                    </div>
                                                                    <div className='flex items-center justify-between text-[#5E5873]'>
                                                                        <div className='flex items-center gap-3 font-bold text-[14.5px]'>
                                                                            <span>$</span>
                                                                            <p>350</p>
                                                                        </div>
                                                                        <div className='text-[11px]'>(15)</div>
                                                                    </div>
                                                                    <div className='flex items-center gap-2 text-[11px] text-[#5E5873]'>
                                                                        <LuClock5 />
                                                                        <p>5 <span>days</span></p>
                                                                    </div>
                                                                    <div className='flex items-center gap-2 text-[11px] text-[#5E5873]'>
                                                                        <PiHouseLineLight />
                                                                        <p>Jakarta Barat</p>
                                                                    </div>
                                                                </div>
                                                                <div className='h-[41px] bg-[#FDF6F6] flex justify-between'>
                                                                    <div className=' my-auto mx-auto '>
                                                                        <CiChat1 className='text-[20px]'/>
                                                                    </div>
                                                                    <div className='text-[11px]'>
                                                                        <button className='bg-[#388186] cursor-pointer text-white w-[195px] h-[41px] duration-300 hover:text-black rounded-br-[6px]'>
                                                                            Wishlist
                                                                        </button>
                                                                    </div>
                                                                </div>
                                </div>
                                <div className='col-span-3 w-[248px] h-[418px] bg-white flex flex-col justify-between border-[.82px] rounded-[6px] border-[#DFDFDF]'>
                                                                <div>
                                                                    <div></div>
                                                                    <img src="./images/product-img6.jpg" alt="" className='w-[205px] h-[254px] object-cover rounded-[6px] mx-auto pt-2'/>
                                                                </div>
                                                                <div className='w-[205px] h-[108px]  mx-auto mt-1 flex flex-col justify-between'>
                                                                    <div className='flex items-center justify-between text-[13px] text-[#5E5873]'>
                                                                        <p>Vintage Cardigan</p>
                                                                        <div className='flex items-center gap-1'>
                                                                            <p>4.5</p>
                                                                            <GiRoundStar  className='text-[#FFBA01]'/>
                                                                        </div>
                                                                    </div>
                                                                    <div className='flex items-center justify-between text-[#5E5873]'>
                                                                        <div className='flex items-center gap-3 font-bold text-[14.5px]'>
                                                                            <span>$</span>
                                                                            <p>350</p>
                                                                        </div>
                                                                        <div className='text-[11px]'>(15)</div>
                                                                    </div>
                                                                    <div className='flex items-center gap-2 text-[11px] text-[#5E5873]'>
                                                                        <LuClock5 />
                                                                        <p>5 <span>days</span></p>
                                                                    </div>
                                                                    <div className='flex items-center gap-2 text-[11px] text-[#5E5873]'>
                                                                        <PiHouseLineLight />
                                                                        <p>Jakarta Barat</p>
                                                                    </div>
                                                                </div>
                                                                <div className='h-[41px] bg-[#FDF6F6] flex justify-between'>
                                                                    <div className=' my-auto mx-auto '>
                                                                        <CiChat1 className='text-[20px]'/>
                                                                    </div>
                                                                    <div className='text-[11px]'>
                                                                        <button className='bg-[#388186] cursor-pointer text-white w-[195px] h-[41px] duration-300 hover:text-black rounded-br-[6px]'>
                                                                            Wishlist
                                                                        </button>
                                                                    </div>
                                                                </div>
                                </div>
                                <div className='col-span-3 w-[248px] h-[418px] bg-white flex flex-col justify-between border-[.82px] rounded-[6px] border-[#DFDFDF]'>
                                                                <div>
                                                                    <div></div>
                                                                    <img src="./images/product-img7.jpg" alt="" className='w-[205px] h-[254px] object-cover rounded-[6px] mx-auto pt-2'/>
                                                                </div>
                                                                <div className='w-[205px] h-[108px]  mx-auto mt-1 flex flex-col justify-between'>
                                                                    <div className='flex items-center justify-between text-[13px] text-[#5E5873]'>
                                                                        <p>Vintage Cardigan</p>
                                                                        <div className='flex items-center gap-1'>
                                                                            <p>4.5</p>
                                                                            <GiRoundStar  className='text-[#FFBA01]'/>
                                                                        </div>
                                                                    </div>
                                                                    <div className='flex items-center justify-between text-[#5E5873]'>
                                                                        <div className='flex items-center gap-3 font-bold text-[14.5px]'>
                                                                            <span>$</span>
                                                                            <p>350</p>
                                                                        </div>
                                                                        <div className='text-[11px]'>(15)</div>
                                                                    </div>
                                                                    <div className='flex items-center gap-2 text-[11px] text-[#5E5873]'>
                                                                        <LuClock5 />
                                                                        <p>5 <span>days</span></p>
                                                                    </div>
                                                                    <div className='flex items-center gap-2 text-[11px] text-[#5E5873]'>
                                                                        <PiHouseLineLight />
                                                                        <p>Jakarta Barat</p>
                                                                    </div>
                                                                </div>
                                                                <div className='h-[41px] bg-[#FDF6F6] flex justify-between'>
                                                                    <div className=' my-auto mx-auto '>
                                                                        <CiChat1 className='text-[20px]'/>
                                                                    </div>
                                                                    <div className='text-[11px]'>
                                                                        <button className='bg-[#388186] cursor-pointer text-white w-[195px] h-[41px] duration-300 hover:text-black rounded-br-[6px]'>
                                                                            Wishlist
                                                                        </button>
                                                                    </div>
                                                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer></Footer>   
        </>
    );
}

export default Page;
