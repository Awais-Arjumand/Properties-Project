"use client";
import { useEffect, useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuBed, LuToilet } from "react-icons/lu";
import { TbRulerMeasure2 } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa6";
import { IoIosCall, IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

async function getParams() {
  return { id: "" };
}

const MapComponent = dynamic(() => import("../../components/MapComponent"), {
  ssr: false,
});

export default function PropertyDetail({ params: paramsPromise }) {
  const [property, setProperty] = useState(null);
  const [similarProperties, setSimilarProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDescription, setShowDescription] = useState(false);
  const router = useRouter();
  const params = use(paramsPromise || getParams());

  useEffect(() => {
    if (!params.id) return;

    const generateDummyData = (id) => {
      const cityAreasMap = {
        Karachi: ["DHA Phase 6", "Gulshan-e-Iqbal", "North Nazimabad"],
        Lahore: ["DHA Phase 5", "Model Town", "Johar Town"],
        Islamabad: ["G-11", "F-8", "I-8"],
        Rawalpindi: ["Satellite Town", "Chaklala Scheme 3", "Peshawar Road"],
        Peshawar: ["University Road", "Hayatabad Phase 3", "Peshawar Cantt"],
        Faisalabad: ["Peoples Colony", "Madina Town", "Canal Road"],
      };

      const cities = Object.keys(cityAreasMap);
      const index = (id % 15) + 1;
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      const cityAreas = cityAreasMap[randomCity];
      const randomArea =
        cityAreas[Math.floor(Math.random() * cityAreas.length)];
      const BuyOrRent = id % 3 === 0 ? "Rent" : "Buy";

      return {
        id: id,
        src: `/images/HomesBoxesImages/img${index}.png`,
        price: `${(80 + (id % 10)) / 10} Crore`,
        beds: `${3 + (id % 5)}`,
        Bath: `${2 + (id % 4)}`,
        location: `${randomArea}, ${randomCity}`,
        Area: `${5 + (id % 10)}`,
        TotalArea: id % 3 === 0 ? "Kanal" : "Marla",
        description: `Beautiful ${id % 2 === 0 ? "Modern" : "Classic"} House #${id + 1}`,
        BuyOrRent: BuyOrRent,
        city: randomCity,
        area: randomArea,
        fullDescription: [
          "Spacious bedrooms with attached bathrooms",
          "Modern kitchen with built-in appliances",
          "Wide garage and green garden",
          "24/7 security and peaceful surroundings",
          "Nearby schools, parks, and markets",
        ],
      };
    };

    const propertyData = generateDummyData(parseInt(params.id));
    setProperty(propertyData);

    const similarProps = [
      generateDummyData(parseInt(params.id) + 1),
      generateDummyData(parseInt(params.id) + 2),
      generateDummyData(parseInt(params.id) + 3),
    ];
    setSimilarProperties(similarProps);

    setLoading(false);
  }, [params.id]);

  const handleSimilarPropertyClick = (id) => {
    router.push(`/property/${id}`);
    window.scrollTo(0, 0);
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!property) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        Property not found
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/"
          className="flex items-center text-green-600 hover:text-green-800 mb-6"
        >
          <IoIosArrowBack className="mr-2" /> Back to Properties
        </Link>

        {/* Main Property */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96 w-full">
            <Image
              src={property.src}
              alt={property.description}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold text-gray-900">
                    {property.description}
                  </h1>
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      property.BuyOrRent === "Rent"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {property.BuyOrRent}
                  </span>
                </div>

                <p className="text-lg text-gray-600 mt-2">{property.location}</p>

                <div className="mt-6 flex items-center gap-6">
                  <div className="flex items-center">
                    <LuBed className="text-xl mr-2 text-gray-700" />
                    <span className="text-gray-700">{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center">
                    <LuToilet className="text-xl mr-2 text-gray-700" />
                    <span className="text-gray-700">{property.Bath} Baths</span>
                  </div>
                  <div className="flex items-center">
                    <TbRulerMeasure2 className="text-xl mr-2 text-gray-700" />
                    <span className="text-gray-700">
                      {property.Area} {property.TotalArea}
                    </span>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    PKR {property.price}
                  </h2>

                  {/* Expandable Description */}
                  <div className="mt-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      Property Description
                    </h2>
                    <button
                      onClick={() => setShowDescription(!showDescription)}
                      className="text-green-600 cursor-pointer font-medium underline mb-3"
                    >
                      {showDescription ? "Hide Details" : "Show Details"}
                    </button>

                    {showDescription && (
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {property.fullDescription.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>

              {/* Contact Agent Box */}
              <div className="w-full md:w-80 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Contact Agent
                </h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                  />
                  <div className="flex">
                    <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-100 text-gray-600 text-sm rounded-l-md">
                      +92
                    </span>
                    <input
                      type="tel"
                      placeholder="Phone"
                      className="w-full border border-gray-300 rounded-r-md px-3 py-2"
                    />
                  </div>
                  <textarea
                    rows="3"
                    defaultValue="I would like to inquire about your property"
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                  />
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-md px-3 py-2">
                    Send Inquiry
                  </button>
                </form>

                <div className="mt-6 flex justify-between">
                  <button className="p-2 bg-green-100 text-green-600 rounded-full">
                    <FaWhatsapp className="text-xl" />
                  </button>
                  <button className="p-2 bg-green-600 text-white rounded-full">
                    <IoIosCall className="text-xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900">Location</h3>
            <h1 className="text-xl font-semibold text-gray-900">{property.location}</h1>
            <div className="mt-4 h-80 bg-gray-200 rounded-lg flex items-center justify-center">
              <MapComponent
                city={property.city}
                description={property.description}
              />
            </div>
          </div>
        </div>

        {/* Similar Properties */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Similar Properties
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarProperties.map((prop) => (
              <div
                key={prop.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => handleSimilarPropertyClick(prop.id)}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={prop.src}
                    alt={prop.description}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold">{prop.description}</h4>
                  <p className="text-gray-600 mt-1">{prop.location}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-green-600 font-medium">
                      PKR {prop.price}
                    </span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        prop.BuyOrRent === "Rent"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {prop.BuyOrRent}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <LuBed className="mr-1" /> {prop.beds}
                    </span>
                    <span className="flex items-center">
                      <LuToilet className="mr-1" /> {prop.Bath}
                    </span>
                    <span className="flex items-center">
                      <TbRulerMeasure2 className="mr-1" /> {prop.Area}{" "}
                      {prop.TotalArea}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
