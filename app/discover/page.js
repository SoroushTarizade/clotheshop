"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import PostCard from "@/components/postCard/PostCard";
import { IoSearchOutline } from "react-icons/io5";
import Image from "next/image";

const filters = {
    Categories: ["men's clothing", "women's clothing", "electronics", "jewelery"],
};

const DiscoverPage = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products");
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.error("Failed to fetch products", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const filteredProducts = Array.isArray(products)
        ? products.filter((product) => {
            const matchesSearch = product.title
                .toLowerCase()
                .includes(search.toLowerCase());

            const matchesCategory = activeCategory
                ? product.category === activeCategory
                : true;

            return matchesSearch && matchesCategory;
        })
        : [];

    return (
        <>
            <Navbar />

            {/* Hero */}
            <section className="relative h-60 sm:h-72">
                <Image
                    src="/images/discover-img.jpg"
                    alt="Discover products"
                    fill
                    priority
                    className="object-cover object-[50%_20%]"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-4">
                    <div className="text-white">
                        <h1 className="text-3xl sm:text-4xl font-bold">
                            Discover Products
                        </h1>
                        <div className="w-20 h-1 bg-white mt-2 rounded" />
                    </div>
                </div>
            </section>

            {/* Main */}
            <main className="max-w-7xl mx-auto px-4 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* Sidebar */}
                    <aside className="bg-white border rounded-lg p-5 space-y-8 h-fit">
                        <h3 className="font-semibold text-lg">Filters</h3>

                        <div>
                            <p className="font-medium mb-3">Categories</p>
                            <div className="space-y-2">
                                {filters.Categories.map((cat) => (
                                    <label
                                        key={cat}
                                        className="flex items-center gap-2 text-sm cursor-pointer"
                                    >
                                        <input
                                            type="radio"
                                            name="category"
                                            checked={activeCategory === cat}
                                            onChange={() =>
                                                setActiveCategory(activeCategory === cat ? "" : cat)
                                            }
                                            className="accent-[#388186]"
                                        />
                                        {cat}
                                    </label>
                                ))}

                                {activeCategory && (
                                    <button
                                        onClick={() => setActiveCategory("")}
                                        className="text-xs text-[#388186] mt-2"
                                    >
                                        Clear filter
                                    </button>
                                )}
                            </div>
                        </div>
                    </aside>

                    {/* Products */}
                    <section className="lg:col-span-3">

                        {/* Search */}
                        <div className="relative mb-8">
                            <IoSearchOutline className="absolute left-3 top-3.5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full h-11 pl-10 pr-4 border rounded-lg focus:ring-2 focus:ring-[#388186] outline-none"
                            />
                        </div>

                        {loading && (
                            <p className="text-center text-gray-400">
                                Loading products...
                            </p>
                        )}

                        {!loading && filteredProducts.length === 0 && (
                            <p className="text-center text-gray-400">
                                No products found
                            </p>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                            {filteredProducts.map((product) => (
                                <PostCard
                                    key={product.id}
                                    product={product}
                                    image={product.image}
                                    title={product.title}
                                    price={product.price}
                                    count={product.rating?.count}
                                />
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default DiscoverPage;
