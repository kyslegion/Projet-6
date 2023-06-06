
import React from 'react';
import arrow1 from '../Assets/Main/Flecheg (1).png'
import arrow2 from '../Assets/Main/Flecheg (2).png'

export default function Slideshow({ Data }) {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const goToPreviousSlide = () => {
        const lastIndex = Data.pictures.length - 1;
        const shouldResetIndex = currentIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentIndex - 1;
        setCurrentIndex(index);
      };
    
      const goToNextSlide = () => {
        const lastIndex = Data.pictures.length - 1;
        const shouldResetIndex = currentIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentIndex + 1;
        setCurrentIndex(index);
      };
      return (
        <div id='Slideshow'>
            <button id='goToPreviousSlide' onClick={goToPreviousSlide}>
            <img src={arrow2}></img>
            </button>
          <ul id='pictures'>
          
            {Data.pictures.map((element, index) => (
              <li
                key={index}
                className={`pictures ${index === currentIndex ? 'active' : ''}`}
              >
                <img id="img" src={element} alt="" />
              </li>
            ))}
            
          
          </ul>
    
          <button id='goToNextSlide' onClick={goToNextSlide}>
          <img src={arrow1}></img>
            </button>
        </div>
      );
}

