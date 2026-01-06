"use client";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function AboutPage() {
    return (
        <>
            <Navbar />

            <section className="bg-[#388186] text-white py-20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">About ClotheShop</h1>
                    <p className="text-white/90">
                        A modern platform to discover, wishlist and shop fashion products.
                    </p>
                </div>
            </section>

            <main className="max-w-6xl mx-auto px-4 py-16 grid gap-12 md:grid-cols-2">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Our mission is to provide a seamless shopping experience with
                        carefully selected fashion items, modern design and fast access to
                        products users love.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
                    <ul className="space-y-3 text-gray-600">
                        <li>✔ Curated fashion products</li>
                        <li>✔ Clean & modern UI</li>
                        <li>✔ Wishlist & basket system</li>
                        <li>✔ Responsive on all devices</li>
                    </ul>
                </div>
            </main>

            <Footer />
        </>
    );
}
