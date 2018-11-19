import React from "react";

const Header = () => (
  <header className="masthead d-flex">
    <div className="container text-center my-auto">
      <h1 className="mb-1">Hi, I'm Dan</h1>
      <h3 className="mb-5">
        <em>I'm a developer based in LA</em>
      </h3>
      <a className="btn btn-primary btn-xl js-scroll-trigger" href="#portfolio">
        See some of my projects
      </a>
    </div>
    <div className="overlay" />
  </header>
);
export default Header;
