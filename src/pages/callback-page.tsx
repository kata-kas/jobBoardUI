import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { NavBar } from "../components/navigation/desktop/nav-bar";
import { PageLayout } from "../components/page-layout";

export const CallbackPage: React.FC = () => {
  const { error } = useAuth0();

  const errorContent = (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Error</h1>
      <div className="text-gray-700">
        <p>{error?.message}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow p-8">
        {error ? (
          <PageLayout>
            {errorContent}
          </PageLayout>
        ) : null}
      </div>
    </div>
  );
};
