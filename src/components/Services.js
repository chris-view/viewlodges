import React, { Component } from "react";
import { FaShuttleVan, FaPaintRoller, FaGasPump } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      
      {
        icon: <FaShuttleVan />,
        title: "Shuttles",
        info:
          "Move your properties stress free, with our coolest off-campus rides."
      },
      {
        icon: <FaPaintRoller />,
        title: "painting",
        info:
          "Get in tourch with our A-level skilled room painters and designers."
      },
      {
        icon: <FaGasPump/>,
        title: "Gas Filling",
        info:
          "Filling your gas is just a click away."
      },
     
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Incoming Services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
