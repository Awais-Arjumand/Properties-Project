import React from "react";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import SocialLinks from "./SocialLinks";

const Footer = () => {
    const SocialData = [
        {
            icon: <FaFacebookF />,
            bgColor: "bg-[#3b5b9b]"
        },
        {
            icon: <FaInstagram />,
            bgColor: "bg-pink-500"
        },
        {
            icon: <FaYoutube />,
            bgColor: "bg-red-500"
        },
          {
            icon: <FaTwitter />,
            bgColor: "bg-black"
        },
          {
            icon: <FaLinkedinIn />,
            bgColor: "bg-[#098fed]"
        }
    ]
  return (
    <footer className="bg-[#1f1f1f] text-gray-400 py-8 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Column */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-gray-400">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-green-600 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-green-600 transition"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="hover:text-green-600 transition">
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-green-600 transition">
                  Help & Support
                </Link>
              </li>
              <li>
                <Link
                  href="/advertise"
                  className="hover:text-green-600 transition"
                >
                  Advertise On Zameen
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-green-600 transition">
                  Terms Of Use
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-gray-400">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="hover:text-green-600 transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-green-600 transition">
                  News
                </Link>
              </li>
              <li>
                <Link href="/forum" className="hover:text-green-600 transition">
                  Forum
                </Link>
              </li>
              <li>
                <Link href="/expo" className="hover:text-green-600 transition">
                  Expo
                </Link>
              </li>
              <li>
                <Link
                  href="/agents"
                  className="hover:text-green-600 transition"
                >
                  Real Estate Agents
                </Link>
              </li>
              <li>
                <Link
                  href="/add-property"
                  className="hover:text-green-600 transition"
                >
                  Add Property
                </Link>
              </li>
            </ul>
          </div>

          {/* Head Office Column */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-gray-400">Head Office</h3>
            <address className="not-italic space-y-2">
              <h1 className="flex gap-x-3 ">
                <span className="mt-1">
                  <FaLocationDot />
                </span>{" "}
                Pearl One, 94-B/LMM Alam Road, Gullberg III, Lahore, Pakistan
              </h1>
            </address>
            <address className="not-italic space-y-2">
              <h1 className="flex gap-x-3 ">
                <span className="mt-1">
                  <IoCall />
                </span>{" "}
                0800-ZAMEEN (92633) Monday To Sunday 9AM To 6PM
              </h1>
            </address>
            <address className="not-italic space-y-2">
              <h1 className="flex gap-x-3 ">
                <span className="mt-1">
                  <IoMdMail />
                </span>
                Email Us
              </h1>
            </address>
          </div>

          {/* Roshan Digital Account Column */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-gray-400">
              Roshan Digital Account
            </h3>
            <div className="space-y-5">
              <h1>
                <Image
                  src={"/images/FooterImages/img1.png"}
                  alt="Roshan Digital Account"
                  width={120}
                  height={50}
                />
              </h1>
              <h1 className="font-bold text-lg">Get Connected</h1>
          <div className="w-fit h-fit grid grid-cols-3 gap-3">
            {SocialData.map((item,key)=>(
                <SocialLinks key={key} icon={item.icon} bgColor={item.bgColor} />
            ))}
          </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-400 pt-6 text-center text-sm">
          <p>
            © Copyright 2007 - {new Date().getFullYear()} Zameen.com. All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
