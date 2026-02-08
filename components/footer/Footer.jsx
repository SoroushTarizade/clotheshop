import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {


  return (
    <footer className="bg-[#2E2B2B] text-white">
      <div className="max-w-[1540px] mx-auto px-4 sm:px-6 py-12 sm:py-16 flex flex-col items-center">

        <div className="text-base sm:text-lg font-medium tracking-wide mb-4 sm:mb-6">
          clothe<span className="text-[#F2B138]">-shop</span>
        </div>

        <div className="w-full h-px bg-white/10 mb-6 sm:mb-10" />

        <div className="flex gap-4 sm:gap-6 mb-6 sm:mb-10">
          {[ImFacebook, FaInstagram, RiTwitterXFill, FaLinkedinIn].map(
            (Icon, i) => (
              <button
                key={i}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center
                border border-white/20 text-white/80
                hover:border-[#F2B138] hover:text-[#F2B138]
                transition-colors duration-300"
              >
                <Icon className="w-4 h-4" />
              </button>
            )
          )}
        </div>

        <p className="text-[10px] sm:text-xs text-white/50 tracking-wide text-center">
          © {new Date().getFullYear()} clothe-shop, Inc.
        </p>
      </div>
    </footer>
  );
};


export default Footer;
