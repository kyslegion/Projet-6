import React from 'react';
import Slideshow from './Slideshow';
import CardLocationCollapse from './CardLocationCollapse';

export default function CardLocation({ Data }) {

  const renderStars = (rating) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      const starClass = i < rating ? 'star-red' : 'star-gray';
      stars.push(<i key={i} className={`fas fa-star ${starClass}`}></i>);
    }

    return stars;
  };

  return (
    <div id='CardLocation'>
      <Slideshow Data={Data} />

      <ul id='row1'>
        <li>
          <h1 id='hostTitle'>{Data.title}</h1>
          <span id='location'>{Data.location}</span>
        </li>
        <li id='hostName' className='hidden-pc'>
          <span>{Data.host.name}</span>
          <img src={Data.host.picture} alt='' />
        </li>
      </ul>

      <div id='row2'>
        <ul id='tags'>
          {Data.tags.map((element, index) => (
            <li key={index} className={`tag${index}`}>
              {element}
            </li>
          ))}
        </ul>

        <ul id='host'>
          <li className='stars'>{renderStars(Data.rating)}</li>
          <li id='hostName' className='visible-pc'>
            <span>{Data.host.name}</span>
            <img src={Data.host.picture} alt='' />
          </li>
        </ul>
      </div>

      <CardLocationCollapse Data={Data} />
    </div>
  );
}
