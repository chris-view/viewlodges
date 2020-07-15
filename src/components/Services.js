import React, { Component } from "react";
import { FaLeanpub, FaUserFriends, FaShuttleVan, FaPaintRoller, FaGasPump, FaLaptop } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaUserFriends />,
        title: "roomie pairing",
        info:
          "Get matched with paddies to stay with off-campus."
      },
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
      {
        icon: <FaLaptop/>,
        title: "software training",
        info:
          "Get skilled in sorftware development, and be in command of jobs."
      },
      {
        icon: <FaLeanpub />,
        title: "project assistance",
        info:
          "Our expert teams will assist you in your final year projects and thesis."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="our services" />
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
