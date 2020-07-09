import React, { Component } from 'react'
import Title from './Title'
import { DiJsBadge, DiReact, DiPhp, DiSass } from "react-icons/di";

export default class Services extends Component {
state = {
  services: [
    {
      icon: <DiJsBadge />,
      title: "Javascript",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima perspiciatis impedit vel veniam possimus modi.",
    },
    {
      icon: <DiReact />,
      title: "React",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima perspiciatis impedit vel veniam possimus modi.",
    },
    {
      icon: <DiPhp />,
      title: "PHP",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima perspiciatis impedit vel veniam possimus modi.",
    },
    {
      icon: <DiSass />,
      title: "Sass",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima perspiciatis impedit vel veniam possimus modi.",
    },
  ],
};
render() {
  return (
    <section className="services">
      <Title title="Skills" />
      <div className="services-center">
        {this.state.services.map((service, index) => {
          return (
            <article key={index} className="service">
              <span>{service.icon}</span>
              <h6>{service.title}</h6>
              <p>{service.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
}
