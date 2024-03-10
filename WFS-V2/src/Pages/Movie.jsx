import React from "react";
import MovieDetail from "../Components/Movie/MovieDetail";
import { Box, Container, CssBaseline } from "@mui/material";
import { color } from "@mui/system";
import '../App.css';

const Movie = () => {
  return (
    <CssBaseline>
        <Container className="b2">
          <MovieDetail className="b3"></MovieDetail>
        </Container>
    </CssBaseline>
  );
};

export default Movie;
