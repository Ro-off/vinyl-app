import { NavigationHeader } from "./components/NavigationHeader/NavigationHeader";
import { Outlet } from "react-router-dom";

export const Application = () => {
  return (
    <>
      <NavigationHeader />
      <Outlet />
    </>
  );
};
