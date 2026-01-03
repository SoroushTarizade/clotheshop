"use client"
import {React , useRef} from 'react';
import { VscArrowRight } from "react-icons/vsc";
import { Swiper, SwiperSlide , useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { GiRoundStar } from "react-icons/gi";
import { LuClock5 } from "react-icons/lu";
import { PiHouseLineLight } from "react-icons/pi";
import { CiChat1 } from "react-icons/ci";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Recommend = () => {
    const swiperRef = useRef(null);
    //  const swiper = useSwiper();
//        slideNext = () => {
//     const swiper = new Swiper(".sliderStyle", {
//     });
//     swiper.on("slideChange", function () {
//       console.log("slide changed");
//     });
//   };
    return (
        <>
            <div className='w-[1440px] h-[740px]  mx-auto flex flex-col gap-15 mt-25 justify-around'>
                <div className='w-[1082px] h-[66px] flex items-center justify-between  mx-auto px-2 '>
                    <div className='flex flex-col justify-around h-full'>
                        <h2 className='w-[457px] h-[44px] font-700 text-[38px] font-bold color-[#2E2B2B]'>Recommended For You</h2>
                        <div className='w-[94px] h-[6px] bg-[#388186] rounded-[6px]'></div>
                    </div>
                    <div className='w-[104px] h-[28px] flex text-[#5E5873] items-center gap-1 cursor-pointer duration-300 hover:text-black'>
                        <div className=''>View More</div>
                        <VscArrowRight />
                    </div>
                </div>
                <div className='w-[1082px] h-[418px] mx-auto flex items-center mt-[-100px] relative'>
                        <button onClick={() => swiperRef.current?.slidePrev()} className='absolute left-[-50] bottom-0 top-0'>
                            <IoMdArrowBack  className='text-[28px]'/>
                        </button>
                        <Swiper
                            loop= "true"
                             spaceBetween={45}
                             slidesPerView={4}
                             navigation
                             pagination={{ clickable: true }}
                            //  scrollbar={{ draggable: true }}
                            //  onSwiper={(swiper) => console.log(swiper)}
                            //  onSlideChange={() => console.log('slide change')}
                             onSwiper={(swiper) => (swiperRef.current = swiper)}
                           >
                             <SwiperSlide>
                                <div className='w-[248px] h-[418px] bg-white flex flex-col justify-between border-[.82px] rounded-[6px] border-[#DFDFDF]'>
                                    <div>
                                        <div></div>
                                        <img src="./images/recommed-image1.jpg" alt="" className='w-[205px] h-[254px] object-cover rounded-[6px] mx-auto pt-2'/>
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
                             </SwiperSlide>
                             <SwiperSlide>
                                <div className='w-[248px] h-[418px] bg-white flex flex-col justify-between border-[.82px] rounded-[6px] border-[#DFDFDF]'>
                                    <div>
                                        <div></div>
                                        <img src="./images/recommed-image2.jpg" alt="" className='w-[205px] h-[254px] object-cover rounded-[6px] mx-auto pt-2'/>
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
                             </SwiperSlide>
                             <SwiperSlide>
                                <div className='w-[248px] h-[418px] bg-white flex flex-col justify-between border-[.82px] rounded-[6px] border-[#DFDFDF]'>
                                    <div>
                                        <div></div>
                                        <img src="./images/recommed-image3.jpg" alt="" className='w-[205px] h-[254px] object-cover rounded-[6px] mx-auto pt-2'/>
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
                             </SwiperSlide>
                             <SwiperSlide>
                                <div className='w-[248px] h-[418px] bg-white flex flex-col justify-between border-[.82px] rounded-[6px] border-[#DFDFDF]'>
                                    <div>
                                        <div></div>
                                        <img src="./images/recommed-image4.jpg" alt="" className='w-[205px] h-[254px] object-cover rounded-[6px] mx-auto pt-2'/>
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
                             </SwiperSlide>
                             <SwiperSlide>
                                <div className='w-[248px] h-[418px] bg-[#388186] rounded-[6px] text-white text-center text-bold text-[50px] flex flex-col items-center justify-around gap-10'>
                                    <p>slide</p>
                                    <p className='flex'>5</p>
                                </div>
                             </SwiperSlide>
                             <SwiperSlide>
                                <div className='w-[248px] h-[418px] bg-[#388186] rounded-[6px] text-white text-center text-bold text-[50px] flex flex-col items-center justify-around gap-10'>
                                    <p>slide</p>
                                    <p className='flex'>6</p>
                                </div>
                             </SwiperSlide>
                             <SwiperSlide>
                                <div className='w-[248px] h-[418px] bg-[#388186] rounded-[6px] text-white text-center text-bold text-[50px] flex flex-col items-center justify-around gap-10'>
                                    <p>slide</p>
                                    <p className='flex'>7</p>
                                </div>
                             </SwiperSlide>
                             <SwiperSlide>
                                <div className='w-[248px] h-[418px] bg-[#388186] rounded-[6px] text-white text-center text-bold text-[50px] flex flex-col items-center justify-around gap-10'>
                                    <p>slide</p>
                                    <p className='flex'>8</p>
                                </div>
                             </SwiperSlide>
                             <SwiperSlide>
                                <div className='w-[248px] h-[418px] bg-[#388186] rounded-[6px] text-white text-center text-bold text-[50px] flex flex-col items-center justify-around gap-10'>
                                    <p>slide</p>
                                    <p className='flex'>9</p>
                                </div>
                             </SwiperSlide>
                        </Swiper>
                        <button onClick={() => swiperRef.current?.slideNext()} className='absolute right-[-50] bottom-0 top-0'>
                        <IoMdArrowForward className='text-[28px] ' />
                        </button>
                </div>
            </div>   
        </>
    );
}

export default Recommend;
