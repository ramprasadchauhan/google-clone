"use client";

import { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log("error", error);
  });
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h1 className="mb-4 text-3xl">Something went wrong!</h1>
      <button className="text-blue-500">Try again</button>
    </div>
  );
};

export default Error;
