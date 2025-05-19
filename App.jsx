import React, { useState, useEffect } from 'react';
import './styles.css';

// Layout Components
import Sidebar from './src/components/layout/Sidebar';
import MainContent from './src/components/layout/MainContent';

// Section Components
import Header from './src/components/sections/Header';
import About from './src/components/sections/About';
import Applications from './src/components/sections/Applications';
import Analytics from './src/components/sections/Analytics';
import DataSources from './src/components/sections/DataSources';
import DecisionMaking from './src/components/sections/DecisionMaking';
import Multimodal from './src/components/sections/Multimodal';
import GenAIPotential from './src/components/sections/GenAIPotential';
import GenAIFramework from './src/components/sections/GenAIFramework';
import LLMTextProcessing from './src/components/sections/LLMTextProcessing';
import ImageVideoProcessing from './src/components/sections/ImageVideoProcessing';
import SystemFramework from './src/components/sections/SystemFramework';
import SolutionFramework from './src/components/sections/SolutionFramework';
import AnalyticsLevels from './src/components/sections/AnalyticsLevels';
import UseCases from './src/components/sections/UseCases';
import DataCenter from './src/components/sections/DataCenter';
import Contact from './src/components/sections/Contact';

// UI Components
import ImagePopup from './src/components/ui/ImagePopup';

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Image sets data
  const imageSets = {
    analyticlevel: [
      "asset/img/analyticlevel/Picture1.jpg",
      "asset/img/analyticlevel/Picture2.jpg",
      "asset/img/analyticlevel/Picture3.jpg",
      "asset/img/analyticlevel/Picture4.jpg"
    ],    
    application: [
      "asset/img/app/Picture5.png",
      "asset/img/app/Picture6.png",
      "asset/img/app/Picture7.jpg",
      "asset/img/app/Picture8.jpg",
      "asset/img/app/Picture9.png"
    ], 
    faster: [
      "asset/img/faster/phone.jpg",
      "asset/img/faster/Picture13.jpg"
    ], 
    multimodal: [
      "asset/img/multimodal/phone.jpg",
      "asset/img/multimodal/phone2.png",
      "asset/img/multimodal/phone3.png",
      "asset/img/multimodal/phone4.jpg",
      "asset/img/multimodal/phone5.png",
    ], 
    gen: [
      "asset/img/gen/gen.jpg"
    ],
    genframe: [
      "asset/img/gen/gen-frame.jpg"
    ],
    textprocess: [
      "asset/img/gen/text.jpg"
    ],
    imagevideoprocess: [
      "asset/img/gen/Picture1.jpg",
      "asset/img/gen/Picture2.jpg",
      "asset/img/gen/Picture3.jpg",
      "asset/img/gen/Picture4.jpg",
      "asset/img/gen/Picture5.png",
      "asset/img/gen/Picture6.jpg",
    ], 
    system: [
      "asset/img/system/system.jpg"
    ],
    media: [
      "asset/img/media/pic1.jpg",
      "asset/img/media/pic2.jpg",
      "asset/img/media/pic3.jpg",
      "asset/img/media/pic4.png",
      "asset/img/media/Picture4.jpg",
      "asset/img/media/Picture5.jpg",
      "asset/img/media/Picture6.jpg",
      "asset/img/media/Picture7.jpg",
      "asset/img/media/Picture8.jpg",
      "asset/img/media/Picture9.jpg",
      "asset/img/media/Picture10.jpg",
      "asset/img/media/Picture11.jpg",
    ],  
    info: [
      "asset/img/info/IW1.png",
      "asset/img/info/IW2.png",
      "asset/img/info/IW3.png",
      "asset/img/info/IW4.png",
      "asset/img/info/IW5.png",
    ],
    government: [
      "asset/img/government/GEI1.png",
      "asset/img/government/GEI2.png",
      "asset/img/government/GEI3.png",
      "asset/img/government/GEI4.png",
      "asset/img/government/GEI5.png",
      "asset/img/government/GEI6.png",
      "asset/img/government/GEI7.png",
      "asset/img/government/GEI8.png",
      "asset/img/government/GEI9.png",
      "asset/img/government/GEI10.png",
      "asset/img/government/GEI11.png",
    ],
    geo: [
      "asset/img/geo/GI1.png",
      "asset/img/geo/GI2.png",
      "asset/img/geo/GI3.png",
      "asset/img/geo/GI4.png",
      "asset/img/geo/GI5.png",
    ],
    territorial: [
      "asset/img/territorial/TI1.png",
      "asset/img/territorial/TI2.png",
    ],
    political: [
      "asset/img/political/PI1.png",
      "asset/img/political/PI2.png",
      "asset/img/political/PI3.png",
    ],
    business: [
      "asset/img/business/BE1.png",
      "asset/img/business/BE2.png",
      "asset/img/business/BE3.png",
      "asset/img/business/BE4.png",
    ],
    risk: [
      "asset/img/risk/RM1.png",
      "asset/img/risk/RM2.png",
      "asset/img/risk/RM3.png",
      "asset/img/risk/RM4.png",
    ]
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const openGallery = (sectionKey) => {
    const images = imageSets[sectionKey] || [];
    if (images.length === 0) return;
    
    setCurrentImages(images);
    setCurrentIndex(0);
    setPopupVisible(true);
  };

  const closeGallery = () => {
    setPopupVisible(false);
  };

  const changeImage = (direction) => {
    if (currentImages.length === 0) return;
    setCurrentIndex((prevIndex) => {
      return (prevIndex + direction + currentImages.length) % currentImages.length;
    });
  };

  // Add event listener for escape key to close popups
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        setPopupVisible(false);
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  return (
    <div className="app">
      <div className="menu-toggle" onClick={toggleSidebar}>☰</div>
      <div className="floating-particles"></div>
      
      <Sidebar visible={sidebarVisible} toggleSidebar={toggleSidebar} />
      
      <MainContent>
        <Header />
        
        <ImagePopup 
          visible={popupVisible}
          images={currentImages}
          currentIndex={currentIndex}
          onClose={closeGallery}
          onNavigate={changeImage}
        />
        
        <About />
        <Applications openGallery={() => openGallery('application')} />
        <Analytics openGallery={() => openGallery('analyticlevel')} />
        <DataSources />
        <DecisionMaking openGallery={() => openGallery('faster')} />
        <Multimodal openGallery={() => openGallery('multimodal')} />
        <GenAIPotential openGallery={() => openGallery('gen')} />
        <GenAIFramework openGallery={() => openGallery('genframe')} />
        <LLMTextProcessing openGallery={() => openGallery('textprocess')} />
        <ImageVideoProcessing openGallery={() => openGallery('imagevideoprocess')} />
        <SystemFramework openGallery={() => openGallery('system')} />
        <SolutionFramework />
        <AnalyticsLevels />
        
        <UseCases>
          {/* Pass all gallery opening functions to UseCases */}
          {{
            mediaIntelligence: () => openGallery('media'),
            informationWarfare: () => openGallery('info'),
            governmentIntelligence: {
              main: () => openGallery('government'),
              geostrategic: () => openGallery('geo'),
              territorial: () => openGallery('territorial'),
              political: () => openGallery('political')
            },
            businessExcellence: {
              main: () => openGallery('business'),
              risk: () => openGallery('risk')
            }
          }}
        </UseCases>
        
        <DataCenter />
        <Contact />
      </MainContent>
    </div>
  );
}

export default App;