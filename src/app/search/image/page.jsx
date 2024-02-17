// "use client";

import React, { Children } from "react";
import Link from "next/link";

import Error from "../error";
import ImageSearchResults from "@/components/ImageSearchResults";

const ImageSearchPage = async ({ searchParams }) => {
  const apiKey = process.env.NEXT_API_KEY;
  const contextKey = process.env.NEXT_CONTEXT_KEY;
  const startIndex = searchParams.start || "1";
  console.log(apiKey);
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${contextKey}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`
  );
  console.log(response);
  if (!response.ok) return <Error />;
  const data = await response.json();
  const results = data.items;
  console.log(results);
  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl">No results find {searchParams.searchTerm} </h1>
        <p>
          Try searching the web or images for something else
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }
  // console.log(data);
  return <div>{results && <ImageSearchResults results={data} />}</div>;
};

export default ImageSearchPage;
