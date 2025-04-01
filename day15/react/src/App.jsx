import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./Cards";

function App() {
  const [data, setData] = useState({ products: []});
  const [currPage, setcurrPage] = useState(0);

  const getData = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${currPage}`);
      const temp = await response.json();
      setData(temp);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, [currPage]);

  const totalPages = Math.ceil(data.total / data.limit);
  const pages = [];
  for (let i = 0; i <= totalPages; i++) {
    pages.push(i + 1);
  }
  return (
    <div>
      <select onChange={(e) => setcurrPage(e.target.value - 1)}>
        {pages.map((pageNumber) => (
          <option key={pageNumber} value={pageNumber}>
            {pageNumber}
          </option>
        ))}
      </select>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.products.map((item, idx) => (
          <Cards
            key={idx}
            title={item.title}
            price={item.price}
            images={item.images}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
