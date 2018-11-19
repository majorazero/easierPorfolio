import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/stylish-portfolio.css";

import Sidebar from "./components/sidebar";
import Header from "./components/header";
import AboutSection from "./components/about";
import ServicesSections from "./components/services";
import PortfolioSection from "./components/portfolio";
import FooterSection from "./components/footer";

class App extends React.Component {
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
