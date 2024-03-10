import React from "react";
import SearchAppBar from "../Components/Home/SearchAppBar";
import { Box, Container, CssBaseline } from "@mui/material";
import { color } from "@mui/system";
import '../App.css'
import Movies from "../Components/Home/Movies";
const Home = () => {
  return (
    <CssBaseline>
      <Container>
          <SearchAppBar></SearchAppBar>
          <a>Most Popular Movies</a>
          <Movies></Movies>
      </Container>
    </CssBaseline>
  );
};

export default Home;
