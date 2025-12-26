import React from 'react';

const ProductImage = () => {
    return (
        <>
            <div className='w-[1150px] h-[715px] flex items-center justify-around mx-auto mt-30'>
                <div className='w-[605px] h-full flex-col justify-between'>
                    <div className='h-[275px] flex justify-between mb-10'>
                        <img src="./images/category-1.jpg" alt="image-1" className='w-[281px] h-full rounded-[6px] object-cover hover:w-[300px] duration-300'/>
                        <img src="./images/category-2.jpg" alt="image-2" className='w-[281px] h-full rounded-[6px] object-cover hover:w-[300px] duration-300'/>
                    </div>
                    <div className='h-[399px] '>
                        <img src="./images/category-3.jpg" alt="image-3" className='w-[605px] h-full object-cover rounded-[6px] duration-300 hover:h-[420px] '/>
                    </div>
                </div>
                <div className=' flex flex-col gap-10'>
                    <img src="./images/category-4.jpg" alt="category-4" className='w-[438px] h-[424px] rounded-[6px] object-cover hover:w-[457px] duration-300'/>
                    <img src="./images/category-5.jpg" alt="category-5" className='w-[438px] h-[251px] rounded-[6px] object-cover hover:w-[457px] duration-300'/>
                </div>
            </div>   
        </> 
    );
}

export default ProductImage;
