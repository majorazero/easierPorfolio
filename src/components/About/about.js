import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import "./about.css";

const AboutSection = () => (
  <ScrollableAnchor id="about">
    <section className="content-section bg-light">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h1>
              Resume
            </h1>
            <h3 className="aboutHeader">Project Experience</h3>
              <h4 className="aboutTitle">Agility – Agile Based Workflow Manager App</h4>
              <p className="lead mb-5 aboutContent">
                <li>
                  Designed and created a work management app that simulates an AGILE workflow experience.
                </li>
                <li>
                  Designed database structure in SQL/Sequelize.js, major frontend features using React.js and backend routing and server setting with Node.js
                </li>
                <li>
                  Managed a team of 3 other people, with responsibilities of assigning tasks, dealing with bugs and running daily meetings to keep track of progress
                </li>
              </p>
              <h4 className="aboutTitle">Curator – Grouped Restaurant Rating </h4>
              <p className="lead mb-5 aboutContent">
                <li>
                  Designed and created a Yelp based rating app that allows users to rate a restaurant amongst people who share similar interests.
                </li>
                <li>
                  Designed database structure in SQL/Sequelize.js, major frontend features with HTML, Javascript, jQuery and Handlebars.js as well as writing backend server code and various routes in Node.js.
                </li>
                <li>
                  Managed a team of 3 other people, with responsibilities of assigning tasks, dealing with bugs and running daily meetings to keep track of progress
                </li>
              </p>
              <h4 className="aboutTitle">Itinerary – A Travel Itinerary App</h4>
              <p className="lead mb-5 aboutContent">
                <li>
                  Designed and created a Yelp based app that lets a user plan their trips
                </li>
                <li>
                  Wrote major features with Javascript, jQuery, Bootstrap and CSS.
                </li>
                <li>
                  Managed a team of 2 other people, with responsibilities of assigning tasks, dealing with bugs and running daily meetings to keep track of progress
                </li>
              </p>
            <h3 className="aboutHeader">Professional Experience</h3>
              <h4 className="aboutTitle">Esmond Natural: Project Manager</h4>
              <p className="lead mb-5 aboutContent">
                <li>
                  Managed an international team launching products both in the US and overseas
                </li>
                <li>
                  Handled communications with Southeast Asia regional head of Nature's Bounty in regards to assisting their product launches in new markets
                </li>
                <li>
                  Handled negotiations with manufactures for materials or newly commissioned products
                </li>
              </p>
              <h4 className="aboutTitle">Beyond Curriculum: Teacher</h4>
              <p className="lead mb-5 aboutContent">
                <li>
                  Designed accelerated Math and Science curriculums for SAT/AP.
                </li>
                <li>
                  Experience teaching in both a group setting and one on one settings.
                </li>
              </p>
            <h3 className="aboutHeader">Skills</h3>
            <h4 className="aboutTitle">Web Development</h4>
            <p className="lead mb-5 aboutContent">
              Javascript, React.js, Node.js, Express, HTML, CSS, Bootstrap, jQuery, Handlebar.js, Material-UI
            </p>
            <h4 className="aboutTitle">Database Management</h4>
            <p className="lead mb-5 aboutContent">
              mySQL, Sequelize.js, MongoDb, Mongoose.js, Firebase
            </p>
            <h4 className="aboutTitle">Languages</h4>
            <p className="lead mb-5 aboutContent">
              English, Mandarin
            </p>
            <h4 className="aboutTitle">Other</h4>
            <p className="lead mb-5 aboutContent">
              Git, Heroku, MATLAB, Phaser.IO, Java, C++
            </p>
            <h3 className="aboutHeader">Education</h3>
            <h4 className="aboutTitle">University of California - Los Angeles</h4>
            <p className="lead mb-5 aboutContent">
              Bachelor of Science in Electrical Engineering - December 2013
            </p>
            <h4 className="aboutTitle">University of California - Los Angeles Extension</h4>
            <p className="lead mb-5 aboutContent">
              MERN Stack Javascript Developer Program - November 2018
            </p>
          </div>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default AboutSection;
