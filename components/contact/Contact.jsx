import React from 'react';

const Contact = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#01727D] to-[#0aa6b5] py-20">
      <div className="absolute -top-24 -left-24 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl"/>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl"/>

      <div className="relative max-w-[1080px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 text-white">
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Join our community</h3>
          <p className="max-w-md text-white/90">Get exclusive deals, early access and special offers.</p>
        </div>

        <div className="flex gap-4">
          <button className="bg-[#F2B138] text-white px-8 py-3 rounded-full hover:scale-105 transition">Join us</button>
          <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-[#01727D] transition">Contact us</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

