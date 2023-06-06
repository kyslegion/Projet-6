
import React from 'react';
import Slideshow from './Slideshow';
import CardLocationCollapse from './CardLocationCollapse';

export default function CardLocation({ Data }) {
  return (
    <div id='CardLocation'>
      <Slideshow Data={Data} />
      <h1 id='title'>{Data.title}</h1>
      <span id='location'>{Data.location}</span>
      <ul id='tags'>
      {Data.tags.map((element, index) => (
        <li key={index} className={`tag${index}`}>
          {element}
        </li>
      ))}
      </ul>
      <CardLocationCollapse Data={Data} />
    </div>
  );
}

