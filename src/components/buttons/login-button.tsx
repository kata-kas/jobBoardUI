import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const LoginButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
      authorizationParams: {
        prompt: "login",
      },
    });
  };

  return (
    <button
      className="text-white py-2 px-4 m-2 rounded"
      onClick={handleLogin}
    >
      Log In
    </button>
  );
};
