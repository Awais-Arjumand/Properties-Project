"use client";
import { useState, useEffect } from "react";
import PropertySearchFilter from "./components/PropertySearchFilter/PropertySearchFilter";
import HomeDetails from "./components/HomeDetails/HomeDetails";
import HousesBoxes from "./components/HousesBoxes/HousesBoxes";

const cityAreasMap = {
  Karachi: [
    "DHA Phase 6",
    "Gulshan-e-Iqbal",
    "North Nazimabad",
    "Scheme 33",
    "Korangi",
    "Clifton Block 2",
  ],
  Lahore: [
    "DHA Phase 5",
    "Model Town",
    "Johar Town",
    "Bahria Town",
    "Askari 11",
    "Wapda Town",
  ],
  Islamabad: [
    "G-11",
    "F-8",
    "I-8",
    "E-11",
    "PWD Housing Society",
    "Gulberg Greens",
  ],
  Rawalpindi: [
    "Satellite Town",
    "Chaklala Scheme 3",
    "Peshawar Road",
    "Bahria Town Phase 8",
    "Dhok Kala Khan",
    "Adiala Road",
  ],
  Peshawar: [
    "University Road",
    "Hayatabad Phase 3",
    "Peshawar Cantt",
    "Tehkal Bala",
    "Dalazak Road",
    "Gulbahar",
  ],
  Faisalabad: [
    "Peoples Colony",
    "Madina Town",
    "Canal Road",
    "Jaranwala Road",
    "Satiana Road",
    "Gulberg Faisalabad",
  ],
};

const generateDummyData = () => {
  const cities = Object.keys(cityAreasMap);

  return Array.from({ length: 105 }, (_, i) => {
    const index = (i % 15) + 1;
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    const cityAreas = cityAreasMap[randomCity];
    const randomArea = cityAreas[Math.floor(Math.random() * cityAreas.length)];
    const fullLocation = `${randomArea}, ${randomCity}`;
    const BuyOrRent = i % 3 === 0 ? "Rent" : "Buy";

    return {
      id: i + 1,
      src: `/images/HomesBoxesImages/img${index}.png`,
      price: `${(80 + (i % 10)) / 10} Crore`,
      beds: `${3 + (i % 5)}`,
      Bath: `${2 + (i % 4)}`,
      location: fullLocation,
      Area: `${5 + (i % 10)}`,
      TotalArea: i % 3 === 0 ? "Kanal" : "Marla",
      description: `Beautiful ${i % 2 === 0 ? "Modern" : "Classic"} House #${i + 1} with luxury features and top location.`,
      time: `${5 + (i % 55)}`,
      HoursOrMinutes: i % 2 === 0 ? "Minutes" : "Hours",
      city: randomCity,
      area: randomArea,
      BuyOrRent: BuyOrRent,
    };
  });
};

export default function Home() {
  const [houseData, setHouseData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState(null);

  useEffect(() => {
    const data = generateDummyData();
    setHouseData(data);
    setFilteredData(data);
  }, []);

const handleFilter = (filterValues) => {
  setFilters(filterValues);
  
  const filtered = houseData.filter((property) => {
    // Filter by purpose (Buy/Rent)
    if (filterValues.purpose && 
        property.BuyOrRent.toLowerCase() !== filterValues.purpose.toLowerCase()) {
      return false;
    }
    
    // Filter by city
    if (filterValues.city && 
        property.city.toLowerCase() !== filterValues.city.toLowerCase()) {
      return false;
    }
    
    // Filter by location (area)
    if (filterValues.location && 
        !property.location.toLowerCase().includes(filterValues.location.toLowerCase())) {
      return false;
    }
    
    // Filter by beds
    if (filterValues.beds !== "All") {
      if (filterValues.beds === "5+" && parseInt(property.beds) < 5) {
        return false;
      } else if (filterValues.beds !== "5+" && property.beds !== filterValues.beds) {
        return false;
      }
    }
    
    // Filter by baths
    if (filterValues.baths !== "All") {
      if (filterValues.baths === "5+" && parseInt(property.Bath) < 5) {
        return false;
      } else if (filterValues.baths !== "5+" && property.Bath !== filterValues.baths) {
        return false;
      }
    }
    
    // Filter by area
    if (filterValues.areaMin !== "0" || filterValues.areaMax !== "Any") {
      const propertyArea = parseInt(property.Area);
      const isKanal = property.TotalArea === "Kanal";
      
      // Convert Kanal to Marla for comparison (1 Kanal = 20 Marla)
      const areaInMarla = isKanal ? propertyArea * 20 : propertyArea;
      
      if (filterValues.areaMin !== "0") {
        const minArea = filterValues.areaMin.endsWith("k") 
          ? parseInt(filterValues.areaMin) * 20 
          : parseInt(filterValues.areaMin);
        if (areaInMarla < minArea) return false;
      }
      
      if (filterValues.areaMax !== "Any") {
        const maxArea = filterValues.areaMax.endsWith("k") 
          ? parseInt(filterValues.areaMax) * 20 
          : parseInt(filterValues.areaMax);
        if (areaInMarla > maxArea) return false;
      }
    }
    
    // Filter by keyword
    if (filterValues.keyword) {
      const keyword = filterValues.keyword.toLowerCase();
      if (!property.description.toLowerCase().includes(keyword) &&
          !property.location.toLowerCase().includes(keyword)) {
        return false;
      }
    }
    
    return true;
  });
  
  setFilteredData(filtered);
};

  const clearFilters = () => {
    setFilters(null);
    setFilteredData(houseData);
  };

  return (
    <div className="w-full h-fit border border-black pt-5 pb-10 px-5 flex flex-col gap-y-8">
      <PropertySearchFilter onFilter={handleFilter} />
      <HomeDetails 
        houseData={filters ? filteredData : houseData} 
        filters={filters}
        clearFilters={clearFilters}
      />
      <HousesBoxes houseData={filters ? filteredData : houseData} />
    </div>
  );
}