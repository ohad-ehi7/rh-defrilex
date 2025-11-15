// components/Navbar.tsx
'use client';
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const languageRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Fermer les dropdowns quand on clique ailleurs
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Fermer le dropdown langue
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
      
      // Fermer le menu mobile si on clique à l'extérieur
      if (mobileMenuRef.current && 
          !mobileMenuRef.current.contains(event.target as Node) &&
          !(event.target as Element).closest('button[data-mobile-menu]')) {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Empêcher le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          
          {/* Left Section - Logo et Navigation */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/log.png"
                alt="Company Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            
            {/* Navigation Links Desktop */}
            <div className="hidden md:flex items-center space-x-6">
              <Link 
                href="/" 
                className="relative text-gray-700 px-3 py-2 text-sm font-bold transition-all duration-300 group hover:text-[#0027A8]"
              >
                Home
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#0027A8] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
              <Link 
                href="/jobs" 
                className="relative text-gray-700 px-3 py-2 text-sm font-bold transition-all duration-300 group hover:text-[#0027A8]"
              >
                Find Jobs
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#0027A8] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
              <Link 
                href="/talents" 
                className="relative text-gray-700 px-3 py-2 text-sm font-bold transition-all duration-300 group hover:text-[#0027A8]"
              >
                Find Talents
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#0027A8] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
              <Link 
                href="/blog" 
                className="relative text-gray-700 px-3 py-2 text-sm font-bold transition-all duration-300 group hover:text-[#0027A8]"
              >
                Blogs
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#0027A8] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
              <Link 
                href="/contact" 
                className="relative text-gray-700 px-3 py-2 text-sm font-bold transition-all duration-300 group hover:text-[#0027A8]"
              >
                Contact
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#0027A8] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
            </div>
          </div>

          {/* Right Section - Language, Login, Register */}
          <div className="flex items-center space-x-4">
            {/* Language Selector Desktop */}
            <div className="hidden md:block relative" ref={languageRef}>
              <button 
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 text-gray-700 hover:text-[#0027A8] px-3 py-2 rounded-md text-sm font-bold transition-colors"
              >
                {/* SVG Drapeau Angleterre dans un cercle */}
                <div className="relative w-6 h-6 rounded-full overflow-hidden border border-gray-300 shadow-sm">
                  <svg 
                    className="w-full h-full" 
                    viewBox="0 0 640 480"
                    preserveAspectRatio="xMidYMid slice"
                  >
                    <path fill="#012169" d="M0 0h640v480H0z"/>
                    <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
                    <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
                    <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
                    <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
                  </svg>
                </div>
                <span>English</span>
                <svg 
                  className={`w-4 h-4 transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <button 
                    onClick={() => {
                      setIsLanguageOpen(false);
                      // Changer la langue ici
                    }}
                    className="flex items-center space-x-2 w-full text-left px-4 py-2 text-sm font-bold text-gray-700 hover:bg-[#0027A8]/10 hover:text-[#0027A8] transition-colors"
                  >
                    <div className="relative w-5 h-5 rounded-full overflow-hidden border border-gray-300 shadow-sm">
                      <svg 
                        className="w-full h-full" 
                        viewBox="0 0 640 480"
                        preserveAspectRatio="xMidYMid slice"
                      >
                        <path fill="#012169" d="M0 0h640v480H0z"/>
                        <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
                        <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
                        <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
                        <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
                      </svg>
                    </div>
                    <span>English</span>
                  </button>
                </div>
              )}
            </div>

            {/* Auth Buttons Desktop */}
            <div className="hidden md:flex items-center space-x-3">
              <Link 
                href="/auth/login" 
                className="text-gray-700 hover:text-[#0027A8] px-3 py-2 text-sm font-bold transition-colors duration-300"
              >
                Login
              </Link>
              <Link 
                href="/auth/register" 
                className="text-gray-700 hover:text-[#0027A8] px-3 py-2 text-sm font-bold transition-colors duration-300"
              >
                Register
              </Link>
              <Link 
                href="/post-job" 
                className="bg-[#0027A8] text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-[#0027A8]/90 transition-colors shadow-sm"
              >
                Post Job 
              </Link>
            </div>

            {/* Bouton Menu Mobile */}
            <button 
              data-mobile-menu
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex flex-col space-y-1.5 w-6 h-6 focus:outline-none"
            >
              <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <div 
        ref={mobileMenuRef}
        className={`md:hidden fixed top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-6 py-4 space-y-4">
          {/* Navigation Links Mobile */}
          <Link 
            href="/" 
            className="block text-gray-700 py-2 text-base font-bold hover:text-[#0027A8] transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/jobs" 
            className="block text-gray-700 py-2 text-base font-bold hover:text-[#0027A8] transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Find Jobs
          </Link>
          <Link 
            href="/talents" 
            className="block text-gray-700 py-2 text-base font-bold hover:text-[#0027A8] transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Find Talents
          </Link>
          <Link 
            href="/blog" 
            className="block text-gray-700 py-2 text-base font-bold hover:text-[#0027A8] transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blogs
          </Link>
          <Link 
            href="/contact" 
            className="block text-gray-700 py-2 text-base font-bold hover:text-[#0027A8] transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>

          {/* Separator */}
          <div className="border-t border-gray-200 pt-4">
            {/* Language Selector Mobile */}
            <div className="mb-4">
              <button 
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 text-gray-700 hover:text-[#0027A8] py-2 text-base font-bold transition-colors w-full"
              >
                <div className="relative w-5 h-5 rounded-full overflow-hidden border border-gray-300 shadow-sm">
                  <svg 
                    className="w-full h-full" 
                    viewBox="0 0 640 480"
                    preserveAspectRatio="xMidYMid slice"
                  >
                    <path fill="#012169" d="M0 0h640v480H0z"/>
                    <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
                    <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
                    <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
                    <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
                  </svg>
                </div>
                <span>English</span>
                <svg 
                  className={`w-4 h-4 transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isLanguageOpen && (
                <div className="mt-2 bg-gray-50 rounded-lg p-2">
                  <button 
                    onClick={() => {
                      setIsLanguageOpen(false);
                      // Changer la langue ici
                    }}
                    className="flex items-center space-x-2 w-full text-left px-3 py-2 text-base font-bold text-gray-700 hover:bg-[#0027A8]/10 hover:text-[#0027A8] transition-colors rounded"
                  >
                    <div className="relative w-5 h-5 rounded-full overflow-hidden border border-gray-300 shadow-sm">
                      <svg 
                        className="w-full h-full" 
                        viewBox="0 0 640 480"
                        preserveAspectRatio="xMidYMid slice"
                      >
                        <path fill="#012169" d="M0 0h640v480H0z"/>
                        <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
                        <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
                        <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
                        <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
                      </svg>
                    </div>
                    <span>English</span>
                  </button>
                </div>
              )}
            </div>

            {/* Auth Buttons Mobile */}
            <div className="space-y-3">
              <Link 
                href="/auth/login" 
                className="block text-gray-700 py-2 text-base font-bold hover:text-[#0027A8] transition-colors text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link 
                href="/auth/register" 
                className="block text-gray-700 py-2 text-base font-bold hover:text-[#0027A8] transition-colors text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Register
              </Link>
              <Link 
                href="/post-job" 
                className="block bg-[#0027A8] text-white py-3 rounded-md text-base font-bold hover:bg-[#0027A8]/90 transition-colors text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Post Job
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}