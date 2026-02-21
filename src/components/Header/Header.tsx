// "use client";

// import Link from "next/link";
// import { Home } from "lucide-react";

// const Header = () => {
//     return (
//         <header className="w-full bg-[#F4F4F4] border-b border-gray-200">
//             <div className="max-w-[1440px] mx-auto h-[60px] px-6 flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                     <span className="text-2xl font-semibold text-red-500 tracking-wide">
//                         360
//                     </span>
//                     <span className="text-2xl font-semibold text-red-500">
//                         HOME
//                     </span>
//                 </div>

//                 <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#FF998F]">
//                     <Link href="/" className="text-red-500">
//                         Home
//                     </Link>
//                     <Link href="/properties" className="hover:text-red-500 transition">
//                         Properties
//                     </Link>
//                     <Link href="/blogs" className="hover:text-red-500 transition">
//                         Blogs
//                     </Link>
//                     <Link href="/about" className="hover:text-red-500 transition">
//                         About Us
//                     </Link>
//                     <Link href="/contact" className="hover:text-red-500 transition">
//                         Contact Us
//                     </Link>
//                 </nav>

//                 <div className="flex items-center gap-4">
//                     <div className="hidden md:flex items-center justify-center w-9 h-9 rounded-lg border border-red-200 text-red-500 bg-white">
//                         <Home size={18} />
//                     </div>

//                     <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-5 py-2 rounded-lg transition">
//                         Sign in
//                     </button>
//                 </div>
//             </div>
//         </header>
//     );
// }

// export default Header;


"use client";
import Link from "next/link";
import { Home, Menu, X, User } from "lucide-react";
import { useState } from "react";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="w-full relative">
            <div className="max-w-[1440px] mx-auto h-[70px] px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-0.5">
                    <span className="text-[28px] sm:text-[32px] font-bold text-[#FF5349] tracking-tight">
                        360
                    </span>
                    <span className="text-[28px] sm:text-[32px] font-bold text-[#FF5349] tracking-tight">
                        HOME
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-10 text-[15px] font-medium">
                    <Link
                        href="/"
                        className="text-[#FF5A5F] hover:text-[#FF5A5F] transition-colors"
                    >
                        Home
                    </Link>
                    <Link
                        href="/properties"
                        className="text-[#FF8B8F] hover:text-[#FF5A5F] transition-colors"
                    >
                        Properties
                    </Link>
                    <Link
                        href="/blogs"
                        className="text-[#FF8B8F] hover:text-[#FF5A5F] transition-colors"
                    >
                        Blogs
                    </Link>
                    <Link
                        href="/about"
                        className="text-[#FF8B8F] hover:text-[#FF5A5F] transition-colors"
                    >
                        About Us
                    </Link>
                    <Link
                        href="/contact"
                        className="text-[#FF8B8F] hover:text-[#FF5A5F] transition-colors"
                    >
                        Contact Us
                    </Link>
                </nav>

                {/* Desktop Right Side */}
                <div className="hidden lg:flex items-center gap-4">
                    <button
                        className="flex items-center cursor-pointer justify-center w-10 h-10 rounded-lg border-2 border-[#FFE5E6] text-[#FF5A5F] bg-white hover:bg-[#FFF5F5] transition-colors"
                        aria-label="Home"
                    >
                        <Home size={20} strokeWidth={2.5} />
                    </button>

                    <button className="bg-[#FF5A5F] cursor-pointer hover:bg-[#FF4449] text-white text-[15px] font-semibold px-6 py-2.5 rounded-lg transition-colors shadow-sm flex items-center gap-2">
                        Sign in
                        <User size={18} />
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMobileMenu}
                    className="lg:hidden flex items-center justify-center w-10 h-10 text-[#FF5A5F]"
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-[70px] left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50">
                    <nav className="flex flex-col px-4 py-4 gap-1">
                        <Link
                            href="/"
                            className="text-[#FF5A5F] hover:bg-[#FFF5F5] px-4 py-3 rounded-lg transition-colors font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/properties"
                            className="text-[#FF8B8F] hover:bg-[#FFF5F5] hover:text-[#FF5A5F] px-4 py-3 rounded-lg transition-colors font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Properties
                        </Link>
                        <Link
                            href="/blogs"
                            className="text-[#FF8B8F] hover:bg-[#FFF5F5] hover:text-[#FF5A5F] px-4 py-3 rounded-lg transition-colors font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Blogs
                        </Link>
                        <Link
                            href="/about"
                            className="text-[#FF8B8F] hover:bg-[#FFF5F5] hover:text-[#FF5A5F] px-4 py-3 rounded-lg transition-colors font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About Us
                        </Link>
                        <Link
                            href="/contact"
                            className="text-[#FF8B8F] hover:bg-[#FFF5F5] hover:text-[#FF5A5F] px-4 py-3 rounded-lg transition-colors font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact Us
                        </Link>

                        <div className="flex items-center gap-3 mt-4 px-4">
                            <button
                                className="flex items-center justify-center w-10 h-10 rounded-lg border-2 border-[#FFE5E6] text-[#FF5A5F] bg-white hover:bg-[#FFF5F5] transition-colors"
                                aria-label="Home"
                            >
                                <Home size={20} strokeWidth={2.5} />
                            </button>

                            <button
                                className="flex-1 bg-[#FF5A5F] hover:bg-[#FF4449] text-white text-[15px] font-semibold px-6 py-2.5 rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <User size={18} />
                                Sign in
                            </button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;