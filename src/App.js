import React from "react";
import "./App.css";
import Nav from "./components/nav/nav";
import Banner from "./components/banner/banner";
import Row from "./components/rows/Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title={"Netflix Orignals"}
        fetchURL={requests.fetchnetflixorignals}
      />
      <Row title={"Trending Now"} fetchURL={requests.fetchtrending} />
      <Row title={"Top Rated"} fetchURL={requests.fetchtoprated} />
      <Row title={"Action Movies"} fetchURL={requests.fetchactionmovies} />
      <Row title={"Comedy Shows"} fetchURL={requests.fetchcomedymovies} />
      <Row title={"Romantic Shows"} fetchURL={requests.fetchromancemovies} />
      <Row title={"Horror Movies"} fetchURL={requests.fetchhorrormovies} />
      <Row title={"Documentaries"} fetchURL={requests.fetchdocumentaries} />
    </div>
  );
}

export default App;
