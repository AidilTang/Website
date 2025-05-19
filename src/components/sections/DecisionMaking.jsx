import React from 'react';
import GalleryButton from '../ui/GalleryButton';

const DecisionMaking = ({ openGallery }) => {
  return (
    <section id="decision-making">
      <h2>Faster & Better Decision Making</h2>
      <p>In today's fast-paced business environment, top-level decision-making is increasingly enhanced by the integration of generative AI through mobile interfaces and messaging platforms.</p>
      <p>Executives can now leverage AI-driven insights and recommendations directly on their smartphones, allowing for quick, data-driven decisions anytime and anywhere.</p>
      <p>Generative AI processes vast amounts of data to identify patterns, forecast trends, and suggest optimal strategies, all delivered seamlessly via intuitive mobile apps and instant messaging services. This accessibility ensures that critical decisions are informed by the latest analytics, fostering agility and responsiveness in the leadership process, ultimately driving better business outcomes.</p>
       <GalleryButton 
        onClick={() => openGallery('faster')} 
        text="View"
      />
    </section>
  );
};

export default DecisionMaking;