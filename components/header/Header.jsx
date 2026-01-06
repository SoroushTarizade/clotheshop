import { IoIosArrowRoundForward } from "react-icons/io";

const Header = () => {
    return (
        <section className="relative  bg-[#FDF6F6]">
            <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 py-20 flex flex-col md:flex-row items-center justify-between gap-10 z-10">

                <div
                    data-aos="fade-right"
                    className="bg-[#01727D] text-white rounded-[24px] p-8 sm:p-10 max-w-lg shadow-xl">
                    <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl mb-6">
                        How to Rent?
                    </h1>

                    <p className="text-sm sm:text-base leading-relaxed text-white/90 mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <button className="group bg-[#F2B138] text-white rounded-full h-[44px] px-7 flex items-center gap-3 text-sm font-medium hover:brightness-110 transition">
                        See More
                        <IoIosArrowRoundForward className="w-5 h-5 group-hover:translate-x-1 transition" />
                    </button>
                </div>
                <div className="flex-shrink-0">
                    <img
                        src="./images/header-img.jpg"
                        alt="header"
                        className="w-64 sm:w-72 md:w-96 h-auto rounded-t-[160px] shadow-2xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default Header;
