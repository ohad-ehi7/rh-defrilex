// src/app/auth/register/page.tsx
'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Register() {
    const [selectedType, setSelectedType] = useState("vendor");

    return (
        <div className="min-h-screen flex bg-white">
            {/* Colonne de gauche - Message de bienvenue (50%) avec couleur #001454 */}
            <div className="hidden lg:flex lg:w-1/2 bg-[#001454] items-center justify-center p-8 lg:p-12">
                <div className="text-white text-center max-w-md">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">Welcome to DEFRILEX</h2>
                    <p className="text-lg lg:text-xl text-blue-100 leading-relaxed">
                        Connecting Top Interpreter Talent with Global Opportunities
                    </p>
                </div>
            </div>

            {/* Colonne de droite - Formulaire (50%) avec fond blanc */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-white overflow-y-auto">
                <div className="w-full max-w-md py-4">
                    {/* Header avec Logo */}
                    <div className="text-center mb-6 lg:mb-8">
                        {/* Logo centré */}
                        <div className="flex justify-center mb-4 lg:mb-6">
                            <Image
                                src="/logo.png"
                                alt="Company Logo"
                                width={160}
                                height={50}
                                className="h-10 lg:h-12 w-auto"
                            />
                        </div>

                        {/* Register Options */}
                        <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
                            {/* Interpreter et Client sur la même ligne */}
                            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 w-full">
                                {/* Register as Interpreter */}
                                <div 
                                    className={`flex-1 border-2 rounded-lg p-3 lg:p-4 transition-colors cursor-pointer ${
                                        selectedType === "interpreter" 
                                        ? "border-[#001454] bg-[#001454]/10" 
                                        : "border-gray-300 hover:border-[#001454] hover:bg-[#001454]/10"
                                    }`}
                                    onClick={() => setSelectedType("interpreter")}
                                >
                                    <div className="flex items-center justify-center space-x-2">
                                        <input
                                            type="radio"
                                            name="registerType"
                                            id="interpreter"
                                            checked={selectedType === "interpreter"}
                                            onChange={() => setSelectedType("interpreter")}
                                            className="w-4 h-4 text-[#001454] border border-gray-400 rounded-full focus:ring-2 focus:ring-[#001454] focus:border-[#001454]"
                                        />
                                        <label htmlFor="interpreter" className="text-sm font-bold text-gray-900 cursor-pointer">
                                            Register as Interpreter
                                        </label>
                                    </div>
                                </div>

                                {/* Register as Client */}
                                <div 
                                    className={`flex-1 border-2 rounded-lg p-3 lg:p-4 transition-colors cursor-pointer ${
                                        selectedType === "client" 
                                        ? "border-[#001454] bg-[#001454]/10" 
                                        : "border-gray-300 hover:border-[#001454] hover:bg-[#001454]/10"
                                    }`}
                                    onClick={() => setSelectedType("client")}
                                >
                                    <div className="flex items-center justify-center space-x-2">
                                        <input
                                            type="radio"
                                            name="registerType"
                                            id="client"
                                            checked={selectedType === "client"}
                                            onChange={() => setSelectedType("client")}
                                            className="w-4 h-4 text-[#001454] border border-gray-400 rounded-full focus:ring-2 focus:ring-[#001454] focus:border-[#001454]"
                                        />
                                        <label htmlFor="client" className="text-sm font-bold text-gray-900 cursor-pointer">
                                            Register as Client
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Vendor - moitié de la largeur, centré */}
                            <div className="flex justify-center">
                                <div 
                                    className={`w-1/2 border-2 rounded-lg p-3 lg:p-4 bg-white transition-colors cursor-pointer ${
                                        selectedType === "vendor" 
                                        ? "border-[#001454] bg-[#001454]/10" 
                                        : "border-gray-300 hover:border-[#001454] hover:bg-[#001454]/10"
                                    }`}
                                    onClick={() => setSelectedType("vendor")}
                                >
                                    <div className="flex items-center justify-center space-x-2">
                                        <input
                                            type="radio"
                                            name="registerType"
                                            id="vendor"
                                            checked={selectedType === "vendor"}
                                            onChange={() => setSelectedType("vendor")}
                                            className="w-4 h-4 text-[#001454] border border-gray-400 rounded-full focus:ring-2 focus:ring-[#001454] focus:border-[#001454]"
                                        />
                                        <label htmlFor="vendor" className="text-sm font-bold text-gray-900 cursor-pointer">
                                            Register as Vendor
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mb-6 lg:mb-8">
                            <h2 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">Welcome to Defrilex</h2>
                            <p className="text-gray-900 text-xl lg:text-2xl font-black">Register Account</p>
                        </div>
                    </div>

                    {/* Social Register - PREND TOUTE LA LARGEUR */}
                    <div className="w-full mb-4 lg:mb-6">
                        <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0 w-full">
                            <button className="flex items-center justify-center space-x-2 border border-gray-300 rounded-lg px-3 py-2 lg:px-4 lg:py-3 hover:border-[#001454] hover:bg-gray-50 transition-colors shadow-sm flex-1 w-full">
                                <svg className="w-4 h-4 lg:w-5 lg:h-5 text-[#001454]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                                <span className="text-xs lg:text-sm text-gray-900 font-bold">Facebook</span>
                            </button>

                            <button className="flex items-center justify-center space-x-2 border border-gray-300 rounded-lg px-3 py-2 lg:px-4 lg:py-3 hover:border-red-500 hover:bg-gray-50 transition-colors shadow-sm flex-1 w-full">
                                <svg className="w-4 h-4 lg:w-5 lg:h-5" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                                <span className="text-xs lg:text-sm text-gray-900 font-bold">Google</span>
                            </button>

                            <button className="flex items-center justify-center space-x-2 border border-gray-300 rounded-lg px-3 py-2 lg:px-4 lg:py-3 hover:border-[#001454] hover:bg-gray-50 transition-colors shadow-sm flex-1 w-full">
                                <svg className="w-4 h-4 lg:w-5 lg:h-5 text-[#001454]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                                <span className="text-xs lg:text-sm text-gray-900 font-bold">LinkedIn</span>
                            </button>
                        </div>
                    </div>

                    {/* Ligne séparatrice avec "or" */}
                    <div className="relative flex items-center mb-6 lg:mb-8 w-full">
                        <div className="flex-grow border-t border-gray-300 w-full"></div>
                        <span className="flex-shrink mx-3 lg:mx-4 text-gray-600 font-bold text-xs lg:text-sm">or</span>
                        <div className="flex-grow border-t border-gray-300 w-full"></div>
                    </div>

                    {/* Register Form */}
                    <form className="space-y-4 lg:space-y-6 w-full">
                        {/* First Name et Last Name sur la même ligne */}
                        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 w-full">
                            {/* First Name Field */}
                            <div className="flex-1">
                                <label className="block text-sm font-bold text-gray-900 mb-2 lg:mb-3 w-full">
                                    First Name *
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 lg:px-4 py-2 lg:py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001454] focus:border-[#001454] outline-none transition-colors bg-white text-gray-900 text-sm placeholder-gray-500"
                                    placeholder="Enter your first name"
                                />
                            </div>

                            {/* Last Name Field */}
                            <div className="flex-1">
                                <label className="block text-sm font-bold text-gray-900 mb-2 lg:mb-3 w-full">
                                    Last Name *
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 lg:px-4 py-2 lg:py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001454] focus:border-[#001454] outline-none transition-colors bg-white text-gray-900 text-sm placeholder-gray-500"
                                    placeholder="Enter your last name"
                                />
                            </div>
                        </div>

                        {/* Email Address Field */}
                        <div className="w-full">
                            <label className="block text-sm font-bold text-gray-900 mb-2 lg:mb-3 w-full">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                className="w-full px-3 lg:px-4 py-2 lg:py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001454] focus:border-[#001454] outline-none transition-colors bg-white text-gray-900 text-sm placeholder-gray-500"
                                placeholder="Enter your email address"
                            />
                        </div>

                        {/* Password Field */}
                        <div className="w-full">
                            <label className="block text-sm font-bold text-gray-900 mb-2 lg:mb-3 w-full">
                                Password *
                            </label>
                            <input
                                type="password"
                                className="w-full px-3 lg:px-4 py-2 lg:py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001454] focus:border-[#001454] outline-none transition-colors bg-white text-gray-900 text-sm placeholder-gray-500"
                                placeholder="Enter your password"
                            />
                        </div>

                        {/* Confirm Password Field */}
                        <div className="w-full">
                            <label className="block text-sm font-bold text-gray-900 mb-2 lg:mb-3 w-full">
                                Confirm Password *
                            </label>
                            <input
                                type="password"
                                className="w-full px-3 lg:px-4 py-2 lg:py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001454] focus:border-[#001454] outline-none transition-colors bg-white text-gray-900 text-sm placeholder-gray-500"
                                placeholder="Confirm your password"
                            />
                        </div>

                        {/* Privacy Policy Checkbox */}
                        <div className="flex items-start mb-4 lg:mb-6 w-full">
                            <input
                                type="checkbox"
                                id="privacy"
                                className="w-4 h-4 text-[#001454] border-2 border-gray-300 rounded focus:ring-2 focus:ring-[#001454] focus:border-[#001454] mt-1 flex-shrink-0"
                            />
                            <label htmlFor="privacy" className="ml-2 text-xs lg:text-sm text-gray-900 font-bold">
                                I agree with{" "}
                                <Link href="/privacy-policy" className="text-[#001454] hover:text-[#001454]/80 transition-colors font-bold">
                                    Privacy Policy
                                </Link>
                                ,{" "}
                                <Link href="/terms" className="text-[#001454] hover:text-[#001454]/80 transition-colors font-bold">
                                    Terms of Service
                                </Link>
                                ,{" "}
                                <Link href="/bid-policy" className="text-[#001454] hover:text-[#001454]/80 transition-colors font-bold">
                                    Bid Policy
                                </Link>
                                {" "}*
                            </label>
                        </div>

                        {/* Ligne séparatrice */}
                        <div className="border-t border-gray-300 mb-4 lg:mb-6 w-full"></div>

                        {/* Register Button avec couleur #001454 */}
                        <button
                            type="submit"
                            className="w-full bg-[#001454] text-white py-3 lg:py-4 px-4 rounded-lg font-bold text-base lg:text-lg hover:bg-[#001454]/90 focus:ring-2 focus:ring-[#001454] focus:ring-offset-2 transition-colors shadow-md hover:shadow-lg"
                        >
                            Register Account
                        </button>
                    </form>

                    {/* Login Link */}
                    <div className="mt-6 lg:mt-8 text-center w-full">
                        <p className="text-gray-900 font-bold text-xs lg:text-sm w-full">
                            Already have an account?{" "}
                            <Link
                                href="/auth/login"
                                className="text-[#001454] font-bold hover:text-[#001454]/80 transition-colors"
                            >
                                Login Account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}