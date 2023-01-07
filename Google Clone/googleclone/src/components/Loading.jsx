import React from "react";
import { ThreeDots } from "react-loader-spinner";

export const Loading = () => {
  return (
    <div className="flex justify-center">
        <ThreeDots color="#00BFFF" height={80} width={80} />;
    </div>
  )
};
