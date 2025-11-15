// // layout.tsx
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({
//   subsets: ["latin"],
//   display: 'swap',
// });

// export const metadata: Metadata = {
//   title: "Interpreter Platform - Connect Talent with Opportunities",
//   description: "Connecting top interpreter talent with global opportunities on demand",
// };



// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body 
//         className={`${inter.className} antialiased`}
//         suppressHydrationWarning
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
// layout.tsx
'use client';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

// Note: Les métadonnées doivent être déplacées dans un fichier séparé si vous utilisez 'use client'
// export const metadata: Metadata = {
//   title: "Interpreter Platform - Connect Talent with Opportunities",
//   description: "Connecting top interpreter talent with global opportunities on demand",
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    if (pathname !== currentPath) {
      setIsLoading(true);
      setCurrentPath(pathname);
      
      // Simuler le chargement
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      
      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, [pathname, currentPath]);

  return (
    <html lang="en">
      <head>
        <title>DEFRILEX - Connect Talent with Opportunities</title>
        <meta name="description" content="Connecting top interpreter talent with global opportunities on demand" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {isLoading && <Loading />}
        <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}>
          {children}
        </div>
      </body>
    </html>
  );
}

