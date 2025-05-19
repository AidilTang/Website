import React from 'react';
import MediaIntelligence from './MediaIntelligence';
import InformationWarfare from './InformationWarfare';
import GovernmentIntelligence from './GovernmentIntelligence';
import BusinessExcellence from './BusinessExcellence';

const UseCases = ({ openGallery }) => {
  return (
    <section id="use-cases" className="section">
      <h2>USE CASES</h2>
      
      <MediaIntelligence openGallery={openGallery} />
      <InformationWarfare openGallery={openGallery} />
      <GovernmentIntelligence openGallery={openGallery} />
      <BusinessExcellence openGallery={openGallery} />
      
      <div className="platform-framework">
        <h2>Platform Framework</h2>
        <div className="framework-grid">
          <div className="framework-item">
            <h3>Data Collection System</h3>
            <p>Smart system that performs the process of retrieving and cleaning data from various sources</p>
          </div>
          <div className="framework-item">
            <h3>Data Integration</h3>
            <p>Smart system that manages transportation, queuing incoming data for processing and further transformation in the system</p>
          </div>
          <div className="framework-item">
            <h3>Data Lake/Storage</h3>
            <p>Smart system that manages data storage from various sources and formats, both structured data and unstructured data so that it can be accessed easily, quickly and safely.</p>
          </div>
          <div className="framework-item">
            <h3>Data Transformation & Enrichment</h3>
            <p>Smart systems that manage the process of managing data based on Artificial Intelligence including Natural Language Processing, Machine Learning, Deep Learning</p>
          </div>
          <div className="framework-item">
            <h3>Data Analytics & Visualization</h3>
            <p>Smart system that manages the process of analyzing data and visualized according to user needs</p>
          </div>
        </div>
      </div>

      <div className="big-data-ecosystem">
        <h2>Big Data Ecosystem</h2>
        <p>The Big Data Ecosystem encompasses a comprehensive network of tools, technologies, and processes designed to collect, store, analyze, and visualize vast amounts of data. At its core, it integrates diverse data sources such as social media, IoT devices, transactional systems, and more, ensuring a continuous flow of structured and unstructured data. Key components include data storage solutions like Hadoop and cloud-based systems, data processing frameworks such as Spark, and advanced analytics platforms leveraging machine learning and AI for predictive and prescriptive insights. Visualization play a crucial role in translating complex data sets into actionable intelligence.</p>
      </div>
    </section>
  );
};

export default UseCases;