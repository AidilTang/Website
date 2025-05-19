import React from 'react';
import GalleryButton from '../ui/GalleryButton';

const MediaIntelligence = ({ openGallery }) => {
  return (
    <div id="media-intelligence">
      <h3>Media Intelligence</h3>
      <p>Media intelligence system is designed to monitor, analyze, and interpret news and social media content in real-time. By leveraging data science and generative AI, this system provides valuable insights into public sentiment, trending topics, and media coverage, enabling organizations to make informed decisions and respond proactively to media developments.</p>
      <h4>Modules:</h4>
      <ul>
        <li><strong>News Monitoring:</strong> Tracks news articles from various sources, identifying key stories, topics, and trends. Real-time tracking and categorization of news content, sentiment analysis, and keyword identification.</li>
        <li><strong>Social Media Monitoring:</strong> Monitors social media platforms for mentions, hashtags, and user engagement related to specific topics or brands. Analyzes posts, comments, likes, shares, and overall engagement to gauge public opinion and influence.</li>
        <li><strong>Sentiment Analysis:</strong> Evaluates the tone of news articles and social media posts to determine public sentiment. Uses natural language processing (NLP) to classify sentiment as positive, negative, or neutral.</li>
        <li><strong>Trend Analysis:</strong> Identifies emerging trends and topics across news and social media, highlights trending keywords and hashtags, providing insights into evolving public interests.</li>
        <li><strong>Influencer Identification:</strong> Detects key influencers and opinion leaders in the media landscape by identifying individuals with significant impact.</li>
        <li><strong>Crisis Management:</strong> Alerts users to potential crises and helps manage reputation risks. Real-time alerts for negative coverage and high-risk mentions, with recommendations for response strategies.</li>
        <li><strong>Competitive Analysis:</strong> Compares media coverage and social media presence of competitors. Provides insights into competitors' media strategies and public perception.</li>
        <li><strong>Customizable Dashboards:</strong> Offers visual representation interactive dashboards with customizable charts, graphs, and maps to display key metrics and trends.</li>
        <li><strong>Automated Reporting:</strong> Generates regular reports summarizing media activity by scheduled and on-demand reports with detailed analysis and insights.</li>
      </ul>
      <p>Media intelligence system helps organizations stay informed about media dynamics, manage their reputation, and respond effectively to public sentiment and media trends.</p>
      
      <h4>Media Intelligence Products:</h4>
      <ul>
        <li><strong>IMA - Intelligence Media Analytics:</strong> Media analysis from online, print, and TV media sources, including expose, issue, influencer, media share, sentiment, maps analysis, ontology, and other strategic analysis.</li>
        <li><strong>ISA - Intelligence Socio Analytics:</strong> Public opinion analysis from social media includes public perception of an event, figure, organization, case, issue, or policy, and public demographic analysis based on user profile (age, gender, location, activity, awareness, influence, hobby).</li>
        <li><strong>Advance Network Analysis:</strong> Raises analysis in the form of a network that interprets the relationship between accounts of an issue, influencers, buzzers, and liaisons between issues and accounts from social media such as Twitter, Instagram, and Youtube.</li>
        <li><strong>IAS - Information Admiralty System:</strong> A system that is able to monitor information on media and social media in real time, recognize issues, detect potential hoaxes, propaganda, hatespeech, demographic spread, psychography, engagement.</li>
      </ul>
      <GalleryButton 
        onClick={() => openGallery('media')} 
        text="View Our Media Intelligence"
      />
    </div>
  );
};

export default MediaIntelligence;