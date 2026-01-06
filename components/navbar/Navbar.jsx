"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosSearch } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";
import { SlBasketLoaded } from "react-icons/sl";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
    const pathname = usePathname();
    const { user, logout } = useAuth();
    const { totalItems } = useCart();

    const [mobileOpen, setMobileOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Discover", href: "/discover" },
        { name: "FAQs", href: "/faqs" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/connect" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
            <div className="max-w-[1440px] mx-auto px-4 h-[64px] flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <img src="/images/logo.jpg" className="w-9 h-9 rounded-full" />
                    <span className="font-semibold text-sm">
                        Clothe<span className="text-[#F2B138]">Shop</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex gap-6 text-sm">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`relative transition ${pathname === link.href ? "font-bold" : ""
                                    } after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                after:bg-[#F2B138] after:w-0 hover:after:w-full after:transition-all`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right Actions */}
                <div className="flex items-center gap-4">

                    {/* Search */}
                    <IoIosSearch className="hidden sm:block w-5 h-5 cursor-pointer" />

                    {/* Cart */}
                    <Link href="/basket" className="relative">
                        <SlBasketLoaded className="w-6 h-6" />
                        {totalItems > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                {totalItems}
                            </span>
                        )}
                    </Link>

                    {/* Auth */}
                    {!user ? (
                        <Link
                            href="/login"
                            className="hidden md:flex bg-[#F2B138] text-white px-5 py-1.5 rounded-full text-sm"
                        >
                            Login
                        </Link>
                    ) : (
                        <div className="relative">
                            <button
                                onClick={() => setUserMenuOpen(!userMenuOpen)}
                                className="bg-[#F2B138] text-white px-4 py-1.5 rounded-full text-sm"
                            >
                                {user.username}
                            </button>

                            {userMenuOpen && (
                                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-xl shadow-lg">
                                    <Link
                                        href="/basket"
                                        className="block px-4 py-2 text-sm hover:bg-black/5"
                                        onClick={() => setUserMenuOpen(false)}
                                    >
                                        Basket
                                    </Link>
                                    <button
                                        onClick={logout}
                                        className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden"
                    >
                        <HiMenuAlt3 className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-6 py-5 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="block text-sm"
                            >
                                {link.name}
                            </Link>
                        ))}

                        {!user ? (
                            <Link
                                href="/login"
                                className="block text-center bg-[#F2B138] text-white py-2 rounded-full text-sm"
                            >
                                Login
                            </Link>
                        ) : (
                            <button
                                onClick={logout}
                                className="w-full text-center bg-red-100 text-red-600 py-2 rounded-full text-sm"
                            >
                                Logout
                            </button>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
