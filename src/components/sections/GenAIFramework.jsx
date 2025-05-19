import React from 'react';
import GalleryButton from '../ui/GalleryButton';

const GenAIFramework = ({ openGallery }) => {
  return (
    <section id="gen-ai-framework">
      <h2>Generative AI Framework</h2>
      <p>Data from various sources like internal systems, media, social media, statistical data, books, and research are aggregated into a Data Lake for training purposes. This data is then used in Deep Learning processes involving text, image, and video processing, contributing to a Large Language Model (LLM) and a Universal Knowledge Base, which employs supervised, unsupervised, and reinforcement learning methods.</p>
      <p>The processing phase integrates specific knowledge through internal semantic vectors, functioning alongside LLM processing capabilities. These are then translated into semantic chains by an AI multi-agent system, utilized in multimodal visualization tools and prompt management for front-end applications, enabling functionalities such as cognitive search, image discovery, and audio-visual discovery.</p>
      <GalleryButton 
        onClick={() => openGallery('genframe')} 
        text="View Our Generative AI Framework"
      />
    </section>
  );
};

export default GenAIFramework;