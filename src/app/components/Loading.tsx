// components/Loading.tsx (version barres verticales)
'use client';
import { useEffect, useState } from "react";

export default function Loading() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        
        
        {/* Les 4 barres verticales animées */}
        <div className="flex justify-center items-end space-x-2 h-16 mb-6">
          <div className="w-4 h-4 bg-[#0027A8] rounded-sm animate-wave [animation-delay:-0.4s]"></div>
          <div className="w-4 h-6 bg-[#0027A8] rounded-sm animate-wave [animation-delay:-0.3s]"></div>
          <div className="w-4 h-8 bg-[#0027A8] rounded-sm animate-wave [animation-delay:-0.2s]"></div>
          <div className="w-4 h-10 bg-[#0027A8] rounded-sm animate-wave [animation-delay:-0.1s]"></div>
        </div>

        {/* Texte de chargement */}
        <p className="text-gray-600 font-medium animate-pulse">
          Chargement en cours...
        </p>
      </div>

      <style jsx>{`
        @keyframes wave {
          0%, 40%, 100% {
            transform: scaleY(0.6);
          }
          20% {
            transform: scaleY(1);
          }
        }
        .animate-wave {
          animation: wave 1.2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}