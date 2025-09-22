import React from "react";
import { Navigation } from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa]">
      <Navigation />
      <main className="flex-1 pt-16 md:pt-[4.5rem] min-h-[calc(100vh-8rem)]">
        {children}
      </main>
      <footer className="bg-gray-800 text-white py-8 mt-8 sm:py-6 sm:mt-6">
        <div className="max-w-[1000px] w-full mx-auto px-[var(--container-padding)] text-center">
          <p className="m-0 p-0 w-full max-w-none text-gray-300 text-sm sm:text-xs">
            &copy; 2026 VNIT Nagpur. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
