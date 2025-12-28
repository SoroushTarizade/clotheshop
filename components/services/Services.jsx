import React from 'react';
// import { MdHighQuality } from "react-icons/md";
import { MdHighQuality } from "react-icons/md";
import { PiFediverseLogoThin } from "react-icons/pi";
import { GiReceiveMoney } from "react-icons/gi";
import { GiWorld } from "react-icons/gi";
const Services = () => {
    const style = { color: "white", }
    return (
        <>
            <div className='w-[1082px] h-[185px] flex items-center mx-auto mt-25'>
                <div className='w-[711px] h-[152px] flex justify-between items-center mx-auto'>
                    <div className='flex flex-col gap-3'>
                        <div className='w-[135px] h-[65px] '>
                            <div className='w-[65px] h-[65px] bg-[#2E2B2B] rounded-full relative mx-auto'>
                            <GiWorld style={style} className='w-[43px] h-[43px] absolute felx top-3 left-2.5' />
                            </div>
                        </div>
                        <div className='mx-auto  text-center'>Environmentally Friendly</div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='w-[135px] h-[65px] '>
                            <div className='w-[65px] h-[65px] bg-[#2E2B2B] rounded-full relative mx-auto'>
                            <GiReceiveMoney style={style} className='w-[43px] h-[43px] absolute felx top-3 left-2.5' />
                            </div>
                        </div>
                        <div className='mx-auto text-center'>Saves Money</div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='w-[135px] h-[65px] '>
                            <div className='w-[65px] h-[65px] bg-[#2E2B2B] rounded-full relative mx-auto'>
                            <PiFediverseLogoThin style={style} className='w-[43px] h-[43px] absolute felx top-3 left-2.5' />
                            </div>
                        </div>
                        <div className='mx-auto text-center'>Diverse</div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='w-[135px] h-[65px] '>
                            <div className='w-[65px] h-[65px] bg-[#2E2B2B] rounded-full relative mx-auto'>
                            <MdHighQuality style={style} className='w-[43px] h-[43px] absolute felx top-3 left-2.5' />
                            </div>
                        </div>
                        <div className='mx-auto text-center'>High Quality</div>
                    </div>
                </div>
            </div>   
        </>
    );
}

export default Services;
