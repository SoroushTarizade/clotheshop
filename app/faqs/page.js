"use client";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const faqs = [
    {
        q: "How does the wishlist work?",
        a: "You can add products to your wishlist and access them anytime from your basket."
    },
    {
        q: "Do I need an account to shop?",
        a: "Yes, logging in allows you to save items and manage your cart."
    },
    {
        q: "Are products updated in real-time?",
        a: "Products are fetched live from our API and updated automatically."
    },
    {
        q: "Is the website mobile friendly?",
        a: "Absolutely. The website is fully responsive on all devices."
    }
];

export default function FAQPage() {
    return (
        <>
            <Navbar />

            <section className="bg-gray-100 py-16">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-3xl font-bold mb-10 text-center">
                        Frequently Asked Questions
                    </h1>

                    <div className="space-y-6">
                        {faqs.map((item, i) => (
                            <div
                                key={i}
                                className="bg-white border rounded-lg p-6 hover:shadow-md transition"
                            >
                                <h3 className="font-semibold mb-2">{item.q}</h3>
                                <p className="text-gray-600 text-sm">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
