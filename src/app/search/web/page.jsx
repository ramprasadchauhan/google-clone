import React from "react";
import Error from "../error";
import Link from "next/link";

const WebSearchPage = async ({ searchParams }) => {
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_API_KEY}&cx=${process.env.NEXT_CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );
  if (!response.ok) throw new Error("Something went wrong!");
  const data = await response.json();
  const results = data.items;
  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl">No results find {searchParams.searchTerm} </h1>
        <p>
          Try searching the web or images for something else{" "}
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }
  // console.log(data);
  return (
    <div>
      {results &&
        results.map((result, i) => {
          return <h1 key={i}>{result.title}</h1>;
        })}
    </div>
  );
};

export default WebSearchPage;
