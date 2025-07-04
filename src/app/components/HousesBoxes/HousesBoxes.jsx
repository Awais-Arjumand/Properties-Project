"use client";
import ReactPaginate from "react-paginate";
import HomeBoxesDetails from "./HomeBoxesDetails";
import { useRef, useState } from "react";

const HousesBoxes = ({ houseData }) => {
  const housesRef = useRef(null);
  const itemsPerPage = 25;

  const [currentPage, setCurrentPage] = useState(0);

  const totalItems = houseData.length;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentItems = houseData.slice(startIndex, endIndex);
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
    housesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      ref={housesRef}
      className="w-full h-fit border border-gray-300 rounded-lg flex flex-col gap-y-8"
    >
      <div className="w-full h-10 border border-gray-300 flex items-center justify-center bg-white px-3">
        <h1 className="flex gap-x-3 items-center font-semibold">
          {startIndex + 1} to {endIndex} of {totalItems} Homes
        </h1>
      </div>

      <div className="w-full h-fit bg-[#f7f8fa] px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5">
        {currentItems.map((item, key) => (
          <HomeBoxesDetails key={key} {...item} />
        ))}
      </div>

      <div className="flex justify-center pb-6">
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
          disabledClassName={"disabled"}
        />
      </div>
    </div>
  );
};
export default HousesBoxes;
