"use client";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function ContactPage() {
    return (
        <>
            <Navbar />

            <section className="bg-[#F2B138]/10 py-20">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                    <p className="text-gray-600">
                        Have questions or feedback? We'd love to hear from you.
                    </p>
                </div>
            </section>

            <main className="max-w-3xl mx-auto px-4 py-16">
                <form className="bg-white border rounded-xl p-8 space-y-6">
                    <div>
                        <label className="block text-sm mb-1">Name</label>
                        <input
                            type="text"
                            className="w-full border rounded-lg h-11 px-4 focus:ring-2 focus:ring-[#388186] outline-none"
                            placeholder="Your name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full border rounded-lg h-11 px-4 focus:ring-2 focus:ring-[#388186] outline-none"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Message</label>
                        <textarea
                            rows="4"
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#388186] outline-none"
                            placeholder="Your message..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#388186] text-white rounded-full py-3 hover:brightness-110 transition"
                    >
                        Send Message
                    </button>
                </form>
            </main>

            <Footer />
        </>
    );
}
