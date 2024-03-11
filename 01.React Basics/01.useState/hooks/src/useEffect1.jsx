import { useEffect, useState } from "react";

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }
        const jsonData = await response.json();
        if (jsonData && jsonData.length) {
          setData(jsonData);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  });

  return (
    <>
      <h1>Data</h1>
      <ul>
        {data.map((d, index) => (
          <li key={index}>{d.title}</li>
        ))}
      </ul>
    </>
  );
}

export default DataFetcher;
