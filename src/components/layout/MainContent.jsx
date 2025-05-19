import React, { useState } from 'react';
import Header from '../sections/Header';
import About from '../sections/About';
import Applications from '../sections/Applications';
import Analytics from '../sections/Analytics';
import DataSources from '../sections/DataSources';
import DecisionMaking from '../sections/DecisionMaking';
import Multimodal from '../sections/Multimodal';
import GenAIPotential from '../sections/GenAIPotential';
import GenAIFramework from '../sections/GenAIFramework';
import LLMTextProcessing from '../sections/LLMTextProcessing';
import ImageVideoProcessing from '../sections/ImageVideoProcessing';
import SystemFramework from '../sections/SystemFramework';
import SolutionFramework from '../sections/SolutionFramework';
import AnalyticsLevels from '../sections/AnalyticsLevels';
import UseCases from '../sections/UseCases';
import DataCenter from '../sections/DataCenter';
import Contact from '../sections/Contact';
import ImagePopup from '../ui/ImagePopup';

const MainContent = () => {
  const [popupState, setPopupState] = useState({
    visible: false,
    currentImages: [],
    currentIndex: 0,
  });

  const openGallery = (sectionKey) => {
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

    const images = imageSets[sectionKey] || [];
    if (images.length === 0) return;

    setPopupState({
      visible: true,
      currentImages: images,
      currentIndex: 0
    });
  };

  return (
    <div className="main-content">
      <Header />
      
      <ImagePopup 
        isVisible={popupState.visible}
        images={popupState.currentImages}
        currentIndex={popupState.currentIndex}
        onClose={() => setPopupState(prev => ({ ...prev, visible: false }))}
        onChangeImage={(direction) => {
          setPopupState(prev => ({
            ...prev,
            currentIndex: (prev.currentIndex + direction + prev.currentImages.length) % prev.currentImages.length
          }));
        }}
      />
      
      <About />
      <Applications openGallery={openGallery} />
      <Analytics openGallery={openGallery} />
      <DataSources />
      <DecisionMaking openGallery={openGallery} />
      <Multimodal openGallery={openGallery} />
      <GenAIPotential openGallery={openGallery} />
      <GenAIFramework openGallery={openGallery} />
      <LLMTextProcessing openGallery={openGallery} />
      <ImageVideoProcessing openGallery={openGallery} />
      <SystemFramework openGallery={openGallery} />
      <SolutionFramework />
      <AnalyticsLevels />
      <UseCases openGallery={openGallery} />
      <DataCenter />
      <Contact />
    </div>
  );
};

export default MainContent;