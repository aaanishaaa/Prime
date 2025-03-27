import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./Cards";

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const temp = await response.json();
      setData(temp.products);
    } catch (error) {
      console.log("error", error.message);
    } finally {
      console.log("------------done!");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data.map((item,key) => <Cards key={key} title={item.title} price={item.price} />)}

    </div>
  );
}

export default App;
