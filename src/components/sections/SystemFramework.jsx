import React from 'react';
import GalleryButton from '../ui/GalleryButton';

const SystemFramework = ({ openGallery }) => {
  return (
    <section id="system-framework">
      <h2>System Framework</h2>
      <p>The framework is integration of a comprehensive Big Data platform with Generative AI and LLM (Large Language Model) processing to provide diverse intelligence solutions. The Generative AI component processes this data through advanced text, image, video, and event processing techniques, enabling massive profiling and generating actionable insights.</p>
      <p>This integrated approach facilitates a robust and dynamic environment for data-driven decision-making across multiple domains.</p>
      <GalleryButton 
        onClick={() => openGallery('system')} 
        text="View Our System Solution"
      />
    </section>
  );
};

export default SystemFramework;