import React from "react";
import { PageLayout } from "../components/page-layout";

export const NotFoundPage: React.FC = () => {
  return (
    <PageLayout>
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-500 mb-4">Not Found</h1>
          <p className="text-gray-600">The page you're looking for does not exist.</p>
        </div>
      </div>
    </PageLayout>
  );
};
