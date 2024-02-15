"use client";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const SearchBox = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerm || "");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center"
    >
      <input
        onChange={(e) => setTerm(e.target.value)}
        type="text"
        value={term}
        className="w-full focus:outline-none"
      />
      <RxCross2
        onClick={() => setTerm("")}
        className="text-2xl cursor-pointer text-gray-500 sm:mr-2"
      />
      <BsFillMicFill className="hidden sm:inline-flex text-4xl text-blue-500 border-l-2 border-gray-300 mr-3 pl-4" />
      <AiOutlineSearch
        onClick={handleSubmit}
        className="hidden text-2xl sm:inline-flex text-blue-500 cursor-pointer"
      />
    </form>
  );
};

export default SearchBox;
