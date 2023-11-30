import React from "react";

export const PageLoader: React.FC = () => {
  const loadingImg = "https://cdn.auth0.com/blog/hello-auth0/loader.svg";

  return (
    <div className="flex items-center justify-center h-screen">
      <img
        src={loadingImg}
        alt="Loading..."
        className="animate-spin h-16 w-16"
      />
    </div>
  );
};
