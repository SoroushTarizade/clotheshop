import React from "react";
const Sales = () => {
    return (
        <section className="max-w-[1440px] mx-auto py-20 grid grid-cols-1 md:grid-cols-2">
            {[
                { title: "Office Sales", img: "sales-img1.jpg" },
                { title: "Summer is Here", img: "sales-img2.jpg" }
            ].map((item, i) => (
                <div key={i} className="relative h-[400px] md:h-[500px]">
                    <img src={`./images/${item.img}`} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-center p-6">
                        <div
                            data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}>
                            <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                            <p className="text-sm max-w-sm mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <button className="bg-[#F2B138] px-6 py-2 rounded-full">See More</button>
                        </div>
                    </div>
                </div>
            ))}

        </section>
    );
};

export default Sales;
