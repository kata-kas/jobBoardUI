import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const SignupButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
      authorizationParams: {
        prompt: "login",
        screen_hint: "signup",
      },
    });
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 m-2 rounded"
      onClick={handleSignUp}
    >
      Sign Up
    </button>
  );
};
