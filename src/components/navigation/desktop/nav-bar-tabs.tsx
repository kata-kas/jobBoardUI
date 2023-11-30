import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { NavBarTab } from "./nav-bar-tab";

export const NavBarTabs: React.FC = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="flex gap-2">
      <NavBarTab path="/profile" label="Profile" />
      {isAuthenticated && (
        // These are not the droids you are looking for
        <></>
      )}
    </div>
  );
};
