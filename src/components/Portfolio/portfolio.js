import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import "./portfolio.css";
const portfolioItems = [
  {
    imgSrc: "./img/agility.png",
    heading: "Agility",
    description: "A agile-based workflow management apps.",
    url: "https://scrum41.herokuapp.com/"
  },
  {
    imgSrc: "./img/curator.png",
    heading: "Curator",
    description: "A rating app for poeple who share the same sensibilities.",
    url: "https://shrouded-falls-26640.herokuapp.com/"
  },
  {
    imgSrc: "./img/itinerary.png",
    heading: "Itinerary",
    description: "A travel planner app that lets you plan your entire trip day by day.",
    url: "https://majorazero.github.io/Itenerary/"
  },
  // {
  //   imgSrc: "./img/portfolio-4.jpg",
  //   heading: "Workspace",
  //   description:
  //     "A yellow workspace with some scissors, pencils, and other objects."
  // }
];
const PortfolioSection = () => (
  <ScrollableAnchor id="portfolio" className="portfolioBody">
    <section className="content-section portSec">
      <div className="container">
        <div className="content-section-heading text-center">
          <h3 className="text-secondary mb-0">Portfolio</h3>
          <h2 className="mb-5">Recent Projects</h2>
        </div>
        <div className="row no-gutters">
          {portfolioItems.map((project, index) => (
            <div className="col-lg-6" key={`portfolio_item_${index}`}>
              <a className="portfolio-item" href={project.url}>
                <span className="caption">
                  <span className="caption-content">
                    <h2 className="captionHead">{project.heading}</h2>
                    <p className="mb-0">{project.description}</p>
                  </span>
                </span>
                <img className="img-fluid" src={project.imgSrc} alt="image" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default PortfolioSection;