import React, { Component } from "react";
import { FaLeanpub, FaConnectdevelop, FaUserFriends,  FaRegChartBar } from "react-icons/fa";
import Title from "./Title";
import { useState } from "react";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaUserFriends />,
        title: "roomie pairing",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      },
      {
        icon: <FaConnectdevelop />,
        title: "software training",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      },
      {
        icon: <FaLeanpub />,
        title: "project assistance",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      },
      {
        icon: <FaRegChartBar />,
        title: "data analysis",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
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
