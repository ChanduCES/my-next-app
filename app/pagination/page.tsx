"use client";
import { Pagination } from "@/components/pagination";
import { useState } from "react";

export const PaginationPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalPages={12}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default PaginationPage;
