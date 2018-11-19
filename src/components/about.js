import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

const AboutSection = () => (
  <ScrollableAnchor id="about">
    <section className="content-section bg-light">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2>
              Resume
            </h2>
            <h3>Skills</h3>
            <h4>Web Development</h4>
            <p className="lead mb-5">
              Javascript, React.js, Node.js, Express, HTML, CSS, Bootstrap, jQuery, Handlebar.js, Material-UI
            </p>
            <h4>Database Management</h4>
            <p className="lead mb-5">
              mySQL, Sequelize.js, MongoDb, Mongoose.js, Firebase
            </p>
            <h4>Languages</h4>
            <p className="lead mb-5">
              English, Mandarin
            </p>
            <h4>Other</h4>
            <p className="lead mb-5">
              Git, Heroku, MATLAB, Phaser.IO, Java, C++
            </p>
            <h3>Education</h3>
            <h4>University of California - Los Angeles</h4>
            <p className="lead mb-5">
              Bachelor of Science in Electrical Engineering - December 2013
            </p>
            <h4>University of California - Los Angeles Extension</h4>
            <p className="lead mb-5">
              MERN Stack Javascript Developer Program - November 2018
            </p>
          </div>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default AboutSection;
