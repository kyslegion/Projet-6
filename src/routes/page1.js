
import './page1.css'
import React, { useState } from 'react';
import Layout from '../Layout/layout.js';
import HomeBanner from "../Components/HomeBanner.js";
import ListLocation from "../Components/ListLocation.js";
import CardLocation from "../Components/CardLocation.js"; 

export default function Page1() {
  const [ElementIsVisible, setElementIsVisible] = useState(true);
  const [Data, setData] = useState(null); 

  const handleData = (Data) => {
    setData(Data);
    setElementIsVisible(false)
  };

  return (
    <Layout>
      {ElementIsVisible && <HomeBanner />}
      {ElementIsVisible && <ListLocation housingCliqued={handleData} />}
      {Data && <CardLocation Data={Data} />}
    </Layout>
  );
}
