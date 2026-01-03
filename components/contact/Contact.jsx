import React from 'react';

const Contact = () => {
    return (
        <>
            <div className='w-[1540px] h-[220px] bg-[#01727D] mx-auto'>
                <div className='w-[1082px] mx-auto flex items-center justify-between'>
                    <div className='w-[704]'>
                        <div className='pt-6'>
                            <h3 className='text-[38px] font-bold text-white '>Join Us</h3>
                        </div>
                        <div className='w-[704px] text-white text-[18px] pt-5'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                    </div>
                    <div className='flex gap-12 items-center text-white'>
                        <button className='w-[102px] h-[38px] bg-[#F2B138] rounded-[24px] duration-300 hover:font-bold cursor-pointer'>
                            Join us
                        </button>
                        <button className='w-[132px] h-[38px] border-[1px] border-white rounded-[24px] duration-300 hover:font-bold cursor-pointer'>
                            Contact Us 
                        </button>
                    </div>
                </div>
            </div>   
        </>
    );
}

export default Contact;
