import React from 'react';
import GalleryButton from '../ui/GalleryButton';

const Applications = ({ openGallery }) => {
  return (
    <section id="applications">
      <h2>Applications</h2>
      <ul>
        <li>Media & Social Media Intelligence</li>
        <li>Information Warfare</li>
        <li>Campaign Management</li>
        <li>Market Intelligence</li>
        <li>Geostrategic Intelligence</li>
        <li>Territorial Intelligence</li>
        <li>Political Intelligence</li>
        <li>Risk Management</li>
        <li>Knowledge Management</li>
      </ul>
      <GalleryButton 
        onClick={() => openGallery('application')} 
        text="View Our Application"
      />
    </section>
  );
};

export default Applications;