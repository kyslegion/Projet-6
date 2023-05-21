import React from 'react';

export default function HotelList() {
  const fetchData = async () => {
    try {
      const response = await fetch('/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonData = await response.json();
      console.log(jsonData);
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  };

  fetchData();

  return (
    <div>
      {/* Affichez vos données ici. */}
    </div>
  );
}
