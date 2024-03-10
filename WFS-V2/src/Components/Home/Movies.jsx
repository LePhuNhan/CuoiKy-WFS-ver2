import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(4);

  useEffect(() => {
    fetch("https://teachingk18.github.io/WF_Test_ver2/data.json")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        // Kiểm tra nếu danh sách phim ít hơn hoặc bằng 4, thì set endIndex bằng độ dài của danh sách phim
        if (data.length <= 4) {
          setEndIndex(data.length);
        }
      });
  }, []);

  const handleNext = () => {
    setStartIndex((prevStartIndex) => prevStartIndex + 4);
    setEndIndex((prevEndIndex) => prevEndIndex + 4);
  };

  const handlePrev = () => {
    setStartIndex((prevStartIndex) => Math.max(prevStartIndex - 4, 0));
    setEndIndex((prevEndIndex) => Math.max(prevEndIndex - 4, 4));
  };

  const buttonStyle = {
    width: "40px",
    height: "40px",
    border: "none",
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
  };

  const renderedMovies = movies.slice(startIndex, endIndex).map((movie) => (
    <Grid item xs={3} key={movie.ID}>
      <Link to={`/movie/${movie.ID}`} style={{ textDecoration: "none" }}> {/* Thêm Link */}
        <Card sx={{ minWidth: 100, boxShadow: "none" }}>
          <CardContent>
            <img
              src={movie.image}
              alt={movie.name}
              style={{
                width: "100%",
                height: "300px",
                borderRadius: "15px",
                objectFit: "cover",
              }}
            />
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: "600", fontSize:'19px' }}
            >
              {movie.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {movie.time} min {movie.year}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  ));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {renderedMovies}
      </Grid>
      {(startIndex > 0 || movies.length > endIndex) && (
        <Box mt={-1} display="flex" justifyContent="center">
          {startIndex > 0 && (
            <Button
              variant="contained"
              onClick={handlePrev}
              startIcon={<ArrowBackIcon />}
              style={{ ...buttonStyle, marginRight: "8px", paddingLeft: "28px" }}
            ></Button>
          )}
          {movies.length > endIndex && (
            <Button
              variant="contained"
              onClick={handleNext}
              endIcon={<ArrowForwardIcon />}
              style={{ ...buttonStyle, paddingRight: "28px" }}
            ></Button>
          )}
        </Box>
      )}
    </Box>
  );
}
