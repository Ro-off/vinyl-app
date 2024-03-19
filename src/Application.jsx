import { useState } from "react";
import { NavigationHeader } from "./components/NavigationHeader/NavigationHeader";
import { FilterSection } from "./components/Filter/Filter";
import { Pagination } from "./components/Pagination/Pagination";
import { CardContainer } from "./components/CardContainer/CardContainer";

export const Application = () => {
  const [currentPage, setCurrentPage] = useState(1);
  let itemsOnPage = 12;

  return (
    <>
      <NavigationHeader />
      <FilterSection />
      <CardContainer currentPage={currentPage} itemsOnPage={itemsOnPage} />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
};
