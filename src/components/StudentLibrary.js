// src/pages/Library.js
import React, { useState } from 'react';

// Importing evacuation plan images
import EvPlanBase from '../images/EvPlan-Basement.jpg';
import EvPlanGround from '../images/EvPlan-Ground.jpg';
import EvPlanFloor1 from '../images/EvPlan-Floor1.jpg';
import EvPlanFloor2 from '../images/EvPlan-Floor2.jpg';
import BaseClasses from '../images/Basement-Classes.jpg';
import GroundClasses from '../images/Gfloor-Classes.jpg';
import Floor1Classes from '../images/Floor1-Classes.jpg';
import Floor2Classes from '../images/Floor2-Classes.jpg';


// Folder component to handle nested folders
const Folder = ({ title, children, nested = false, images = [], imageNames = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleFolder = () => setIsOpen(!isOpen);

  return (
    <div className={nested ? 'nested-folder' : 'folder'}>
      <div className={nested ? 'nested-folder-header' : 'folder-header'} onClick={toggleFolder}>
        {title}
      </div>
      {isOpen && (
        <div className={nested ? 'nested-folder-content' : 'folder-content'}>
          {children}
          {images.length > 0 &&
            images.map((src, index) => (
              <div key={index} className="folder-item">
                <img
                  src={src}
                  alt={imageNames[index]}
                  className="folder-image"
                  onClick={() => window.open(src, '_blank')} // Opens the image in a new tab
                />
                <p>{imageNames[index]}</p> {/* Display the name of the image */}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

// Main Library component
const Library = () => {
  // Array of image names corresponding to the images
  const imageNames1 = [
    "Basement Classes Map.jpg",
    "Ground Floor Classes Map.jpg",
    "Floor1 Classes Map.jpg",
    "Floor2 Classes Map.jpg",
  ];
  const imageNames = [
    "Evacuation Plan Basement.jpg",
    "Evacuation Plan Ground Floor.jpg",
    "Evacuation Plan Floor1.jpg",
    "Evacuation Plan Floor2.jpg",
  ];

  return (
    <div className="page-container">
      <h5>Maps</h5>
      <p>Access every school facility by being guided through the maps gallery</p>

      <div className="folder-list">
        {/* Gishushu Campus */}
        <Folder title="Gishushu Campus">
          <Folder title="Class Maps" nested images={[BaseClasses, GroundClasses, Floor1Classes, Floor2Classes]} imageNames={imageNames1} />
          <Folder title="Evacuation Map" nested images={[EvPlanBase, EvPlanGround, EvPlanFloor1, EvPlanFloor2]} imageNames={imageNames} />
        </Folder>

        {/* Masoro Campus */}
        <Folder title="Masoro Campus">
          <Folder title="Class Maps" nested images={[EvPlanBase, EvPlanGround, EvPlanFloor1, EvPlanFloor2]} imageNames={imageNames} />
          <Folder title="Evacuation Map" nested images={[EvPlanBase, EvPlanGround, EvPlanFloor1, EvPlanFloor2]} imageNames={imageNames} />
        </Folder>

        {/* Ngoma Campus */}
        <Folder title="Ngoma Campus">
          <Folder title="Class Maps" nested images={[EvPlanBase, EvPlanGround, EvPlanFloor1, EvPlanFloor2]} imageNames={imageNames} />
          <Folder title="Evacuation Map" nested images={[EvPlanBase, EvPlanGround, EvPlanFloor1, EvPlanFloor2]} imageNames={imageNames} />
        </Folder>
      </div>
    </div>
  );
};

export default Library;
