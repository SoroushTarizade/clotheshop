"use client";

import { GiRoundStar } from "react-icons/gi";
import { LuClock5 } from "react-icons/lu";
import { PiHouseLineLight } from "react-icons/pi";
import { CiChat1 } from "react-icons/ci";
import { useCart } from "@/context/CartContext";

const PostCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="group bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">

            <div className="overflow-hidden">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-64 w-full object-contain p-6 group-hover:scale-105 transition duration-300"
                />
            </div>

            <div className="p-4 text-sm text-gray-600 space-y-2">
                <div className="flex justify-between">
                    <p className="line-clamp-1">{product.title}</p>
                    <span className="flex items-center gap-1">
                        {product.rating.rate}
                        <GiRoundStar className="text-yellow-400" />
                    </span>
                </div>

                <div className="flex justify-between font-semibold text-black">
                    <span>${product.price}</span>
                    <span className="text-xs">({product.rating.count})</span>
                </div>

                <div className="flex items-center gap-2 text-xs">
                    <LuClock5 /> Fast delivery
                </div>

                <div className="flex items-center gap-2 text-xs">
                    <PiHouseLineLight /> Worldwide
                </div>
            </div>

            <div className="flex border-t">
                <button className="w-12 flex items-center justify-center hover:bg-gray-100 transition">
                    <CiChat1 />
                </button>
                <button
                    onClick={() => addToCart(product)}
                    className="flex-1 bg-[#388186] text-white py-2 hover:bg-[#2f6e72] transition"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default PostCard;
