import React, {Component} from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/stylish-portfolio.css";

import Sidebar from "./components/sidebar";
import Header from "./components/header";
import ServicesSections from "./components/services";
import PortfolioSection from "./components/portfolio";
import AboutSection from "./components/About/about.js";
import FooterSection from "./components/Footer/footer.js";

class App extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <Header />
        <PortfolioSection />
        <AboutSection />
        <ServicesSections />
        <FooterSection />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
