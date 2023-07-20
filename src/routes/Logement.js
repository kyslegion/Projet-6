import React, { useEffect, useState } from 'react';
import Slideshow from '../Components/Slideshow'
// import CardLocationCollapse from '../Components/CardLocationCollapse'
import "./Logement.css"
import Layout from '../Layout/layout';
import { useParams } from 'react-router-dom';
import Collapse from '../Components/Collapse';

export default function Logement() {
  const { id } = useParams();
  const [dataJson, setDataJson] = useState(null);
  const renderStars = (rating) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      const starClass = i < rating ? 'star-red' : 'star-gray';
      stars.push(<i key={i} className={`fas fa-star ${starClass}`}></i>);
    }

    return stars;
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData = await response.json();
        setDataJson(jsonData);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    fetchData();
  }, []);

  if (!dataJson) {
    return <div>Loading...</div>;
  }

  // Find the corresponding house object based on the provided id
  const house = dataJson.find((element) => element.id === id);
  const items = [
    {
      title: "Description",
      content: house.description
    },
    {
      title: "Equipement",
      content: house.equipments.map((element, index) => (
        <div key={index} className={`equipment${index}`}>
          {element}
        </div>
      ))
    },
   
  ];
  let displayFlexColumn=false;
  return (
    <Layout>
    <div id='CardLocation'>
      <Slideshow house={house} />

      <ul id='row1'>
        <li>
          <h1 id='hostTitle'>{house.title}</h1>
          <span id='location'>{house.location}</span>
        </li>
        <li id='hostName' className='hidden-pc'>
          <span>{house.host.name}</span>
          <img src={house.host.picture} alt='' />
        </li>
      </ul>

      <div id='row2'>
        <ul id='tags'>
          {house.tags.map((element, index) => (
            <li key={index} className={`tag${index}`}>
              {element}
            </li>
          ))}
        </ul>

        <ul id='host'>
          <li className='stars'>{renderStars(house.rating)}</li>
          <li id='hostName' className='visible-pc'>
            <span>{house.host.name}</span>
            <img src={house.host.picture} alt='' />
          </li>
        </ul>
      </div>
      <Collapse items={items} displayFlexColumn={displayFlexColumn}  />
      {/* <CardLocationCollapse house={house} /> */}
    </div>
    </Layout>
  );
}
