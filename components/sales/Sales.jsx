import React from 'react';

const Sales = () => {
    return (
        <>
         <div className='w-[1540px] h-[1172px] flex flex-col bg-green-900 mx-auto mt-25'>
            <div className='h-1/2 w-full flex'>
                <div className='w-1/2 h-full bg-orange-500'>
                    <img src="./images/sales-img1.jpg" alt="" className='w-full h-full object-cover'/>
                </div>
                <div className='w-1/2 h-full bg-[#FDF6F6] relative'>
                <div className='w-[303px] h-full flex  flex-col absolute top-50 right-50 '>
                <div>
                    <h3 className='font-bold text-[36px] w-[282px] h-[35px] mb-5'>
                        Office Sales
                    </h3>
                </div>
                <div>
                    <p className=''>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard.
                    </p>
                </div>
                <div className='mt-5'>
                    <button className='w-[118px] h-[38px] bg-[#F2B138] rounded-[24px] text-white hover:font-bold duration-300'>
                            See More
                    </button>
                </div>
                </div>
                </div>
            </div>
            <div className='bg-red-400 h-1/2 w-full flex'>
                <div className='w-1/2 h-full bg-[#FDF6F6] relative'>
                <div className='w-[303px] h-full flex  flex-col absolute top-50 right-50 '>
                <div>
                    <h3 className='font-bold text-[36px] w-[282px] h-[35px] mb-5 '>
                        Summer is Here
                    </h3>
                </div>
                <div>
                    <p className=''>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard.
                    </p>
                </div>
                <div className='mt-5 w-full relative'>
                    <button className='w-[118px] h-[38px] bg-[#F2B138] rounded-[24px] text-white hover:font-bold duration-300 right-0'>
                            See More
                    </button>
                </div>
                </div>
                </div>
                <div className='w-1/2 h-full '>
                    <img src="./images/sales-img2.jpg" alt="" className='w-full h-full object-cover'/>
                </div>
            </div>
        </div>   
        </>
    );
}

export default Sales;
