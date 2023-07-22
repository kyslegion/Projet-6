import React, { useState } from 'react';
import arrowUp from "../Assets/Main/Vector(6).png";
import arrowDown from "../Assets/Main/Vector(7).png";

export default function Collapse({ items, displayFlexColumn }) {
  const [openItems, setOpenItems] = useState([]);

  const toggleCollapse = (index) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((item) => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  return (
    <section>
        <ul className={`collapse ${displayFlexColumn ? 'column' : 'row'}`}>
          {items.map((item, index) => (
            <li key={index} onClick={() => toggleCollapse(index)}>
              <div className='title' >
                <span className='titleSpan' >{item.title}</span>
                <img className='titleImg' src={openItems.includes(index) ? arrowUp : arrowDown} alt=""/>
              </div>
              
              {openItems.includes(index) && (
                <span className='text'>
                  <p>{item.content}</p>
                </span>
              )}
              
            </li>
          ))}
        </ul>
      </section>
  );
}