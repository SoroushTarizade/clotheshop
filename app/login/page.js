"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { IoPersonSharp } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
// import { headers } from "next/headers";

export default function Page() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const router = useRouter();


    const handelLogin = async (e) => {
        e.preventDefault();

        const res = await fetch("https://fakestoreapi.com/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        if (!res.ok) return alert("Login failed");

        const data = await res.json();

        login({
            username,
            token: data.token,
        })

        router.push("/")
    }

    return (
        <>
            <Navbar textColor="text-white" />

            {/* Page Wrapper */}
            <div className="min-h-screen bg-[#01727D] flex items-center justify-center relative overflow-hidden">

                {/* Decorative circles (same vibe as header) */}
                <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#B8DB80]/40" />
                <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#B8DB80]/30" />

                {/* Login Card */}
                <div className="relative z-10 w-full max-w-[420px] bg-[#FDF6F6] rounded-[16px] shadow-xl px-8 py-10">

                    <h1 className="text-2xl font-bold text-[#01727D] text-center mb-2">
                        Welcome Back
                    </h1>

                    <p className="text-sm text-[#5E5873] text-center mb-8">
                        Login to continue shopping
                    </p>

                    <form className="flex flex-col gap-4" onSubmit={handelLogin}>

                        {/* Username */}
                        <div className="relative">
                            <IoPersonSharp className="absolute top-3 left-3 text-[#01727D]" />
                            <input
                                type="text"
                                placeholder="Username"
                                className="w-full h-[44px] pl-10 rounded-[8px] border border-[#D8D6DE] outline-none focus:border-[#01727D]"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <span className="absolute flex items-center right-38 top-[-20px] text-sm text-gray-800">
                                jimmie_k
                            </span>
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <RiLockPasswordFill className="absolute top-3 left-3 text-[#01727D]" />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full h-[44px] pl-10 rounded-[8px] border border-[#D8D6DE] outline-none focus:border-[#01727D]"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="absolute flex items-center right-38 bottom-[-20px] text-sm text-gray-800">
                                klein*#%*
                            </span>
                        </div>

                        {/* Actions */}
                        <button
                            className="mt-4 h-[44px] rounded-[28px] bg-[#F2B138] text-white font-semibold
                         hover:bg-[#e3a72f] transition-colors"
                        >
                            Login
                        </button>

                    </form>

                    <div className="mt-6 text-center text-sm text-[#5E5873]">
                        Don’t have an account?{" "}
                        <Link href="/" className="text-[#01727D] font-semibold hover:underline">
                            Go Home
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
