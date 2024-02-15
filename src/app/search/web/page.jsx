import React from "react";

const WebSearchPage = async ({ searchParams }) => {
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_API_KEY}&cx=${process.env.NEXT_CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );
  const data = await response.json();
  const results = data.items;
  console.log(data);
  return (
    <div>
      {results &&
        results.map((result, i) => {
          return <h1 key={i}>{result.title}</h1>;
        })}
      hii
    </div>
  );
};

export default WebSearchPage;
