import React, {Component} from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import "./about.css";

class AboutSection extends Component{
  render(){
    return (
      <ScrollableAnchor id="about">
        <section className="content-section aboutBack">
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <h1>
                  Resume
                </h1>

                <h3 className="aboutHeader">Professional Experience</h3>

                  <h4 className="aboutTitle">Beauty By Design: Junior Full-Stack Engineer</h4>
                  <p className="lead mb-5 aboutContent">
                    <li>
                      Designed clean and maintainable front-end (React.js) and back-end (Ruby on Rails) codes for features in an Agile workflow, utilizing test- driven-development (RSpec).
                    </li>
                    <li>
                      Participated in Agile point estimation with engineering team and product owner, identifying potential problems and recommending solutions
                    </li>
                    <li>
                      Utilized pair programming to ensure higher quality code.
                    </li>
                    <li>
                      Built a promo interface that greatly assisted the businesses’ ability to implement promos quickly and efficiently
                    </li>
                  </p>

                  <h4 className="aboutTitle">Esmond Natural: Project Manager</h4>
                  <p className="lead mb-5 aboutContent">
                    <li>
                      Lead an international team to launch various products and marketing campaigns both in the US and overseas
                    </li>
                    <li>
                      Participated in negotiations with suppliers and manufacturers to obtain competitive prices for the business
                    </li>
                  </p>

                <h3 className="aboutHeader">Project Experience</h3>
                  <h4 className="aboutTitle">Agility – Agile Based Workflow Manager App</h4>
                  <p className="lead mb-5 aboutContent">
                    <li>
                      Designed and created a work management app that simulates an AGILE workflow experience.
                    </li>
                    <li>
                      Architected database structure in SQL/Sequelize.js, major frontend features using React.js and backend routing and server setting with Node.js
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
                      Architected database structure in SQL/Sequelize.js, major frontend features with HTML, Javascript, jQuery and Handlebars.js as well as writing backend server code and routes in Node.js.
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

                <h3 className="aboutHeader">Skills</h3>
                <h4 className="aboutTitle">Web Development</h4>
                <p className="lead mb-5 aboutContent">
                  JavaScript, HTML, CSS
                </p>
                <h4 className="aboutTitle">Frontend Frameworks</h4>
                <p className="lead mb-5 aboutContent">
                  React.js, jQuery
                </p>
                <h4 className="aboutTitle">CSS Frameworks</h4>
                <p className="lead mb-5 aboutContent">
                  Bootstrap
                </p>
                <h4 className="aboutTitle">Backend</h4>
                <p className="lead mb-5 aboutContent">
                  Node.js, Express, Ruby on Rails
                </p>
                <h4 className="aboutTitle">Database Management</h4>
                <p className="lead mb-5 aboutContent">
                  mySQL, Sequelize.js, MongoDB, Mongoose.js, Firebase
                </p>
                <h4 className="aboutTitle">Adobe Creative Suite</h4>
                <p className='lead mb-5 aboutContent'>
                  Photoshop, Illustrator
                </p>
                <h4 className="aboutTitle">Other</h4>
                <p className="lead mb-5 aboutContent">
                  Git, Heroku, Java, C++
                </p>
                <h4 className="aboutTitle">Languages</h4>
                <p className="lead mb-5 aboutContent">
                  English, Mandarin
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
                <p>
                  <a href="./pdf/daniel-hsu-resume.pdf" download=''>Download My Resume!</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollableAnchor>
    );
  }
}


export default AboutSection;
