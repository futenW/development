import './App.css';
import { useId, useEffect, useState } from "react";
import teddy from "./assets/images/jeff.jpeg";
import teddy2 from "./assets/images/teddy2.jpeg";
import teddy_wed from "./assets/images/teddy_wed.jpeg";
import teddy_pilot from "./assets/images/teddy_pilot.jpeg";
import teddy_heart from "./assets/images/teddy_heart.jpeg";
import teddy_couch from "./assets/images/teddy_couch.jpeg";
import teddy_sun from "./assets/images/teddy_sun.jpeg";
import teddy_boy from "./assets/images/teddy_boy.jpeg";
import teddy_tourist from "./assets/images/teddy_tourist.jpeg";
import teddy_blue from "./assets/images/teddy_blue.jpeg";
import teddy_toys from "./assets/images/teddy_toys.jpeg";
import teddy_covid from "./assets/images/teddy_covid.jpeg";

function App() {

  const image_data = [[teddy, 2023], 
                      [teddy2, 2055], 
                      [teddy_wed, 1921], 
                      [teddy_pilot, 1999], 
                      [teddy_heart, 2019], 
                      [teddy_couch, 2000], 
                      [teddy_sun, 1983], 
                      [teddy_boy, 2016], 
                      [teddy_tourist, 1900], 
                      [teddy_blue, 2030], 
                      [teddy_toys, 2008], 
                      [teddy_covid, 2001]]

  const [data, setData] = useState(image_data);
  const [cart, setCart] = useState([]);

  const addToFavorites = (item) => { if (!cart.includes(item)) setCart(prev_cart => [...prev_cart, item]) }

  const sortByDate = () => {
    let sorted_data = []
    for (let i = 0; i < data.length + sorted_data.length; i++) {
      let min = data[0]
      for (let j = 0; j < data.length; j++) if (data[j][1] < min[1]) min = data[j]
      if (data.indexOf(min) > -1) data.splice(data.indexOf(min), 1);
      sorted_data.push(min);
    }
    setData(sorted_data);
  }

  function DateFilter(props) {
    const id = useId();
    const [input, setInput] = useState(props?.value ?? '');
    if (props.direction === "Min") {
      return (
        <>
          <label htmlFor={id}>{props.direction} Year: </label>
          <input id={id} value={input} onInput={e => setInput(e.target.value)}/>
          <button onClick={(e) => {setData(prev_cart => [...prev_cart].filter(item => item[1] >= input))}}>Filter</button>
        </>
      );
    } else {
      return (
        <>
          <label htmlFor={id}>{props.direction} Year: </label>
          <input id={id} value={input} onInput={e => setInput(e.target.value)}/>
          <button onClick={(e) => {setData(prev_cart => [...prev_cart].filter(item => item[1] <= input))}}>Filter</button>
        </>
      );
    }
  }

  const bakeryItemsJSX = data.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
    <>{item[1]}<img onClick={(e) => {addToFavorites(item)}} src={item[0]} alt="white teddy bear" width="150" height="100"/></> // replace with BakeryItem component
  ))

  const cartJSX = cart.length === 0 ? <p>No favorites yet</p>
  : cart.map((item, index) => <img src={item[0]} alt="white teddy bear" width="150" height="100"/>)

  return (
    <div className="App">
      <h1>Gallery</h1>

      <DateFilter direction="Min"></DateFilter>
      <br></br>
      <DateFilter direction="Max"></DateFilter>
      <div><button onClick={(e) => {sortByDate()}}>Sort Date</button></div>

      {bakeryItemsJSX}
      <div><button onClick={ () => {setData(image_data)} }>Reset</button></div>

      <hr></hr>

      <h1>Favorites ({cart.length})</h1>
      {cartJSX}

      <div><button onClick={ () => {setCart([])} }>Clear</button></div>
    </div>
  );
}

export default App;
