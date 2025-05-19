import React from 'react';
import GalleryButton from '../ui/GalleryButton';

const InformationWarfare = ({ openGallery }) => {
  return (
    <div id="information-warfare">
      <h3>Information Warfare</h3>
      <p>Advanced intelligence ecosystem that integrates various data sources and analytical tools to form a comprehensive Early Warning System (EWS). Key components include Intelligence Social Analytics (ISA), Intelligence Media Analytics (IMA), Intelligence Portal Data (IPD), and DeepWeb Intelligence (DWI), which collectively gather data from social media platforms, news outlets, web portals, and the deep web.</p>
      <p>This data is processed through Massive Profiling (MP) and fed into a Command Center equipped with Big Data capabilities and an Information Admiralty System (IAS). The system leverages Real-Time Analytics (RTA) and Advanced Network Analytics (ANA) to provide actionable insights, which inform campaign management strategies and the activities of Intelligence Cyber Troops (ICT).</p>
      <p>This robust framework enables organizations to engage, campaign, and influence opinions effectively, while continuously monitoring and analyzing information to detect and mitigate potential threats.</p>
      
      <h4>Information Warfare Components:</h4>
      <ul>
        <li><strong>Massive Profiling (MP):</strong> Intelligence Massive Profiling - Mapping hundreds of millions of social media accounts for demographic analysis, psychography, networking, and conversation, for tactical and strategic problem solving.</li>
        <li><strong>RTA - Real Time Analytics:</strong> More in-depth analysis of issues in realtime both potentially trending, finding the origin of issues (actors), both on social media such as Twitter and Facebook, as well as Group Messenger such as Whatsapp and Telegram.</li>
        <li><strong>ICT - Intelligence CyberTroops / Avatar:</strong> AI-based avatar management software transforms the way digital personas are created, managed, and utilized across various platforms. This software leverages Generative AI to generate highly realistic and customizable avatars, reflecting individual preferences, enhancing user engagement and interaction. AI-driven avatar management systems can continuously learn and adapt, improving their responsiveness and effectiveness over time.</li>
        <li><strong>ICM - Intelligence Campaign Management:</strong> Harnesses the power of Generative AI and data science to optimize campaigns with unprecedented precision and efficiency. AI can automate and personalize campaign elements, including content creation, audience targeting, and timing, ensuring that messages resonate with the right audience at the right time. Furthermore, AI-driven tools provide real-time performance analytics, enabling users to continuously monitor and adjust campaigns for optimal results.</li>
      </ul>
      <GalleryButton 
        onClick={() => openGallery('info')} 
        text="View Our Informartion Warfare"
      />
    </div>
  );
};

export default InformationWarfare;