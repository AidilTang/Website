import React from 'react';
import GalleryButton from '../ui/GalleryButton';

const Multimodal = ({ openGallery }) => {
  return (
    <section id="multimodal">
      <h2>Multimodal</h2>
      <p>Multimodal generative AI refers to systems that can process and generate content across multiple types of data, such as text, images, audio, and video, simultaneously. These AI models are designed to understand and integrate information from different modalities to create cohesive and contextually relevant outputs. For example, a multimodal AI can generate descriptive text based on an image, create images from textual descriptions, or produce videos that synchronize visual and audio elements effectively.</p>
      <p>This capability is particularly useful in applications such as advanced virtual assistants, interactive media creation, and sophisticated data analysis, where understanding and generating diverse forms of content is essential. The integration of multiple modalities enhances the AI's ability to interact with and interpret the world in a more human-like manner, making it a powerful tool for innovation across various industries.</p>
      <p>Recognize and generate content across multiple types of data, such as text, images, audio, and video</p>
      <GalleryButton 
        onClick={() => openGallery('multimodal')} 
        text="View Our Multimodal"
      />
    </section>
  );
};

export default Multimodal;