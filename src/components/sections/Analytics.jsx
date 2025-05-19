import React from 'react';
import GalleryButton from '../ui/GalleryButton';

const Analytics = ({ openGallery }) => {
  return (
    <section id="analytics">
      <h2>Analytics Use Cases</h2>
      <ul>
        <li>TERRITORIAL</li>
        <li>MARKET</li>
        <li>ECONOMIC</li>
        <li>POLITICAL</li>
        <li>SECURITY</li>
        <li>GEOSTRATEGIC</li>
        <li>INDUSTRIAL</li>
        <li>DEMOGRAPHIC</li>
        <li>FINANCIAL</li>
      </ul>
      <GalleryButton 
        onClick={() => openGallery('analyticlevel')} 
        text="View Our Analytic Levels"
      />
    </section>
  );
};

export default Analytics;