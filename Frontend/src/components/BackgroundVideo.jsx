// src/BackgroundVideo.js
import React from 'react';
import vid from "../assets/bg.webm"

const BackgroundVideo = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="w-screen h-screen fixed object-cover "
      >
        <source src={vid} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
