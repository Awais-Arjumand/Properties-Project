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

const cities = Object.keys(cityAreasMap);

export const HomeBoxesDetailsData = Array.from({ length: 105 }, (_, i) => {
  const index = (i % 15) + 1;
  const randomCity = cities[Math.floor(Math.random() * cities.length)];
  const cityAreas = cityAreasMap[randomCity];
  const randomArea = cityAreas[Math.floor(Math.random() * cityAreas.length)];
  const fullLocation = `${randomArea}, ${randomCity}`;

  return {
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
  };
});
