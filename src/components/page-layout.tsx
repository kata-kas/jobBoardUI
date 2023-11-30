import React from "react";
import { NavBar } from "./navigation/desktop/nav-bar";

interface Props {
  children: JSX.Element;
}

export const PageLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 px-10">{children}</main>
    </div>
  );
};
