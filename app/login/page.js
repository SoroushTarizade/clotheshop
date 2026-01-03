import Link from "next/link";
import { SlBasketLoaded } from "react-icons/sl";

export default function Page() {
  return (
    <div className="min-h-screen relative flex items-center justify-center bg-[#01727D] overflow-hidden">
      <div className="absolute -top-96 right-1/3 w-[900px] h-[900px] bg-[#B8DB80]/40 rounded-full blur-[140px]" />
      <div className="absolute -bottom-96 left-1/4 w-[900px] h-[900px] bg-[#F2B138]/30 rounded-full blur-[140px]" />

      <div className="relative group">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#F2B138] via-[#B8DB80] to-[#01727D] blur-l opacity-30 group-hover:opacity-90 transition duration-300" />
        <div className="relative w-[380px] rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 p-10">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center shadow-inner">
              <SlBasketLoaded className="text-white w-10 h-10" />
            </div>
          </div>

          <h1 className="text-center text-white text-2xl font-semibold mb-2">
            Welcome Back
          </h1>
          <p className="text-center text-white/60 text-sm mb-8">
            Sign in to continue shopping
          </p>
          <form className="space-y-5">
            <div className="relative">
              <input
                required
                placeholder=" "
                className="peer w-full h-[50px] rounded-xl bg-white/5 border border-white/30 px-4 text-white
                focus:border-[#F2B138] focus:outline-none transition"
              />
              <label
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 text-sm
                peer-placeholder-shown:text-base peer-focus:text-xs
                peer-focus:-top-2 peer-focus:text-[#F2B138]
                peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs
                bg-[#01727D] px-2 transition-all"
              >
                Username
              </label>
            </div>

            <div className="relative">
              <input
                type="password"
                required
                placeholder=" "
                className="peer w-full h-[50px] rounded-xl bg-white/5 border border-white/30 px-4 text-white
                focus:border-[#F2B138] focus:outline-none transition"
              />
              <label
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 text-sm
                peer-placeholder-shown:text-base peer-focus:text-xs
                peer-focus:-top-2 peer-focus:text-[#F2B138]
                peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs
                bg-[#01727D] px-2 transition-all"
              >
                Password
              </label>
            </div>
            <button
              className="relative w-full h-[50px] rounded-xl bg-[#F2B138] text-white font-semibold
              overflow-hidden hover:scale-[1.02] active:scale-95 transition-all"
            >
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] hover:translate-x-[100%] transition duration-700 skew-x-12" />
              Login
            </button>
          </form>
          <div className="mt-6 text-center text-sm text-white/70">
            Back to{" "}
            <Link href="/" className="underline hover:text-white">
              Home
            </Link>
          </div>

        </div>
      </div>
    </div>
    
  );
}
