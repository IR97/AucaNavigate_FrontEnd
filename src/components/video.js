import React from 'react';
import './styles/Video.css';

const Video = ({ src, title }) => (
  <div className="video-container">
    <a href={src} target="_blank" rel="noopener noreferrer" title={title}> {/* Wrap with <a> tag */}
      <video src={src} controls title={title} className="video-player" />
    </a>
    <p className="video-title">{title}</p>
  </div>
);

export default Video;