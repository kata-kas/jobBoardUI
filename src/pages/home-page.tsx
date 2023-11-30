import React from "react";
import { PageLayout } from "../components/page-layout";

export const HomePage: React.FC = () => (
  <PageLayout>
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-4xl font-extrabold mb-6 text-blue-600">
          Your Dream Job Awaits
        </h1>

        <p className="text-gray-800 mb-6">
          Find the perfect job that matches your skills and passion. Join our
          diverse and talented community today.
        </p>

        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Explore Jobs
        </button>
      </div>
    </div>
  </PageLayout>
);
