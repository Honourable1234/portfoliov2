import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
// import Footer from "./Footer";

interface GuestLayoutProps {
  children?: React.ReactNode;
}
export default function GuestLayout({ children }: GuestLayoutProps) {
  return (
    <div className="text-white bg-neutralDarker max-w-[98%] mx-auto xl:max-w-[1400px]">
      <Navbar />
      {children ? children : <Outlet />}
      {/* <Footer /> */}
    </div>
  );
}
