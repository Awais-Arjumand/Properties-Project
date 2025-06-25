"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Select = dynamic(() => import("react-select"), {
  ssr: false,
  loading: () => (
    <div className="h-10 w-full bg-gray-200 rounded-md animate-pulse" />
  ),
});

const PropertySearchFilter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    purpose: "Buy",
    city: "karachi",
    location: "",
    propertyType: "Homes",
    areaMin: "0",
    areaMax: "Any",
    priceMin: "0",
    priceMax: "Any",
    beds: "All",
    baths: "All",
    keyword: "",
    moreOptions: [],
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const purposeOptions = [
    { value: "buy", label: "Buy" },
    { value: "rent", label: "Rent" },
  ];

  const cityOptions = [
    { value: "karachi", label: "Karachi" },
    { value: "lahore", label: "Lahore" },
    { value: "islamabad", label: "Islamabad" },
    { value: "rawalpindi", label: "Rawalpindi" },
    { value: "peshawar", label: "Peshawar" },
    { value: "faisalabad", label: "Faisalabad" },
  ];

  const cityLocationMap = {
    karachi: [
      { value: "dha phase 6", label: "DHA Phase 6" },
      { value: "gulshan-e-iqbal", label: "Gulshan-e-Iqbal" },
      { value: "north nazimabad", label: "North Nazimabad" },
      { value: "scheme 33", label: "Scheme 33" },
      { value: "korangi", label: "Korangi" },
      { value: "clifton block 2", label: "Clifton Block 2" },
    ],
    lahore: [
      { value: "dha phase 5", label: "DHA Phase 5" },
      { value: "model town", label: "Model Town" },
      { value: "johar town", label: "Johar Town" },
      { value: "bahria town", label: "Bahria Town" },
      { value: "askari 11", label: "Askari 11" },
      { value: "wapda town", label: "Wapda Town" },
    ],
    islamabad: [
      { value: "g-11", label: "G-11" },
      { value: "f-8", label: "F-8" },
      { value: "i-8", label: "I-8" },
      { value: "e-11", label: "E-11" },
      { value: "pwd housing society", label: "PWD Housing Society" },
      { value: "gulberg greens", label: "Gulberg Greens" },
    ],
    rawalpindi: [
      { value: "satellite town", label: "Satellite Town" },
      { value: "chaklala scheme 3", label: "Chaklala Scheme 3" },
      { value: "peshawar road", label: "Peshawar Road" },
      { value: "bahria town phase 8", label: "Bahria Town Phase 8" },
      { value: "dhok kala khan", label: "Dhok Kala Khan" },
      { value: "adiala road", label: "Adiala Road" },
    ],
    peshawar: [
      { value: "university road", label: "University Road" },
      { value: "hayatabad phase 3", label: "Hayatabad Phase 3" },
      { value: "peshawar cantt", label: "Peshawar Cantt" },
      { value: "tehkal bala", label: "Tehkal Bala" },
      { value: "dalazak road", label: "Dalazak Road" },
      { value: "gulbahar", label: "Gulbahar" },
    ],
    faisalabad: [
      { value: "peoples colony", label: "Peoples Colony" },
      { value: "madina town", label: "Madina Town" },
      { value: "canal road", label: "Canal Road" },
      { value: "jaranwala road", label: "Jaranwala Road" },
      { value: "satiana road", label: "Satiana Road" },
      { value: "gulberg faisalabad", label: "Gulberg Faisalabad" },
    ],
  };

  const propertyTypeOptions = [
    { value: "homes", label: "Homes" },
    { value: "apartments", label: "Apartments" },
    { value: "flats", label: "Flats" },
    { value: "villas", label: "Villas" },
    { value: "plots", label: "Plots" },
    { value: "commercial", label: "Commercial" },
  ];

  const bedsOptions = [
    { value: "all", label: "All" },
    { value: "1", label: "1 Bed" },
    { value: "2", label: "2 Beds" },
    { value: "3", label: "3 Beds" },
    { value: "4", label: "4 Beds" },
    { value: "5+", label: "5+ Beds" },
  ];

  const bathsOptions = [
    { value: "all", label: "All" },
    { value: "1", label: "1 Bath" },
    { value: "2", label: "2 Baths" },
    { value: "3", label: "3 Baths" },
    { value: "4", label: "4 Baths" },
    { value: "5+", label: "5+ Baths" },
  ];

  const areaOptions = [
    { value: "any", label: "Any" },

    // Marla options (1 to 14)
    { value: "1", label: "1 Marla" },
    { value: "2", label: "2 Marla" },
    { value: "3", label: "3 Marla" },
    { value: "4", label: "4 Marla" },
    { value: "5", label: "5 Marla" },
    { value: "6", label: "6 Marla" },
    { value: "7", label: "7 Marla" },
    { value: "8", label: "8 Marla" },
    { value: "9", label: "9 Marla" },
    { value: "10", label: "10 Marla" },
    { value: "11", label: "11 Marla" },
    { value: "12", label: "12 Marla" },
    { value: "13", label: "13 Marla" },
    { value: "14", label: "14 Marla" },

    // Kanal options (1 to 16)
    { value: "1k", label: "1 Kanal" },
    { value: "2k", label: "2 Kanal" },
    { value: "3k", label: "3 Kanal" },
    { value: "4k", label: "4 Kanal" },
    { value: "5k", label: "5 Kanal" },
    { value: "6k", label: "6 Kanal" },
    { value: "7k", label: "7 Kanal" },
    { value: "8k", label: "8 Kanal" },
    { value: "9k", label: "9 Kanal" },
    { value: "10k", label: "10 Kanal" },
    { value: "11k", label: "11 Kanal" },
    { value: "12k", label: "12 Kanal" },
    { value: "13k", label: "13 Kanal" },
    { value: "14k", label: "14 Kanal" },
    { value: "15k", label: "15 Kanal" },
    { value: "16k", label: "16 Kanal" },
  ];

  const MinpriceOptions = [
    { value: "Min", label: "Min", isDisabled: true },
    { value: "0", label: "0" },
    { value: "500000", label: "500,000" },
    { value: "1000000", label: "1,000,000" },
    { value: "2000000", label: "2,000,000" },
    { value: "5000000", label: "5,000,000" },
    { value: "10000000", label: "10,000,000" },
    { value: "any", label: "Any" },
  ];

  const MaxpriceOptions = [
    { value: "Max", label: "Max ", isDisabled: true },
    { value: "0", label: "0" },
    { value: "500000", label: "500,000" },
    { value: "1000000", label: "1,000,000" },
    { value: "2000000", label: "2,000,000" },
    { value: "5000000", label: "5,000,000" },
    { value: "10000000", label: "10,000,000" },
    { value: "any", label: "Any" },
  ];

  const moreOptions = [
    { value: "furnished", label: "Furnished" },
    { value: "parking", label: "Parking" },
    { value: "garden", label: "Garden" },
    { value: "pool", label: "Swimming Pool" },
    { value: "security", label: "Security" },
    { value: "gym", label: "Gym" },
  ];

  const handleChange = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));

    // Reset location when city changes
    if (name === "city") {
      setFilters((prev) => ({ ...prev, location: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filters);
  };

  const selectedCity = filters.city.toLowerCase();
  const locationOptions = cityLocationMap[selectedCity] || [];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      minHeight: "40px",
      borderRadius: "4px",
      border: "1px solid #e2e8f0",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#cbd5e0",
        cursor: "pointer",
      },
    }),
    indicatorSeparator: () => ({ display: "none" }),
    dropdownIndicator: (provided) => ({ ...provided, padding: "4px" }),
    placeholder: (provided) => ({
      ...provided,
      color: "#718096",
      fontSize: "0.875rem",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#f0f9ff" : "white",
      color: state.isSelected ? "#0c4a6e" : "#4a5568",
      "&:hover": {
        backgroundColor: "#f0f9ff",
        color: "#0c4a6e",
      },
    }),
  };

  if (!isClient) return <div className="text-white">Loading...</div>;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 bg-[#121212] rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Purpose */}
          <div>
            <label className="text-sm text-white">Purpose</label>
            <Select
              options={purposeOptions}
              value={purposeOptions.find(
                (opt) => opt.value === filters.purpose.toLowerCase()
              )}
              onChange={(selected) => handleChange("purpose", selected.value)}
              styles={customStyles}
              isSearchable={false}
            />
          </div>

          {/* City */}
          <div>
            <label className="text-sm text-white">City</label>
            <Select
              options={cityOptions}
              value={cityOptions.find(
                (opt) => opt.value === filters.city.toLowerCase()
              )}
              onChange={(selected) => handleChange("city", selected.value)}
              styles={customStyles}
            />
          </div>

          {/* Location */}
          <div>
            <label className="text-sm text-white">Location</label>
            <Select
              options={locationOptions}
              value={locationOptions.find(
                (opt) => opt.value === filters.location
              )}
              onChange={(selected) => handleChange("location", selected.value)}
              styles={customStyles}
              placeholder="Select location"
              isDisabled={!locationOptions.length}
            />
          </div>

          {/* Property Type */}
          <div>
            <label className="text-sm text-white">Property Type</label>
            <Select
              options={propertyTypeOptions}
              value={propertyTypeOptions.find(
                (opt) => opt.value === filters.propertyType.toLowerCase()
              )}
              onChange={(selected) =>
                handleChange("propertyType", selected.value)
              }
              styles={customStyles}
            />
          </div>

          {/* Area */}
          <div>
            <label className="text-sm text-white">Area (Marla)</label>
            <div className="grid grid-cols-2 gap-2">
              <Select
                options={areaOptions}
                value={areaOptions.find(
                  (opt) => opt.value === filters.areaMin.toLowerCase()
                )}
                onChange={(selected) => handleChange("areaMin", selected.value)}
                styles={customStyles}
              />
              <Select
                options={areaOptions}
                value={areaOptions.find(
                  (opt) => opt.value === filters.areaMax.toLowerCase()
                )}
                onChange={(selected) => handleChange("areaMax", selected.value)}
                styles={customStyles}
                placeholder="Max"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Price */}
          <div>
            <label className="text-sm text-white">Price (PKR)</label>
            <div className="grid grid-cols-2 gap-2">
              {/* Min Price */}
              {/* Min Price */}
              <Select
                options={MinpriceOptions.map((opt) => ({
                  ...opt,
                  isDisabled:
                    opt.value === "Min" ||
                    (filters.priceMax !== "any" &&
                      opt.value !== "any" &&
                      parseInt(opt.value) >= parseInt(filters.priceMax)),
                }))}
                value={MinpriceOptions.find(
                  (opt) =>
                    opt.value.toLowerCase() === filters.priceMin.toLowerCase()
                )}
                onChange={(selected) =>
                  handleChange("priceMin", selected.value)
                }
                styles={customStyles}
                placeholder="Min"
              />

              {/* Max Price */}
              <Select
                options={MaxpriceOptions.map((opt) => ({
                  ...opt,
                  isDisabled:
                    opt.value === "Max" ||
                    (filters.priceMin !== "0" &&
                      opt.value !== "any" &&
                      parseInt(opt.value) <= parseInt(filters.priceMin)),
                }))}
                value={MaxpriceOptions.find(
                  (opt) =>
                    opt.value.toLowerCase() === filters.priceMax.toLowerCase()
                )}
                onChange={(selected) =>
                  handleChange("priceMax", selected.value)
                }
                styles={customStyles}
                placeholder="Max"
              />
            </div>
          </div>

          {/* Beds */}
          <div>
            <label className="text-sm text-white">Beds</label>
            <Select
              options={bedsOptions}
              value={bedsOptions.find(
                (opt) => opt.value === filters.beds.toLowerCase()
              )}
              onChange={(selected) => handleChange("beds", selected.value)}
              styles={customStyles}
              isSearchable={false}
            />
          </div>

          {/* Baths */}
          <div>
            <label className="text-sm text-white">Baths</label>
            <Select
              options={bathsOptions}
              value={bathsOptions.find(
                (opt) => opt.value === filters.baths.toLowerCase()
              )}
              onChange={(selected) => handleChange("baths", selected.value)}
              styles={customStyles}
              isSearchable={false}
            />
          </div>

          {/* Keyword */}
          <div>
            <label className="text-sm text-white">Keyword</label>
            <input
              type="text"
              value={filters.keyword}
              onChange={(e) => handleChange("keyword", e.target.value)}
              placeholder="Enter keyword"
              className="w-full px-3 py-2 outline-none bg-white text-black rounded-md"
            />
          </div>

          {/* More Options */}
          <div>
            <label className="text-sm text-white">More Options</label>
            <Select
              options={moreOptions}
              value={filters.moreOptions}
              onChange={(selected) => handleChange("moreOptions", selected)}
              styles={customStyles}
              isMulti
              placeholder="Select options..."
            />
          </div>
        </div>

        {/* Apply Button */}
        <div className="w-full flex justify-end pt-4">
          <button
            type="submit"
            className="px-6 py-2 cursor-pointer bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Apply Filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default PropertySearchFilter;