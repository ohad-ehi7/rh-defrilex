// app/template.tsx
'use client';
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    // Si le chemin change, afficher le loading
    if (pathname !== currentPath) {
      setIsLoading(true);
      setCurrentPath(pathname);
      
      // Simuler le chargement pendant 1.5 secondes
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [pathname, currentPath]);

  return (
    <>
      {isLoading && <Loading />}
      <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}>
        {children}
      </div>
    </>
  );
}