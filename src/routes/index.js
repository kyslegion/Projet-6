
import './index.css'
import React, { useState } from 'react';
import Layout from '../Layout/layout.js';

import ListLocation from "../Components/ListLocation.js";
import Banner from '../Components/Banner';
import image from "../Assets/Main/img1.png";

export default function Index() {
  const [showComponent, setShowComponent] = useState(true);
  const text=["Chez vous, partout et ailleurs"]

  return (
    <Layout>
      {showComponent && <Banner image={image} text={text} />}
      {showComponent && <ListLocation />}
    </Layout>
  );
}
