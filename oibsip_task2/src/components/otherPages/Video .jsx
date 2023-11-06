import React from "react";

const Video = ({ title, url, thumbnail }) => {
  return (
    <div className="video-container">
      <h1 style={{color:"whitesmoke"}}>{title}</h1>
      <div className="video-player">
        <iframe
          width="560"
          height="315"
          src={url}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        {/* <img src={thumbnail} alt={`${title} Thumbnail`} /> */}
      </div>
    </div>
  );
};

export default Video;
