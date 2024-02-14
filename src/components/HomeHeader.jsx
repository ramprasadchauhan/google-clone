import Link from "next/link";
import React from "react";
import { TbGridDots } from "react-icons/tb";

const HomeHeader = () => {
  return (
    <header className="flex justify-end p-5 text-sm">
      <div className="flex space-x-5 items-center">
        <Link className="hover:underline" href={"https://mail.google.com"}>
          Gmail
        </Link>
        <Link className="hover:underline" href={"https://image.google.com"}>
          Images
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl" />
        <button className="bg-blue-500 text-white px-6 py-2  font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default HomeHeader;
