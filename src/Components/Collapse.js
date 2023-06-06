import React, { useState, useEffect } from 'react';
import arrowUp from "../Assets/Main/Vector(6).png";
import arrowDown from "../Assets/Main/Vector(7).png";

export default function Collapse() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    // Effectuez ici les actions à exécuter lorsque l'état isOpen change
    if (isOpen) {
      console.log('Le Collapse est ouvert');
    } else {
      console.log('Le Collapse est fermé');
    }
  }, [isOpen]);

  const toggleCollapse = (index) => {
    if (activeItem === index) {
      // Si on reclique sur le même élément, on désactive l'état
      setActiveItem(null);
    } else {
      setActiveItem(index);
    }
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <section>
        <ul className="collapse">
          <li onClick={() => toggleCollapse(0)}>
            <span>Fiabilité</span>
            <img src={isOpen && activeItem === 0 ? arrowUp : arrowDown} alt=""/>
          </li>
          {activeItem === 0 && (
            <div>
              <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
            </div>
          )}
          <li onClick={() => toggleCollapse(1)}>
            <span>Respect</span>
            <img src={isOpen && activeItem === 1 ? arrowUp : arrowDown} alt=""/>
          </li>
          {activeItem === 1 && (
            <div>
              <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </div>
          )}
          <li onClick={() => toggleCollapse(2)}>
            <span>Service</span>
            <img src={isOpen && activeItem === 2 ? arrowUp : arrowDown} alt=""/>
          </li>
          {activeItem === 2 && (
            <div>
              <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
            </div>
          )}
          <li onClick={() => toggleCollapse(3)}>
            <span>Sécurité</span>
            <img src={isOpen && activeItem === 3 ? arrowUp : arrowDown} alt=""/>
          </li>
          {activeItem === 3 && (
            <div>
              <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            </div>
          )}
        </ul>
      </section>
    </div>
  );
}
