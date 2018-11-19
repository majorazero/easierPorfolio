import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
const portfolioItems = [
  {
    imgSrc: "./img/agility.png",
    heading: "Agility",
    description: "A agile-based workflow management apps."
  },
  {
    imgSrc: "./img/curator.png",
    heading: "Curator",
    description:
      "A rating app for poeple who share the same sensibilities."
  },
  {
    imgSrc: "./img/itinerary.png",
    heading: "Itinerary",
    description:
      "A travel planner app that lets you plan your entire trip day by day."
  },
  // {
  //   imgSrc: "./img/portfolio-4.jpg",
  //   heading: "Workspace",
  //   description:
  //     "A yellow workspace with some scissors, pencils, and other objects."
  // }
];
const PortfolioSection = () => (
  <ScrollableAnchor id="portfolio">
    <section className="content-section">
      <div className="container">
        <div className="content-section-heading text-center">
          <h3 className="text-secondary mb-0">Portfolio</h3>
          <h2 className="mb-5">Recent Projects</h2>
        </div>
        <div className="row no-gutters">
          {portfolioItems.map((project, index) => (
            <div className="col-lg-6" key={`portfolio_item_${index}`}>
              <a className="portfolio-item" href="">
                <span className="caption">
                  <span className="caption-content">
                    <h2>{project.heading}</h2>
                    <p className="mb-0">{project.description}</p>
                  </span>
                </span>
                <img className="img-fluid" src={project.imgSrc} alt="" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default PortfolioSection;
