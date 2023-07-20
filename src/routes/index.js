
import './index.css'
import React, { useState } from 'react';
import Layout from '../Layout/layout.js';
// import HomeBanner from "../Components/HomeBanner.js";

import ListLocation from "../Components/ListLocation.js";
import CardLocation from "../Components/CardLocation.js"; 
import Banner from '../Components/Banner';
import image from "../Assets/Main/img1.png";
// import Logement from "../Components/Logement.js";

export default function Index() {
  const [showComponent, setShowComponent] = useState(true);
  const [house, setHouse] = useState(null); 

  const housingSelected = (house) => {
    setHouse(house);
    setShowComponent(false)
  };
  const text=["Chez vous, partout et ailleurs"]
  return (
    <Layout>
      {showComponent && <Banner image={image} text={text} />}
      {showComponent && <ListLocation housingSelected={housingSelected} />}
      {/* {house && <CardLocation house={house} />} */}
    </Layout>
  );
}
