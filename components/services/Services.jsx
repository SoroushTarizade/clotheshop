import React from "react";
import { MdHighQuality } from "react-icons/md";
import { PiFediverseLogoThin } from "react-icons/pi";
import { GiReceiveMoney, GiWorld } from "react-icons/gi";

const Services = () => {
    const items = [
        { icon: <GiWorld />, text: "Environmentally Friendly" },
        { icon: <GiReceiveMoney />, text: "Saves Money" },
        { icon: <PiFediverseLogoThin />, text: "Diverse" },
        { icon: <MdHighQuality />, text: "High Quality" },
    ];

    return (
        <section className="max-w-[1082px] mx-auto px-4 py-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {items.map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-3 text-center">
                    <div className="w-16 h-16 bg-[#2E2B2B] rounded-full flex items-center justify-center text-white text-3xl">
                        {item.icon}
                    </div>
                    <p className="text-sm">{item.text}</p>
                </div>
            ))}
        </section>
    );
};

export default Services;
