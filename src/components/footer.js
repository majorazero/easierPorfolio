import React from "react";
const socialSites = [
  {
    link: "https://www.linkedin.com/in/daniel-hsu-aa645627/",
    icon: "icon-social-linkedin"
  },
  {
    link: "https://github.com/majorazero",
    icon: "icon-social-github"
  }
];
const FooterSection = () => (
  <footer className="footer text-center">
    <div className="container">
      <ul className="list-inline mb-5">
      {socialSites.map((site,index)=>(
        <li className="list-inline-item" key={`social_${index}`}>
          <a className="social-link rounded-circle text-white mr-3" href={site.link}>
            <i className={site.icon} />
          </a>
        </li>
      ))}
      </ul>
    </div>
  </footer>
);
export default FooterSection;
