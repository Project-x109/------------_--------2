import React from "react";
import "../../assets/images/Styles/biography.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { profiles } from "../../assets/Data/data";
import PhotoGalary from "./PhotoGallery";
import Video from "./Video ";
import { video } from "../../assets/Data/data";
const Biography = () => {
  return (
    <>
      {/* <div className="biography-header">
        <h1>Avicii</h1>
      </div> */}
      <div className="display-row">
        {profiles.map((profile, index) => (
          <div className="biography-container" key={index}>
            <div className="biography-content">
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={profile.image}
                    alt="Profile Image"
                  />
                  <CardContent>
                    <Typography
                      className="biography-content"
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      {profile.title}
                    </Typography>
                    <Typography
                      className="biography-content"
                      variant="body2"
                      color="text.secondary"
                    >
                      {profile.description}
                    </Typography>
                    <Typography
                      className="biography-content"
                      variant="body2"
                      color="text.secondary"
                    >
                      {profile.description2}
                    </Typography>
                    <Typography
                      className="biography-content"
                      variant="body2"
                      color="text.secondary"
                    >
                      {profile.description3}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </div>
        ))}
      </div>
      <PhotoGalary />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
        className="app-container"
      >
        {video.map((single, index) => (
          <div key={index} style={{margin:"10px"}} className="video-item">
            <Video
              title={single.title}
              url={single.url}
              thumbnail={single.thumbnail}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Biography;
