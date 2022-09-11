import React from "react";
import { useEffect } from "react";

const Home = () => {
  useEffect(function () {
    document.title = "Home";
  }, []);
  return (
    <>
      <h1>Ini adalah home</h1>
    </>
  );
};

export default Home;
