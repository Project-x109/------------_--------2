// Discography.js

import React from "react";
import "../../assets/images/Styles/Discography.css";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { musics } from "../../assets/Data/data";

const Discography = () => {
  const theme = useTheme();
  return (
    <div className="display-row">
      {musics.map((music, index) => (
        <div className="biography-container" key={index}>
          <div className="biography-content">
            <Card sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    {music.AlbumTitle}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    {music.ReleaseDate}
                  </Typography>
                </CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                >
                  <IconButton aria-label="previous">
                    {theme.direction === "rtl" ? (
                      <SkipNextIcon />
                    ) : (
                      <SkipPreviousIcon />
                    )}
                  </IconButton>
                  <IconButton aria-label="play/pause">
                    <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                  </IconButton>
                  <IconButton aria-label="next">
                    {theme.direction === "rtl" ? (
                      <SkipPreviousIcon />
                    ) : (
                      <SkipNextIcon />
                    )}
                  </IconButton>
                </Box>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={music.image}
                alt={music.AlbumTitle + `${" Image"}`}
              />
            </Card>
            <Typography
              className="biography-content"
              variant="body2"
              color="text.secondary"
            >
              {music.Description}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Discography;
