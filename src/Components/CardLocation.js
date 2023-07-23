import React from 'react';
import Slideshow from './Slideshow';

export default function CardLocation({ house }) {

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
      <Slideshow house={house} />

      <ul id='row1'>
        <li>
          <h1 id='hostTitle'>{house.title}</h1>
          <span id='location'>{house.location}</span>
        </li>
        <li id='hostName' className='hidden-pc'>
          <span>{house.host.name}</span>
          <img src={house.host.picture} alt='hostName' />
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
            <img src={house.host.picture} alt='host picture' />
          </li>
        </ul>
      </div>

    </div>
  );
}
