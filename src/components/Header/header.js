import React from "react";
import "./header.css";

const Header = () => (
  <header className="masthead d-flex">
    <div className="container text-center my-auto">
      <small>It's pronounced "shoe" 👞</small>
      <h1 className="mb-1">Hi, I'm Dan Hsu</h1>
      <h3 className="mb-5">
        <em>I'm a developer based in LA</em>
      </h3>
      <a className="btn btn-xl js-scroll-trigger headerButt" href="#portfolio">
        See some of my projects
      </a>
    </div>
    <div className="overlay" />
  </header>
);
export default Header;
