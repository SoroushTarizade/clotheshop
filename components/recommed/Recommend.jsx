"use client";
import { React, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Recommend = () => {
    const swiperRef = useRef(null);

    return (
        <section className="max-w-[1440px] mx-auto px-4 py-16">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                        Recommended For You
                    </h2>
                    <div className="w-20 h-1 bg-[#388186] rounded" />
                </div>
                <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-black">
                    View More →
                </button>
            </div>

            <div className="relative">
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10"
                >
                    <IoMdArrowBack size={26} />
                </button>

                <Swiper
                    data-aos="fade-down"
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    loop={true}
                    breakpoints={{
                        0: { slidesPerView: 1.2 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <SwiperSlide key={i}>
                            <div className="h-[418px] bg-white flex flex-col justify-between  rounded">
                                <img
                                    src={`./images/recommed-image${i}.jpg`}
                                    className="h-64 w-full object-cover rounded-t" />
                                <div className="p-3 text-sm space-y-2">
                                    <div className="flex justify-between">
                                        <span>Vintage Cardigan</span>
                                        <span>⭐ 4.5</span>
                                    </div>
                                    <div className="flex justify-between font-bold">
                                        <span>$350</span>
                                        <span className="text-xs text-gray-400">(15)</span>
                                    </div>
                                    <p className="text-xs text-gray-400">5 days • Jakarta Barat</p>
                                </div>
                                <button className="h-10 bg-[#388186] text-white text-sm hover:brightness-110">
                                    Wishlist
                                </button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10"
                >
                    <IoMdArrowForward size={26} />
                </button>
            </div>
        </section>
    );
};

export default Recommend;
