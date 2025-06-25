// components/NavBar.jsx
"use client";
import { useState, useEffect } from "react";
import {
  FaSearch,
  FaUserCircle,
  FaPlus,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import Image from "next/image";
import { IoHome } from "react-icons/io5";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toolsItems = [
    "Home Loan Calculator",
    "Area Unit Converter",
    "Land Record Pages",
    "Construction Cost Calculator",
  ];

  const moreItems = ["Forum", "Index", "Trends"];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        toolsOpen && 
        !e.target.closest(".tools-dropdown") &&
        !e.target.closest(".tools-trigger")
      ) {
        setToolsOpen(false);
      }
      if (
        moreOpen && 
        !e.target.closest(".more-dropdown") &&
        !e.target.closest(".more-trigger")
      ) {
        setMoreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [toolsOpen, moreOpen]);

  return (
    <nav className="w-full bg-white shadow-md">


      {/* Bottom Bar - Fixed text formatting */}
      <div className="h-10 hidden md:flex gap-x-4 items-center bg-[#f7f7f7] px-4 lg:px-16 py-7 text-sm text-gray-700 border-b">
        <Image
          src={"/images/NavImages/img1.png"}
          alt="Logo"
          width={200}
          height={40}
          className="w-40 lg:w-52"
        />

        <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
          <ul className="flex items-center gap-2 lg:gap-4">
            <li className="cursor-pointer">BUY ▸</li>
            <li className="text-gray-300">|</li>
            <li className="cursor-pointer">HOMES</li>
            <li className="text-gray-300">|</li>
            <li className="cursor-pointer">PLOTS</li>
            <li className="text-gray-300">|</li>
            <li className="cursor-pointer">COMMERCIAL</li>
            <li className="text-gray-300">|</li>
            <li className="cursor-pointer">RENT</li>
            <li className="text-gray-300">|</li>
            <li className="cursor-pointer">AGENTS</li>
            <li className="text-gray-300">|</li>
            <li className="cursor-pointer">NEW PROJECTS</li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 text-sm">
          <ul className="space-y-3">
            <li className="cursor-pointer py-1">PROPERTIES</li>
            <li className="cursor-pointer py-1">PLOT FINDER</li>
            <li className="cursor-pointer py-1">AREA GUIDES</li>
            <li className="cursor-pointer py-1">BLOG</li>
            <li className="cursor-pointer py-1">MAPS</li>
            
            <li 
              className="cursor-pointer flex items-center justify-between py-1"
              onClick={() => setMobileToolsOpen(!mobileToolsOpen)}
            >
              <span>TOOLS</span>
              {mobileToolsOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
            </li>
            {mobileToolsOpen && (
              <ul className="pl-4 space-y-2">
                {toolsItems.map((item, index) => (
                  <li key={index} className="text-gray-600 cursor-pointer py-1">
                    {item}
                  </li>
                ))}
              </ul>
            )}
            
            <li 
              className="cursor-pointer flex items-center justify-between py-1"
              onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
            >
              <span>MORE</span>
              {mobileMoreOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
            </li>
            {mobileMoreOpen && (
              <ul className="pl-4 space-y-2">
                {moreItems.map((item, index) => (
                  <li key={index} className="text-gray-600 cursor-pointer py-1">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </ul>
          <hr className="my-3" />
          <ul className="space-y-3">
            <li className="cursor-pointer py-1">BUY</li>
            <li className="cursor-pointer py-1">HOMES</li>
            <li className="cursor-pointer py-1">PLOTS</li>
            <li className="cursor-pointer py-1">COMMERCIAL</li>
            <li className="cursor-pointer py-1">RENT</li>
            <li className="cursor-pointer py-1">AGENTS</li>
            <li className="cursor-pointer py-1">NEW PROJECTS</li>
          </ul>
          
          <div className="mt-4 flex flex-col gap-3">
            <div className="flex items-center  rounded px-3 py-2">
              <input
                type="text"
                placeholder="Property ID"
                className="flex-1 outline-none text-xs"
              />
              <FaSearch className="text-gray-500 text-sm" />
            </div>
            <button className="flex items-center justify-center gap-1 bg-green-600 text-white px-4 py-2 rounded text-sm font-bold">
              <FaPlus /> Add Property
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;