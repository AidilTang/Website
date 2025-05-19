import React from 'react';
import GalleryButton from '../ui/GalleryButton';

const LLMTextProcessing = ({ openGallery }) => {
  return (
    <section id="llm-text-processing">
      <h2>LLM Text Processing</h2>
      <p>Sophisticated LLM (Large Language Model) text processing integrates various analytical features to provide comprehensive insights.</p>
      <ul>
        <li><strong>Topic Analysis</strong> - identifies and categorizes the main subjects or themes discussed in the text. For instance, it highlights key statements and quotes related to specific topics, such as political relationships and structural issues within the Russian defense ministry.</li>
        <li><strong>5W+1H Analysis</strong> - breaks down information into essential components: Who, What, When, Where, Why, and How. It systematically analyzes and presents data about significant actors, events, locations, and contexts. This helps in understanding the full scope of the situation being discussed.</li>
        <li><strong>Actors Analysis</strong> - visualizes the relationships and interactions among various individuals and entities mentioned in the text. By mapping these connections, it provides a clear view of the network of influencers and key players involved in the topic.</li>
        <li><strong>Location Statistics</strong> - statistical analysis of locations mentioned in the text offers insights into geographical distribution and the frequency of mentions. It helps in identifying hotspots or regions that are central to the discussion.</li>
        <li><strong>Sentiment Analysis with Score</strong> - assesses the sentiment expressed in the text, providing a score that quantifies the positivity or negativity of statements. It offers a detailed breakdown of sentiments related to specific issues or events, enabling a nuanced understanding of the emotional tone.</li>
      </ul>
      <p>The LLM text processing system effectively combines these analytical tools to extract, categorize, and interpret complex information from large datasets. This integration allows users to gain deep insights and make informed decisions based on a thorough understanding of the data.</p>
      <GalleryButton 
        onClick={() => openGallery('textprocess')} 
        text="View Our LLM Text Processing"
      />
    </section>
  );
};

export default LLMTextProcessing;