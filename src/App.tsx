import React from "react";
import Header from "./components/common/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import { Container } from "@mui/material";

const App = () => (
  <div>
    <Header />
    <Container maxWidth={"lg"}>
      <MainPage />
    </Container>
  </div>
);

export default App;
