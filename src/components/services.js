import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
const ServicesOffered = [
  {
    title: "LinkedIn",
    description: "Find me on LinkedIn",
    icon: "icon-social-linkedin",
    link: "https://www.linkedin.com/in/daniel-hsu-aa645627/"
  },
  {
    title: "Github",
    description: "Find me on Github",
    icon: "icon-social-github",
    link: "https://github.com/majorazero"
  },
  {
    title: "Email",
    description: "Email me",
    icon: "icon-envelope"
  }
];
const ServicesSections = () => (
  <ScrollableAnchor id="services">
    <section className="content-section bg-primary text-white text-center">
      <div className="container">
        <div className="content-section-heading">
          <h2 className="mb-5">Contact Me</h2>
        </div>
        <div className="row">
          {ServicesOffered.map((service, index) => (
            <div
              className="col-lg-4 col-md-4 mb-5 mb-lg-0"
              key={`service_${index}`}
            >
            <a className="social-link rounded-circle mx-auto mb-3" href={service.link ? service.link:""}>
              <i className={service.icon} />
            </a>
            {/*    <a className="social-link" href={service.link}>
                  <span className="service-icon rounded-circle mx-auto mb-3">
                    <i className={service.icon} />
                  </span>
              </a> */}
              <h4>
                <strong>{service.title}</strong>
              </h4>
              <p className="text-faded mb-0">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);
export default ServicesSections;
