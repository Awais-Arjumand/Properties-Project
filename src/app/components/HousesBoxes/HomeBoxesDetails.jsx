"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuBed, LuToilet } from "react-icons/lu";
import { TbRulerMeasure2 } from "react-icons/tb";
import { FaRegClock, FaWhatsapp } from "react-icons/fa6";
import { IoIosCall, IoIosMail } from "react-icons/io";
import HousesBoxesButtonIcons from "./HousesBoxesButtonIcons";

const HomeBoxesDetails = ({
  id,
  src,
  price,
  beds,
  Bath,
  location,
  Area,
  TotalArea,
  description,
  time,
  HoursOrMinutes,
  BuyOrRent,
  city,
  area
}) => {
  const HousesBoxesButtonIconsData = [
    {
      icon: <IoIosMail className="text-xl" />,
      label: "",
      textColor: "text-green-500",
      fontWeight: "",
      bgColor: "bg-transparent",
      bgColorHover: "hover:bg-gray-200",
    },
    {
      icon: <FaWhatsapp className="text-xl" />,
      label: "Whatsapp",
      textColor: "text-green-500",
      fontWeight: "font-medium",
      bgColor: "bg-transparent",
      bgColorHover: "hover:bg-gray-200",
    },
    {
      icon: <IoIosCall className="text-xl" />,
      label: "Call",
      textColor: "text-white",
      fontWeight: "font-medium",
      bgColor: "bg-green-500",
      bgColorHover: "hover:bg-green-600",
    },
  ];

  return (
    <Link href={`/property/${id}`} passHref>
      <div className="w-full bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row gap-4 p-4 cursor-pointer hover:shadow-lg transition-shadow duration-300">
        <div className="w-full md:w-1/2">
          <Image
            src={src}
            alt="Home Image"
            width={500}
            height={300}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-y-2">
          <h1 className="text-xl font-semibold flex items-end gap-x-2">
            PKR <span className="text-3xl">{price}</span>
          </h1>
          <span className={`w-fit h-fit px-3 py-1 rounded-lg text-sm font-medium ${
            BuyOrRent === "Rent" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
          }`}>
            {BuyOrRent}
          </span>
          <h1 className="text-sm font-normal">{location}</h1>

          <div className="flex gap-x-3 items-center font-medium flex-wrap">
            <h1 className="text-lg flex gap-x-2 items-center">
              <LuBed /> <span className="text-sm">{beds}</span>
            </h1>
            <h1 className="text-lg flex gap-x-2 items-center">
              <LuToilet /> <span className="text-sm">{Bath}</span>
            </h1>
            <h1 className="text-lg flex gap-x-2 items-center">
              <TbRulerMeasure2 />{" "}
              <span className="text-sm">
                {Area} {TotalArea}
              </span>
            </h1>
          </div>

          <h1 className="text-lg font-medium truncate">{description}</h1>

          <h1 className="text-sm font-normal flex items-center gap-x-2">
            {time} {HoursOrMinutes} Added <FaRegClock className="text-lg" />
          </h1>

          <div className="flex flex-wrap items-center gap-2 mt-2">
            {HousesBoxesButtonIconsData.map((item, key) => (
              <HousesBoxesButtonIcons
                key={key}
                icon={item.icon}
                bgColor={item.bgColor}
                fontWeight={item.fontWeight}
                textColor={item.textColor}
                label={item.label}
                bgColorHover={item.bgColorHover}
              />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeBoxesDetails;