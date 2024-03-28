import './App.css';
import { useEffect, useState } from "react";
import bakeryData from "./assets/bakery-data.json";
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

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {

  const [data, setData] = useState([teddy, teddy2, teddy_wed, teddy_pilot, teddy_heart, teddy_couch, teddy_sun, teddy_boy, teddy_tourist, teddy_blue, teddy_toys, teddy_covid]);
  const [cart, setCart] = useState([]);

  const loadData = () => {
    setData([...bakeryData]);
  }

  const addToCart = (item) => {
    console.log('adding to cart:', item)

    setCart(prev_cart =>
      [...prev_cart, item])
        // .filter(price => price < 5))
  }

  const bakeryItemsJSX = data.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
    <img onClick={(e) => {addToCart(item)}} src={item} alt="white teddy bear" width="150" height="100"/> // replace with BakeryItem component
  ))

  const cartJSX = cart.length === 0 ? <p>Cart is empty</p>
  : cart.map((item, index) => <img src={item} alt="white teddy bear" width="150" height="100"/>)

  return (
    <div className="App">
      <h1>Gallery</h1>
      {bakeryItemsJSX}
      <hr></hr>
      {cartJSX}
    </div>
  );
}

export default App;
