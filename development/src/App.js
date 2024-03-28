import './App.css';
import { useEffect, useState } from "react";
import bakeryData from "./assets/bakery-data.json";

function App() {

  const [data, setData] = useState(bakeryData);

  const loadData = () => {
    setData([...bakeryData]);
  }

  return (
    <div className="App">
      <h1>Gallery</h1>
    </div>
  );
}

export default App;
