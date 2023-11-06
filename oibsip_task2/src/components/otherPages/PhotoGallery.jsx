import React from "react";
import ".././../assets/images/Styles/PhotoGalary.css";
import image1 from "../../assets/images/biography5.jpg";
import image2 from "../../assets/images/biography2.jpg";
import image3 from "../../assets/images/biography7.jpg";
import image4 from "../../assets/images/biography8.jpg";
import image5 from "../../assets/images/biography9.jpg";
import image6 from "../../assets/images/biography10.jpg";
import image7 from "../../assets/images/biography11.jpg";
import image8 from "../../assets/images/biography4.jpg";
import image9 from "../../assets/images/biography3.jpg";

const PhotoGalary = () => {
  return (
    <section className="hexagon-gallery">
      <div className="hex">
        <img src={image1} alt="some" />
      </div>
      <div className="hex">
        <img src={image2} alt="some" />
      </div>
      <div className="hex">
        <img src={image3} alt="some" />
      </div>
      <div className="hex">
        {" "}
        <img src={image4} alt="some" />
      </div>
      <div className="hex">
        <img src={image5} alt="some" />
      </div>
      <div className="hex">
        <img src={image6} alt="some" />
      </div>
      <div className="hex">
        <img src={image5} alt="some" />
      </div>
      <div className="hex">
        <img src={image7} alt="some" />
      </div>
      <div className="hex">
        <img src={image8} alt="some" />
      </div>
      <div className="hex">
        <img src={image9} alt="some" />
      </div>
      
    </section>
  );
};

export default PhotoGalary;
