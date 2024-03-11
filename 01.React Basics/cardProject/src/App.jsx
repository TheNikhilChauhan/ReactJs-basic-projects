import React, { useEffect, useState } from "react";
import Card from "./Card";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log(`Error fetching data`, error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      {data &&
        data.map((item) => (
          <Card
            key={item.id}
            userId={item.userId}
            title={item.title}
            body={item.body}
          />
        ))}
    </>
  );
};

export default App;
