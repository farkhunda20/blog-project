import React from "react";
import Post from "./Post";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Layout from "./Layout";

const IndexPage = () => {
  return (
    <>
      <main>
        <Post />
        <Post />
        <Post />
      </main>
    </>
  );
};

export default IndexPage;
