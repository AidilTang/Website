import React from 'react';
import GalleryButton from '../ui/GalleryButton';

const ImageVideoProcessing = ({ openGallery }) => {
  return (
    <section id="image-video-processing">
      <h2>Image & Video Processing</h2>
      <h3>Image Processing:</h3>
      <ul>
        <li><strong>Object Detection:</strong> Identifies and classifies objects within images for applications like automated tagging and surveillance.</li>
        <li><strong>Image Captioning:</strong> Generates descriptive text for images, aiding accessibility and SEO.</li>
        <li><strong>Image Enhancement:</strong> Improves image quality and performs edits, beneficial for photography and medical imaging.</li>
        <li><strong>Visual Data Analysis:</strong> Analyzes patterns in images for insights in agriculture, remote sensing, and industrial monitoring.</li>
      </ul>
      <h3>Video Processing:</h3>
      <ul>
        <li><strong>Content Analysis:</strong> Identifies key frames and actions within videos, useful for content moderation and highlight creation.</li>
        <li><strong>Gesture Recognition:</strong> Interprets human activities and gestures in videos for surveillance and sports analytics.</li>
        <li><strong>Video Captioning:</strong> Creates captions and summaries, enhancing accessibility and navigation of video content.</li>
        <li><strong>AR/VR Integration:</strong> Enhances augmented and virtual reality experiences through real-time visual analysis and content generation.</li>
      </ul>
      <p>These capabilities enable LLMs to provide robust tools for analyzing, generating, and enhancing visual media, driving innovation and efficiency across various industries.</p>
      <GalleryButton 
        onClick={() => openGallery('imagevideoprocess')} 
        text="View Our Image and Video Processing"
      />
    </section>
  );
};

export default ImageVideoProcessing;