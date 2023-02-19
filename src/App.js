import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import MenuMaker from "./components/menumaker";
import About from "./components/about";
import { Home } from "./components/home";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { ButtonGroup, Button } from "react-bootstrap";

import "./App.css";

export default function App() {
  return (
    <Container>
      <Router>
        <ButtonGroup>
          <Button variant="light">
            <Link to="/">Home</Link>
          </Button>
          <Button variant="light">
            <Link to="/about">About</Link>
          </Button>
          <Button variant="light">
            <Link to="/menumaker">Menu Maker</Link>
          </Button>
        </ButtonGroup>
        <Header />
        <Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/menumaker">
            <MenuMaker />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Route>
      </Router>
      <Footer />
    </Container>
  );
}
