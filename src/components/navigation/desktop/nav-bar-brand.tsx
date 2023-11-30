import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarBrand: React.FC = () => {
  return (
    <div className="flex items-center">
      <NavLink to="/">
        <h1>JOB BOARD</h1>
      </NavLink>
    </div>
  );
};
