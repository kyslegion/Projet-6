
import './index.css'
import React from 'react';
import Layout from '../Layout/layout.js';

import ListLocation from "../Components/ListLocation.js";
import Banner from '../Components/Banner';
import image from "../Assets/Main/img1.png";

export default function Index() {
  const text=["Chez vous, partout et ailleurs"]

  return (
    <Layout>
      <Banner image={image} text={text} />
      <ListLocation />
    </Layout>
  );
}
