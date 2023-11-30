import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const LogoutButton: React.FC = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 m-2 rounded"
      onClick={handleLogout}
    >
      Log Out
    </button>
  );
};
