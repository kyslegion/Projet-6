import React from 'react';
import arrow1 from '../Assets/Main/Flecheg (1).png'
import arrow2 from '../Assets/Main/Flecheg (2).png'

export default function Slideshow({ house }) {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const goToPreviousSlide = () => {
        const lastIndex = house.pictures.length - 1;
        const shouldResetIndex = currentIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentIndex - 1;
        setCurrentIndex(index);
      };
    
      const goToNextSlide = () => {
        const lastIndex = house.pictures.length - 1;
        const shouldResetIndex = currentIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentIndex + 1;
        setCurrentIndex(index);
      };
      return (
        <div id='Slideshow'>
            {house.pictures.length > 1 && (
              <button id='goToPreviousSlide' onClick={goToPreviousSlide}>
                <img src={arrow2} alt='left arrow'></img>
              </button>
            )}
          <ul id='pictures'>
            {house.pictures.map((element, index) => (
              <li key={index} className={`pictures ${index === currentIndex ? 'active' : ''}`}>
                <img id="img" src={element} alt="house " />
              </li>
            ))}
          </ul>
            {house.pictures.length > 1 && (
              <button id='goToNextSlide' onClick={goToNextSlide}>
                <img src={arrow1} alt='right arrow'></img>
              </button>
            )}
            <div id="carouselCounter">{currentIndex + 1}/ {house.pictures.length}</div>
        </div>
      );
}
